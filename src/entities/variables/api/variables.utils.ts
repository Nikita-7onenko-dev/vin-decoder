import parse from "html-react-parser";
import  DOMPurify  from "dompurify";
import type { Variable, VariablesResponse } from "./variables.types";


export default function normalizeVariablesList(variables: VariablesResponse): Variable[] {

  return variables.Results.map(variable => ({
    id: variable.ID.toString(),
    label: variable.Name,
    value: parse( DOMPurify.sanitize(variable.Description) )
  }))
}