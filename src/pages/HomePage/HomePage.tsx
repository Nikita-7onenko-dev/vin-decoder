import { useVinContext } from "@/app/providers/VinContextProvider";
import useVinQuery, { useVinFetch } from "@/features/vin-search/api/useVinQuery";
import useVinHistory from "@/features/vin-search/model/useVinHistory";
import VinDecodeResult from "@/features/vin-search/ui/VinDecodeResult";
import VinForm from "@/features/vin-search/ui/VinForm";
import VinHistory from "@/features/vin-search/ui/VinHistory";
import { useState } from "react";

export default function HomePage(): React.JSX.Element {
  
  const {validVin, setValidVin} = useVinContext();
  const [autoFill, setAutoFill] = useState<string>("");

  const onSelectVin = (vin: string) => {
    setValidVin(vin);
    setAutoFill(vin);
  }

  const { data, error, isLoading } = useVinFetch(validVin);

  const { history, addVin, clearHistory } = useVinHistory();

  return (
    <>
      <VinForm setValidVin={setValidVin} addVinToHistory={addVin} autoFill={autoFill} setAutoFill={setAutoFill}/>
      <VinHistory history={history} onSelectVin={onSelectVin} currentVin={validVin} clearHistory={clearHistory}/>
      <VinDecodeResult data={data} transportError={error} isLoading={isLoading}/>
    </>
  )
}