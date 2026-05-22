import { fetchAllVariables } from "@/api/variables/variables.api";
import type { Variable } from "@/api/variables/variables.types";
import type { ApiError } from "@/shared/errors/ApiError";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useVariablesQuery() {
  return useQuery<Variable[], ApiError>({
    queryKey: ["variables"],
    queryFn: async ({signal}) => fetchAllVariables(signal),
    staleTime: Infinity,
  });
}

const CACHE_KEY = "variables";
const cacheRef: Map<string, Variable[]> = new Map();

export function useVariablesFetch() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);
  const [data, setData] = useState<Variable[] | null>(null);
  console.log(`isLoading - ${isLoading}`)

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      if(cacheRef.has(CACHE_KEY)) {
        const cacheData = cacheRef.get(CACHE_KEY);
        if(cacheData) {
          setError(null);
          setData(cacheData);
          setIsLoading(false);
          return;
        }
      }
      // setTimeout(() => setIsLoading(true), 0);
      ;
      try{
        const data = await fetchAllVariables(controller.signal);

        setError(null);
        setData(data);

        cacheRef.set(CACHE_KEY, data);
      } catch(err) {
        if(err instanceof DOMException && err.name === "AbortError") return;
        setError(err as ApiError);
        setData(null);
      } finally {
        if(!controller.signal.aborted)setIsLoading(false);
      }
    }

    load()

    return () => controller.abort();
  })

  return { isLoading, error, data }
}