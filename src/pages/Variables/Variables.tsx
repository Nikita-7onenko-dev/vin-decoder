import { useVariablesFetch } from "@/features/variables/api/useVariables";
import VariablesHat from "@/features/variables/ui/VariablesHat";
import DataTable from "@/shared/ui/Table/DataTable/DataTable";
import { Pagination } from "@/shared/ui/Table/PaginationAndSearch/PaginationAndSearch";
import { LoadingDots } from "@/widgets/LoadingDots/LoadingDots";

import './Variables.styles.css'


export default function Variables(): React.JSX.Element {

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