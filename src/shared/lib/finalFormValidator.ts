import type { ValidatorMap } from "./formDataValidator";

export function finalFormValidation<T>(
  formData: T, 
  errors: Record<keyof T, string>,
  formDataValidator: ValidatorMap<T>
) {

  const newErrorData: typeof errors = {...errors}

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