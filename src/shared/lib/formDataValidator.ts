
export const formDataValidator: Record<string, (value: string) => string> = {

  vin(value): string {
    const vinRegEx = /^[A-HJ-NPR-Z0-9]+$/;
    if(!vinRegEx.test(value)) return "VIN must contain only A-Z (without I, O, Q) and digits"
    if(!value) return "Field must be filled";
    if(value.length !== 17) return "VIN must be 17 chars long";
    return "";
  }

}