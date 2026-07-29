import { useEffect, useState } from "react";

const STORAGE_KEY = "vinHistory";

export default function useVinHistory() {

  const [history, setHistory] = useState<string[]>(() => {
    try{
      const storedHistory = localStorage.getItem(STORAGE_KEY);
      return storedHistory ? JSON.parse(storedHistory) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history])

  const addVinToHistory = (vin: string) => {
    setHistory(prevHistory => {
      if(prevHistory[0] === vin) return prevHistory;

      const newHistory = [vin, ...prevHistory.filter(v => v !== vin)].slice(0, 3);
      return newHistory;
    });
  };

  const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
    setHistory([]);
  }
  
  return { history, addVinToHistory, clearHistory };
}