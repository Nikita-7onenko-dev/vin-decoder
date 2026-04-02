

export type VariablesResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string | null;
  Results: RawVariable[];
}

export type RawVariable = {
  DataType: string;
  Description: string;
  GroupName: string;
  ID: number;
  Name: string;
}

export type Variable = {
  id: string;
  label: string;
  value: React.ReactNode | React.ReactNode[];
}