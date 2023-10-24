import { useState } from "react";
import "./styles.css";

type Props = {
  onSearch: Function;
};

type QueryParams = {
  minValue?: number;
  maxValue?: number;
};

export function Filter({ onSearch }: Props) {
  const [queryParams, setQueryParams] = useState<QueryParams>({});

  function handleSubmit(event: any) {
    event.preventDefault();
    const min = queryParams.minValue || 0;
    const max = queryParams.maxValue || Number.MAX_VALUE;
    onSearch(min, max);


  }

  function handleChange(event: any) {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    setQueryParams({ ...queryParams, [name]: value });
  }

  return (
    <>
      <div className="dsf-container">
        <div className="filter-card">
          <form>
            <div>
              <input
                name="minValue"
                type="text"
                value={queryParams.minValue || ""} 
                className="input-filter"
                placeholder="Preço minimo"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="maxValue"
                type="text"
                value={queryParams.maxValue || ""}
                className="input-filter"
                placeholder="Preço máximo"
                onChange={handleChange}
              />
            </div>

            <button className="filter-btn" onClick={handleSubmit}>
              Filtrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
