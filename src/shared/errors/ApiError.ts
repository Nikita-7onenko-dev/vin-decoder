type ApiErrorType = "client" | "server" | "network" | "unknown"

export class ApiError extends Error {
  type: ApiErrorType;
  constructor(type: ApiErrorType, message: string) {
    super(message);
    this.type = type
  }
}