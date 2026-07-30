import useVinHistory from "@/features/vin-search/model/useVinHistory";
import VinDecodeResult from "@/features/vin-search/ui/VinDecodeResult/VinDecodeResult";
import VinForm from "@/features/vin-search/ui/VinForm";
import VinHistory from "@/features/vin-search/ui/VinHistory";
import { useVinSearchState } from "@/features/vin-search/model/useVinSearchState";
import { useHomePageController } from "@/pages/HomePage/model/useHomePageController";

import './HomePage.styles.css'

export default function HomePage() {
  
  const { history, addVinToHistory, clearHistory } = useVinHistory();
  
  const {validVin, setValidVin, autoFill, setAutoFill} = useVinSearchState();

  const { onDecodeVin, onSelectVin, controllerError } = useHomePageController(validVin, setValidVin, setAutoFill, addVinToHistory)

  return (
    <>
      <VinForm onDecodeVin={onDecodeVin} autoFill={autoFill} setAutoFill={setAutoFill}/>
      <VinHistory history={history} onSelectVin={onSelectVin} currentVin={validVin} clearHistory={clearHistory}/>
      <VinDecodeResult validVin={validVin} controllerError={controllerError}/>
    </>
  )
}