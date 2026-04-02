import { useVariables } from "@/features/variables/api/useVariables";
import VariablesHat from "@/features/variables/ui/VariablesHat";
import DataTable from "@/shared/ui/DataTable";
import { LoadingDots } from "@/widgets/LoadingDots";


export default function Variables(): React.JSX.Element {

  const { data, error, isLoading } = useVariables();
  
  if(error) {
    return (
      <div className="global__message-container global__message-container--error">
        Error fetching variables
        <p>{error.message}</p>
      </div>
    );
  }
  
  return (
    <>
      <VariablesHat />
      {isLoading ? <LoadingDots /> :  data && <DataTable fields={data} /> }
    </>
  )
}