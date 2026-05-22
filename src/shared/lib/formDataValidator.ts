import type { FormDataType } from "@/features/vin-search/ui/VinForm";
  
export type ValidatorMap<T> = {
  [K in keyof T]: (value: T[K]) => string
}

export const formDataValidator: ValidatorMap<FormDataType> = {

  vin(value): string {
    const vinRegEx = /^[A-HJ-NPR-Z0-9]+$/;
    if(!value) return "Field must be filled";
    if(!vinRegEx.test(value)) return "VIN must contain only A-Z (without I, O, Q) and digits"
    if(value.length !== 17) return "VIN must be 17 chars long";
    return "";
  }

}