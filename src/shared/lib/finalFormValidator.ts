import type { ValidatorMap } from "./formDataValidator";

export function finalFormValidation<T>(
  formData: T, 
  formDataValidator: ValidatorMap<T>
) {

  const newErrorData = {} as Record<keyof T, string>

  for(const key in formData) {
    const value = formData[key];
    newErrorData[key] = formDataValidator[key](value);
  }

  const hasErrors = Object.values(newErrorData).some(err => err);
  return {
    hasErrors,
    newErrorData
  }
}