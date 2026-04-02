import { fetchVin } from "@/api/vin/vin.api";
import { useQuery } from "@tanstack/react-query";


export default function useVinQuery(vin: string) {
  return useQuery({
    queryKey: ["vin", vin],
    queryFn: () => fetchVin(vin),
    enabled: Boolean(vin),
    // retry: (failureCount, error) => {
    //   if(error instanceof ApiError && error.type === "client") return false;
    //   else return failureCount < 3
    // },
    retry: false,
  })
}