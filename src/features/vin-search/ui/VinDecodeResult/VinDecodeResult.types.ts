import type { StatusDetail } from "@/shared/ui/StatusMessage/StatusMessage.types";

export type ControllerError = {
  title: string;
  details: string | StatusDetail[];
}; 