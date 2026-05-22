import { NavLink } from "react-router-dom";

 type TableField = {
  id: string;
  label: string;
  value: React.ReactNode
}

type Props = {
  fields: TableField[];
  search?: string; 
}

// const highlightMatch = (target: string, search?: string): React.ReactNode => {
//   if(!search) return target;
  
//   const index = target.toLowerCase().indexOf(search.toLowerCase());

//   if(index === -1) return target;

//   return (
//     <>
//     {target.slice(0, index)}
//     <span style={{color:"#fff"}}>{target.slice(index, index + search.length)}</span>
//     {target.slice(index + search.length)}
//     </>
//   )
// }

// const highlightMatch = (target: string, search: string): React.ReactNode => {

//   if(!search) return target;

//   const regExp = new RegExp(`(${search})`, "gi");
//   const parts = target.split(regExp);

//   return (
//     <>
//       {parts.map( (part, i) => (
//         part.toLowerCase() === search.toLowerCase() ? 
//           <span key={i} style={{color: "#fff"}}>{part}</span> :
//           part
//       ))}
//     </>
//   ) 
// }

const highlightMatch = (target: string, search: string): React.ReactNode => {
  if(!search) return target;

  const regExp = new RegExp(`(${search})`, "gi");

  const parts = target.split(regExp);

  return parts.map((part, i) => part.toLowerCase() === search ? 
    <span key={i} style={{color: "#fff"}}>{part}</span> : part)
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