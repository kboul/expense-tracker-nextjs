import { useSearchParams } from "next/navigation";

export function useSearchParam(queryParam: string) {
  const searchParams = useSearchParams();
  return searchParams.get(queryParam);
}
