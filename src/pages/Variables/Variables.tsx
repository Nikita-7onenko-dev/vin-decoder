import { useVariablesFetch, /* useVariablesQuery */ } from "@/features/variables/api/useVariables";
import VariablesHat from "@/features/variables/ui/VariablesHat";
import DataTable from "@/shared/ui/DataTable";
import { Pagination } from "@/shared/ui/Pagination";
import { LoadingDots } from "@/widgets/LoadingDots";


export default function Variables(): React.JSX.Element {

  // const { data, error, isLoading } = useVariablesQuery();
  const { data, error, isLoading } = useVariablesFetch();
  
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
      {isLoading ? <LoadingDots /> :  data && <Pagination fields={data} children={({fields, search}) => <DataTable fields={fields} search={search} />} /> }
    </>
  )
}