import { fetchAllVariables, /* getVariablesList */ } from "@/api/variables/variables.api";
import { useQuery } from "@tanstack/react-query";

export function useVariables() {
  return useQuery({
    queryKey: ["variables"],
    queryFn: async () => fetchAllVariables(),
    staleTime: Infinity,
  });
}