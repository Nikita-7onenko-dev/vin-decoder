import { useState } from 'react';
import './StatusMessage.styles.css'
import type { StatusDetail } from './StatusMessage.types';

type Props = {
  variant: "error" | "warning";
  title: string;
  details: string | StatusDetail[];
}

export default function StatusMessage({variant="error", title, details}: Props) {

  const [close, setClose] = useState(false);

  if(close) return null;

  const isMultiply = Array.isArray(details)
  let content: React.ReactNode;

  if(isMultiply) {
    content = (
      <ul>
        {details.map( d => (
          <li key={d.code}>{d.message}</li>
        ))}
      </ul>
    )
  } else {
    content = <p>{details}</p>
  }

   return (
      <div className={`message-container message-container--${variant}`}>
        <div>
          <h2>{title}</h2>
          <button 
            className='main-button'
            onClick={() => setClose(true)}  
          >X</button>
        </div>
        {content}
      </div>
    );
}