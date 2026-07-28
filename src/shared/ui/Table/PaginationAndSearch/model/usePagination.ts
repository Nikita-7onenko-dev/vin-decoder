import { useSearchParams } from "react-router-dom";

const LIMIT = 20;


export function usePagination<T>(fields: T[]) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const totalPages = Math.max(Math.ceil(fields.length / LIMIT), 1);

  const pageItems = fields.slice((currentPage - 1) * LIMIT, currentPage * LIMIT);

  const pagination = [];
  for(let i = -2; i < 3; i++) {
    if(currentPage + i > 0 && currentPage + i <= totalPages) pagination.push(String(currentPage + i));
  }

  const setPage = (page: string) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set("page", page);
      return newParams;
    });
  }


  return {
    currentPage,
    totalPages,
    pageItems,
    pagination,
    setPage
  }
}