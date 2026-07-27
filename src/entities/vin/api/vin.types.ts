import type { StatusDetail } from "@/shared/ui/StatusMessage/StatusMessage.types";
import type { TableField } from "@/shared/ui/Table/Table.types";

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
  message: string;
  fields: TableField[];
  errors: StatusDetail[];
  warnings: StatusDetail[];
};