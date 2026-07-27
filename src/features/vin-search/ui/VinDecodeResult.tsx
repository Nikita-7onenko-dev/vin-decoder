import type { VinResult } from "@/entities/vin/api/vin.types"
import type { ApiError } from "@/shared/errors/ApiError";
import DataTable from "@/shared/ui/Table/DataTable/DataTable";
import { LoadingDots } from "@/shared/ui/LoadingDots/LoadingDots";

type Props = {
  data: VinResult | null;
  requestError: ApiError | null;
  isLoading: boolean;
}

export default function VinDecodeResult({data, requestError, isLoading}: Props) {

   if (isLoading) {
    return <LoadingDots />;
  }

  if (requestError) {
    return (
      <div className="global__message-container global__message-container--error">
        <h2>Error: Failed to fetch VIN data</h2>
        <p>{requestError.message}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }
  
  const isInvalidVin = data.errors.length > 0;
  const hasWarnings = data.warnings.length > 0;
  let warnings = null;

  if (isInvalidVin) {
    return (
      <div className="global__message-container global__message-container--error">
        <h2>Error: Invalid VIN</h2>
        <ul>
          {data.errors.map(err => (
            <li key={err.code}>{err.message}</li>
          ))}
        </ul>
      </div>
    );
  }

  if(hasWarnings) {
    warnings = (
      <div className="global__message-container global__message-container--warning">
        <h2>Warnings</h2>
        <ul>
          {data.warnings.map(warning => (
            <li key={warning.code}>{warning.message}</li>
          ))}
        </ul>
      </div>
    );
  }
  

  return (
    <>
      <p>{data.message}</p>
      {hasWarnings && warnings}
      <DataTable fields={data.fields} />
    </>
  );
}