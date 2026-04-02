import { useState } from "react";

const STORAGE_KEY = "vinHistory";

export default function useVinHistory() {

  const [history, setHistory] = useState<string[]>(() => {
      const storedHistory = localStorage.getItem(STORAGE_KEY);
      return storedHistory ? JSON.parse(storedHistory) : [];
    });

  const addVin = (vin: string) => {
    setHistory(prevHistory => {
      const newHistory = [vin, ...prevHistory.filter(v => v !== vin)].slice(0, 3);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  };

  const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
    setHistory([]);
  }
  
  return { history, addVin, clearHistory };
}