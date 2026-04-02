import type { VinResult } from "@/api/vin/vin.types"
import DataTable from "../../../shared/ui/DataTable";
import { LoadingDots } from "@/widgets/LoadingDots";

type Props = {
  data: VinResult | undefined;
  transportError: Error | null;
  isLoading: boolean;
}

export default function VinDecodeResult({data, transportError, isLoading}: Props) {

   if (isLoading) {
    return <LoadingDots />;
  }

  if (transportError) {
    return (
      <div className="global__message-container global__message-container--error">
        <h2>Error: Failed to fetch VIN data</h2>
        <p>{transportError.message}</p>
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
            <li key={err.message}>{err.message}</li>
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
            <li key={warning.message}>{warning.message}</li>
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