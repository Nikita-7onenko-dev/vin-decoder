import { NavLink } from "react-router-dom";
import { highlightMatch } from "@/shared/lib/highlightMatch";

import './DataTable.styles.css'

import type { TableField } from "../Table.types";



type Props = {
  fields: TableField[];
  search?: string; 
}

export default function DataTable({fields, search}: Props) {
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
                to={`/variables/${field.id}`}
              >
                {search ? highlightMatch(field.label, search) : field.label}
              </NavLink>
            </td>
            <td><div>{field.value}</div></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}