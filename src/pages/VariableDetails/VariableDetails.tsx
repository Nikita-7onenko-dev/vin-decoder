import { useVariablesFetch } from "@/features/variables/api/useVariables";
import { LoadingDots } from "@/widgets/LoadingDots/LoadingDots";
import { Link, useParams } from "react-router-dom";

import './VariableDetails.styles.css'


export default function VariableDetails(): React.JSX.Element {

  const { variableId } = useParams();
  
  const { data: variables, isLoading, error } = useVariablesFetch()
  
  if(error) {
    return (
      <div className="global__message-container global__message-container--error">
        Error fetching variables
        <p>{error.message}</p>
      </div>
    )
  }

  const variable = variables?.find(variable => variable.id === variableId);
  
  return (
    <section className="variable-details">  
      <div className="variable-details__header">
        <Link to="/variables">
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
        </Link>
        <h2>{isLoading ? <LoadingDots /> : variable?.label || "Property Details"}</h2>
      </div>
      {variable ? (
          <div className="variable-details__description">
            <strong>Description:</strong> {variable.value}
          </div>
      ) : (
        !isLoading && <p>Property not found</p>
      )}
    </section>
  )
}