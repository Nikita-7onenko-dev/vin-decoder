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
    <div className="loading-dots">
      <span className="loading-dots__circle"></span>
      <span className="loading-dots__text">Loading{dots}</span>
    </div>
  )
}