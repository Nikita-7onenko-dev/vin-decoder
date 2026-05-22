import { createContext, useContext, useState } from "react";

type VinContextType = {
  validVin: string;
  setValidVin: React.Dispatch<React.SetStateAction<string>>;
}

const VinContext = createContext<VinContextType | null>(null);


export function useVinContext(): VinContextType {
  const ctx = useContext(VinContext);
  if(!ctx) throw new Error("useVinContext must be used inside VinContextProvider");
  return ctx;
}

export function VinContextProvider({children}: {children: React.ReactNode}) {
  const [validVin, setValidVin] = useState<string>("");

  return (
    <VinContext.Provider value={{validVin, setValidVin}} >
      {children}
    </VinContext.Provider>
  )
}