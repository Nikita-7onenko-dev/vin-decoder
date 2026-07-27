import './StatusMessage.styles.css'
import type { StatusDetail } from './StatusMessage.types';

type Props = {
  variant: "error" | "warning";
  title: string;
  details: string | StatusDetail[];
}

export function StatusMessage({variant, title, details}: Props) {

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
        <h2>{title}</h2>
        {content}
      </div>
    );
}