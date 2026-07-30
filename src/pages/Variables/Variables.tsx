import { useVariables } from "@/features/variables/api/useVariables";
import VariablesHat from "@/features/variables/ui/VariablesHat";
import DataTable from "@/shared/ui/Table/DataTable/DataTable";
import  PaginationAndSearch  from "@/shared/ui/Table/PaginationAndSearch/ui/PaginationAndSearch";
import  LoadingDots  from "@/shared/ui/LoadingDots/LoadingDots";
import  StatusMessage  from "@/shared/ui/StatusMessage/StatusMessage";

import './Variables.styles.css'


export default function Variables(): React.JSX.Element {

  const { data, error, isLoading } = useVariables();
  
  if(error) {
    return <StatusMessage title="Error fetching variables" variant="error" details={error.message} />
  }
  
  return (
    <>
      <VariablesHat />
      {isLoading ? <LoadingDots /> :  data && <PaginationAndSearch fields={data} children={({fields, search}) => <DataTable fields={fields} search={search} />} /> }
    </>
  )
}