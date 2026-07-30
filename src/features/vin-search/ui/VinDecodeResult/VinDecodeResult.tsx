import DataTable from "@/shared/ui/Table/DataTable/DataTable";
import  LoadingDots  from "@/shared/ui/LoadingDots/LoadingDots";
import  StatusMessage  from "@/shared/ui/StatusMessage/StatusMessage";
import { useVinSearch } from "../../api/useVinSearch";
import type { ControllerError } from "./VinDecodeResult.types";

type Props = {
  validVin: string
  controllerError: ControllerError | null
}

export default function VinDecodeResult({validVin, controllerError}: Props) {

  const { data, error: requestError, isLoading } = useVinSearch(validVin);
  
  if (isLoading) {
    return <LoadingDots />;
  }

  if(controllerError) {
    return <StatusMessage title={controllerError.title} details={controllerError.details} variant="error" />
  }

  if (requestError) {
    return <StatusMessage title="Error: Failed to fetch VIN data" variant="error" details={requestError.message} />
  }

  if (!data) {
    return null;
  }
  
  const isInvalidVin = data.errors.length > 0;
  const hasWarnings = data.warnings.length > 0;
  let warnings = null;

  if (isInvalidVin) {
    return <StatusMessage title="Error: Invalid VIN" variant="error" details={data.errors} />
  }

  if(hasWarnings) {
    warnings = <StatusMessage title="Warnings" variant="warning" details={data.warnings} />
  }
  
  return (
    <>
      <p>{data.message}</p>
      {warnings}
      <DataTable fields={data.fields} />
    </>
  );
}