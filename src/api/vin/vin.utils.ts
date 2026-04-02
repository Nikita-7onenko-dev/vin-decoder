import { ERROR_MAP } from "./vin.error_map";
import type { RawField, RawResponse, VinResult } from "./vin.types.ts";
import { nanoid } from "nanoid";

export function normalizeVinResponse(data: RawResponse): VinResult {
  const results = data.Results;

  // Находим поле с кодами ошибок
  const errorCodeItem = results.find(
    (r: RawField) => r.Variable === "Error Code"
  );

  // Собираем информационные поля в удобный формат
  const fields = results
    .filter((field: RawField): field is RawField & { Value: string } => {
      return (
        field.Value !== null &&
        field.Value !== "" &&
        field.Variable !== "Error Code" &&
        field.Variable !== "Error Text" &&
        field.Variable !== "Suggested VIN" &&
        field.Variable !== "Possible Values" &&
        field.Variable !== "Additional Error Text"
      );
    })
    .map((field) => ({
      label: field.Variable,
      value: field.Value,
      id: nanoid(),
    }));

  // Парсим error codes
  const codes = errorCodeItem?.Value
    ?.split(",")
    .map(Number)
    .filter(Boolean) || [];   

  // Классифицируем
  const errors: VinResult["errors"] = [];
  const warnings: VinResult["warnings"] = [];

  for (const code of codes) {
    const mapped = ERROR_MAP[code];

    const item = {
      code,
      message: mapped?.message || `Unknown error (${code})`,
    };

    if (mapped?.status === "error") {
      errors.push(item);
    } else if (mapped?.status === "warning") {
      warnings.push(item);
    }
  }

  return {
    message: data.Message,
    vin: data.SearchCriteria,
    fields,
    errors,
    warnings,
  };
}