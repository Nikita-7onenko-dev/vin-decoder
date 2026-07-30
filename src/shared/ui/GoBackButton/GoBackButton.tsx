import { useNavigate } from 'react-router-dom';
import './GoBackButton.styles.css'

export default function GoBackButton() {

  const navigate = useNavigate();

  const handleBack = () => navigate(-1)
  
  return (
    <button 
      onClick={handleBack}
      className="go-back-button"
    >
      <svg
        viewBox="0 0 24 24"
        width="40"
        height="40"
        fill="none"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M13 9L10 12L13 15"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}