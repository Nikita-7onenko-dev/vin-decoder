import { API_CONFIG } from "../shared/api.config";
import { handleResponseError, normalizeError } from "../shared/http";
import type { Variable, VariablesResponse } from "./variables.types";
import normalizeVariablesList from "./variables.utils";

export async function fetchAllVariables(signal?: AbortSignal): Promise<Variable[]> {

  try {

    const response = await fetch(API_CONFIG.BASE_URL + "vehicles/getvehiclevariablelist?format=json", {signal});
    if(!response.ok) {
      throw handleResponseError(response.status);
    }

    const data: VariablesResponse = await response.json();
    return normalizeVariablesList(data);


  } catch(err) {
    if(err instanceof DOMException && err.name === "AbortError") throw err;
    throw normalizeError(err);
  }
}

// export async function getVariablesList(): Promise<Variable[]> {
//   const variables = await fetchAllVariables();
// }
