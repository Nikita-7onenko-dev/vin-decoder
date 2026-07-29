import { useVinContext } from "@/app/providers/VinContextProvider";
import useVinHistory from "@/features/vin-search/model/useVinHistory";
import VinDecodeResult from "@/features/vin-search/ui/VinDecodeResult";
import VinForm from "@/features/vin-search/ui/VinForm";
import VinHistory from "@/features/vin-search/ui/VinHistory";

import './HomePage.styles.css'
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage(): React.JSX.Element {
  
  const {validVin, setValidVin, autoFill, setAutoFill} = useVinContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const vinFromURL = searchParams.get("vin")
  
  const { history, addVinToHistory, clearHistory } = useVinHistory();

  useEffect(() => {
    const isURLReconcile = validVin && !vinFromURL;
    const isContextReconcile = !validVin && vinFromURL;

    if(isContextReconcile) {
      addVinToHistory(vinFromURL)
      setValidVin(vinFromURL)
      setAutoFill(vinFromURL)
    }

    if(isURLReconcile) {
      setSearchParams(prev => {
        const newParams = new URLSearchParams(prev)
        newParams.set("vin", validVin)
        return newParams
      })
      addVinToHistory(validVin)
    }
  }, [])

  const onSelectVin = (vin: string) => {
    setValidVin(vin);
    setAutoFill(vin);
    if(vinFromURL === vin) return
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev)
      newParams.set("vin", vin)
      return newParams
    })
  }

  const onDecodeVin = (vin: string) => {
    setValidVin(vin)
    addVinToHistory(vin)
    if(vinFromURL === vin) return;
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev)
      newParams.set("vin", vin)
      return newParams
    })
  }

  return (
    <>
      <VinForm onDecodeVin={onDecodeVin} autoFill={autoFill} setAutoFill={setAutoFill}/>
      <VinHistory history={history} onSelectVin={onSelectVin} currentVin={validVin} clearHistory={clearHistory}/>
      <VinDecodeResult validVin={validVin}/>
    </>
  )
}