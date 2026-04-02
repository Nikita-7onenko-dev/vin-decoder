import { API_CONFIG } from "../shared/api.config";
import { handleResponseError, normalizeError } from "../shared/http";
import type { Variable, VariablesResponse } from "./variables.types";
import normalizeVariablesList from "./variables.utils";

export async function fetchAllVariables(): Promise<Variable[]> {

  try {

    const response = await fetch(API_CONFIG.BASE_URL + "vehicles/getvehiclevariablelist?format=json");
    if(!response.ok) {
      handleResponseError(response.status);
    }

    const data: VariablesResponse = await response.json();
    return normalizeVariablesList(data);


  } catch(err) {
    throw normalizeError(err);
  }
}

// export async function getVariablesList(): Promise<Variable[]> {
//   const variables = await fetchAllVariables();
// }
