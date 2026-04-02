import { ApiError } from "../../shared/errors/ApiError";

export function handleResponseError(status: number): never {
  if(status >= 400 && status < 500) {
    throw new ApiError("client", "Invalid request. Please check and try again.")
  } else if(status >= 500) {
    throw new ApiError("server", "Internal server error. Please try again later")
  } else {
    throw new ApiError("unknown", "Unknown error");
  }
}

export function normalizeError(err: unknown): ApiError {
  if(err instanceof ApiError) throw err;
  throw new ApiError("network", "Network error. Please check your internet connection");
}
