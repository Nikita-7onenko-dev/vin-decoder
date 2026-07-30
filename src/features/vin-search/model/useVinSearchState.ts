import { useState } from "react";

const vinSearchState = {
  validVinCache: "",
  autoFillCache: ""
}

export function useVinSearchState() {
  const [autoFill, setAutoFill] = useState<string>(vinSearchState.autoFillCache);
  const [validVin, setValidVin] = useState<string>(vinSearchState.validVinCache);

  const setValidVinAndCache = (vin: string) => {
    vinSearchState.validVinCache = vin;
    setValidVin(vin);
  }

  const setAutoFillAndCache = (vin: string) => {
    vinSearchState.autoFillCache = vin;
    setAutoFill(vin);
  }

  return {
    validVin,
    setValidVin: setValidVinAndCache,
    autoFill,
    setAutoFill: setAutoFillAndCache
  }
}