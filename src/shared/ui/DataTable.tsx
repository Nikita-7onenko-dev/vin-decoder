import type { Variable } from "@/api/variables/variables.types";
import type { VinResult } from "@/api/vin/vin.types"
import { NavLink } from "react-router-dom";

type Props = {
  fields: VinResult["fields"] | Variable[];
}

export default function DataTable({fields}: Props) {
  if(!fields || fields.length === 0) return null;

  return (
    <table className="data-table">

      <colgroup>
        <col className="data-table__col--1" />
        <col  />
      </colgroup>

      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {fields.map( field => (
          <tr key={field.id}>
            <td>
              <NavLink 
                to={`/variables/${field.label}`}
              >
                {field.label}
              </NavLink>
            </td>
            <td><div>{field.value}</div></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}