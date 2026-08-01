import type { TableField } from "../../Table.types";
import { usePagination } from "../model/usePagination";
import { useSearchParamState } from "../model/useSearchParamState";

import './PaginationAndSearch.styles.css'

type Props = {
  fields: TableField[];
  children: (props : {fields: TableField[], search: string} ) => React.ReactNode; 
}

export default function PaginationAndSearch({fields, children}: Props) {
  const { value, setValue } = useSearchParamState("", "search");
  
  const searchValue = value.toLowerCase();
  
  const searched = fields.filter(field => field.label.toLowerCase().includes(searchValue));

  const {
    currentPage,
    totalPages,
    pageItems,
    pagination,
    setPage
  } = usePagination(searched)

  return (
    <>
      <label htmlFor="search">
        <input 
          type="text" 
          className="vin-form__input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          value={value}
          placeholder="Come type some"
          id="search"
        />
      </label>

      {children({fields: pageItems, search: searchValue})}

      <div className="pagination">
        <button
          className="main-button"
          onClick={() => setPage(String(currentPage - 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <ul className="pagination__page-list">
          {pagination.map(page => (
            <li key={page}>
              <button
                className="main-button"
                disabled={currentPage === Number(page)}
                onClick={() => setPage(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
        
        <p className="pagination__page-counter" >{currentPage + " / " + totalPages}</p>

        <button
          className="main-button"
          onClick={() => setPage(String(currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  )
}