import './StatusMessage.styles.css'
import type { StatusDetail } from './StatusMessage.types';
import { statusIcons } from './StatusMessage.icons';

type Props = {
  variant: "error" | "warning";
  title: string;
  details: string | StatusDetail[];
}

export default function StatusMessage({variant="error", title, details}: Props) {

  const isMultiply = Array.isArray(details)
  let content: React.ReactNode;

  if(isMultiply) {
    content = (
      <ul>
        {details.map( d => (
          <li key={d.id}>{d.message}</li>
        ))}
      </ul>
    )
  } else {
    content = <p>{details}</p>
  }

   return (
      <div className={`message-container message-container--${variant}`}>
        <div>
          {statusIcons[variant]}<h2>{title}</h2>
        </div>
        {content}
      </div>
    );
}