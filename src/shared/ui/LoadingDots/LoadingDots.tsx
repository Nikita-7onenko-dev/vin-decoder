import { useEffect, useState } from "react";

import './LoadingDots.styles.css'

export default function LoadingDots() {

  const [dots, setDots] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(
      () => setDots(prev => prev.length >=3 ? '' : prev + '.'),
      200
    );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="loading-dots">Loading{dots}</span>
  )
}