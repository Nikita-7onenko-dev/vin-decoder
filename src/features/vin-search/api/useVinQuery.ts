import { fetchVin } from "@/api/vin/vin.api";
import type { VinResult } from "@/api/vin/vin.types";
import type { ApiError } from "@/shared/errors/ApiError";
import { useEffect, useState } from "react";

const cacheRef: Map<string, VinResult> = new Map()

export function useVinFetch(vin: string)  {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [data, setData] = useState<VinResult | null>(null);

  useEffect(() => {
    if(!vin) return;
    const controller = new AbortController;

    const load = async () => {

      if(cacheRef.has(vin)) {
        const cacheData = cacheRef.get(vin);
        if(cacheData) {
          setData(cacheData); 
          setIsLoading(false);
          setError(null);
          return;
        }
      }
      setIsLoading(true);
      try{
        const data = await fetchVin(vin, controller.signal);
        
        setError(null);
        setData(data);

        cacheRef.set(vin, data);
      } catch(err) {
        if(err instanceof DOMException && err.name === "AbortError") return;
        setData(null);
        setError(err as ApiError)
      } finally {
        setIsLoading(false);
      }
    }

    load();

    return () => controller.abort()
  }, [vin]);

  return { isLoading, error, data }
}