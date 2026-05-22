import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type TableField = {
  id: string;
  label: string;
  value: React.ReactNode;  
}

type Props = {
  fields: TableField[];
  children: (props : {fields: TableField[]; search: string;}) => React.ReactNode; 
}

const LIMIT = 20;

export function Pagination({fields, children}: Props) {
  const [value, setValue] = useState<string>("");
  const searchValue = value.toLowerCase();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  
  const searched = fields.filter(field => field.label.toLowerCase().includes(searchValue));
  const totalPages = Math.max(Math.ceil(searched.length / LIMIT), 1);
  
  const sliced = searched.slice((currentPage - 1) * LIMIT, currentPage * LIMIT);
  
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

  return (
    <>
      <label htmlFor="search">
        <input 
          type="text" 
          className="vin-form__input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
            setPage("1");
          }}
          value={value}
          placeholder="Come type some"
          id="search"
        />
      </label>

      {children({fields: sliced, search: searchValue})}

      <div className="main-pagination">
        <button
          className="main-button main-pagination__button"
          onClick={() => setPage(String(currentPage - 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <ul className="main-pagination__page-list">
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

        <button
          className="main-button main-pagination__button"
          onClick={() => setPage(String(currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  )
}