import { formDataValidator } from "./formDataValidator";


export function finalFormValidation<T>(
  formData: Record<keyof T, string>, 
  errors: Record<keyof T, string>,
) {

  const newErrorData: typeof errors = {...errors}

  for(const key in formData) {
    const value = formData[key as keyof T];
    newErrorData[key as keyof T] = formDataValidator[key as string](value);
  }

  const hasErrors = Object.values(newErrorData).some(err => err);
  return {
    hasErrors,
    newErrorData
  }
}