import useVinQuery from "@/features/vin-search/api/useVinQuery";
import useVinHistory from "@/features/vin-search/model/useVinHistory";
import VinDecodeResult from "@/features/vin-search/ui/VinDecodeResult";
import VinForm from "@/features/vin-search/ui/VinForm";
import VinHistory from "@/features/vin-search/ui/VinHistory";
import { useState } from "react";

export default function HomePage(): React.JSX.Element {
  
  const [validVin, setValidVin] = useState<string>("");
  const { data, error, isLoading } = useVinQuery(validVin);

  const { history, addVin, clearHistory } = useVinHistory();

  return (
    <>
      <VinForm setValidVin={setValidVin} addVinToHistory={addVin} externalVin={validVin} />
      <VinHistory history={history} onSelectVin={(vin) => setValidVin(vin)} currentVin={validVin} clearHistory={clearHistory}/>
      <VinDecodeResult data={data} transportError={error} isLoading={isLoading}/>
    </>
  )
}