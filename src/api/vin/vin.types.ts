
export type RawField = {
  Value: string | null;
  ValueId: string | null;
  Variable: string;
  VariableId: number;
}

export type RawResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: RawField[];
}

export type VinResult = {
  vin: string;
  message: string;
  
  fields: {
    label: string;
    value: string;
    id: string;
  }[];

  errors: {
    code: number;
    message: string;
  }[];

  warnings: {
    code: number;
    message: string;
  }[];

};