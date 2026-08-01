import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useSearchParamState(initial: string, key: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const valueFromParams = searchParams.get(key);

  const [value, setValue] = useState<string>(valueFromParams ?? initial);
  
  const syncValueToURL = (next: string) => {
    setValue(next)
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if(next) newParams.set(key, next);
      else newParams.delete(key);

      if(newParams.get("page") !== "1") newParams.set("page", "1");

      return newParams;
    })
  }

  return { value, setValue: syncValueToURL }

}