import type { ControllerError } from "@/features/vin-search/ui/VinDecodeResult/VinDecodeResult.types";
import { formDataValidator } from "@/shared/lib/formDataValidator";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useHomePageController(
  validVin: string,
  setValidVin: (vin: string) => void, 
  setAutoFill: (vin: string) => void, 
  addVinToHistory: (vin: string) => void
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const vinFromURL = searchParams.get("vin")
  
  const [controllerError, setControllerError] = useState<null | ControllerError>(null)
  
  const syncVinToURL = (vin: string) => {
    if(vinFromURL === vin) return;

    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev)
      newParams.set("vin", vin)
      return newParams
    })
  }

  useEffect(() => {
    if (!controllerError || !validVin) return;

    setControllerError(null);
  }, [validVin]);

  useEffect(() => {
    const shouldRestoreURL = Boolean(validVin) && !vinFromURL;
    const shouldRestoreCache = !validVin && Boolean(vinFromURL) && vinFromURL !== null;

    if(shouldRestoreCache) {
      if(formDataValidator.vin(vinFromURL)) {
        setControllerError({
          title: "Invalid Vin",
          details: [
            {code: 1, message: "Looks like VIN doesn't survive the trip. Please check the link and try again."},
            {code: 2, message: `Whaa? ${vinFromURL}? Nice try, though`},
          ]
        })
        return;
      }
      setValidVin(vinFromURL)
      setAutoFill(vinFromURL)
      addVinToHistory(vinFromURL)
    }

    if(shouldRestoreURL) {
      syncVinToURL(validVin)
    }
  }, [])

  const onSelectVin = (vin: string) => {
    setValidVin(vin)
    setAutoFill(vin)
    syncVinToURL(vin)
  }

  const onDecodeVin = (vin: string) => {
    setValidVin(vin)
    addVinToHistory(vin)
    syncVinToURL(vin)
  }

  return {
    onSelectVin,
    onDecodeVin,
    controllerError
  }
}