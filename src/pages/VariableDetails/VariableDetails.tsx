import { useVariables } from "@/features/variables/api/useVariables";
import { useParams } from "react-router-dom";
import  GoBackButton  from "@/shared/ui/GoBackButton/GoBackButton";
import  LoadingDots  from "@/shared/ui/LoadingDots/LoadingDots";
import  StatusMessage  from "@/shared/ui/StatusMessage/StatusMessage";

import './VariableDetails.styles.css'

export default function VariableDetails(): React.JSX.Element {

  const { variableId } = useParams();
  
  const { data: variables, isLoading, error, retry } = useVariables()
  
  if(error) {
    return (
      <section className="variable-details">  
      <div className="variable-details__header">
        <GoBackButton />
        <h2>Property details</h2>
      </div>
      <StatusMessage title="Error fetching variables" variant="error" details={[
        {id: 1, message: error.message}, 
        {id: 2, message: <button className="main-button" onClick={retry}>Try again</button>}
      ]} />
      </section>
    )
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
        <StatusMessage 
          title="404 Property not found" variant="error" 
          details={`No property was found for ID "${variableId}". Please check the link and try again`}/>
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