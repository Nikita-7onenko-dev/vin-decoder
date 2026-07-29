import { useVariables } from "@/features/variables/api/useVariables";
import { LoadingDots } from "@/shared/ui/LoadingDots/LoadingDots";
import { useParams } from "react-router-dom";
import { StatusMessage } from "@/shared/ui/StatusMessage/StatusMessage";

import './VariableDetails.styles.css'
import { GoBackButton } from "@/shared/ui/GoBackButton/GoBackButton";


export default function VariableDetails(): React.JSX.Element {

  const { variableId } = useParams();
  
  const { data: variables, isLoading, error } = useVariables()
  
  if(error) {
    return <StatusMessage title="Error fetching variables" variant="error" details={error.message} />
  }

  if(isLoading) return (
    <section className="variable-details">  
      <div className="variable-details__header">
        <GoBackButton />
        <LoadingDots />
      </div>
    </section>
  )

  const variable = variables?.find(({id}) => id === variableId);

  if(!variable) return (
    <section className="variable-details">  
      <div className="variable-details__header">
        <GoBackButton />
        <h2>Property details</h2>
      </div>
        <StatusMessage title="404 Property not found" variant="error" details={`No property was found for ID "${variableId}". Please check the link and try again`}/>
    </section>
  )

  return (
    <section className="variable-details">  
      <div className="variable-details__header">
        <GoBackButton />
        <h2>{variable.label}</h2>
      </div>
      <div className="variable-details__description">
        <strong>Description:</strong> 
        {variable.value}
      </div>
    </section>
  )
}