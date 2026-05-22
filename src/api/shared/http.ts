import { ApiError } from "../../shared/errors/ApiError";

export function handleResponseError(status: number): ApiError {
  if(status >= 400 && status < 500) {
    return new ApiError("client", "Invalid request. Please check and try again.")
  } else if(status >= 500) {
    return new ApiError("server", "Internal server error. Please try again later")
  } else {
    return new ApiError("unknown", "Unknown error");
  }
}

export function normalizeError(err: unknown): ApiError {
  if(err instanceof ApiError) return err;
  return new ApiError("network", "Network error. Please check your internet connection");
}
