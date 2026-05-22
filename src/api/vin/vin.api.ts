import { API_CONFIG } from "../shared/api.config";
import { handleResponseError, normalizeError } from "../shared/http";
import type { RawResponse, VinResult } from "./vin.types";
import { normalizeVinResponse } from "./vin.utils";

export async function fetchVin(vin: string, signal?: AbortSignal): Promise<VinResult> {

  try {
    const response = await fetch(API_CONFIG.BASE_URL + `vehicles/decodevin/${vin}?format=json`, {signal});
    if(!response.ok) {
      throw handleResponseError(response.status);
    }
    
    const raw: RawResponse = await response.json();
    return normalizeVinResponse(raw);


  } catch(err) {
    if(err instanceof DOMException && err.name === "AbortError") throw err;
    throw normalizeError(err);
  }
}