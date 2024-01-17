/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import { useState, useEffect } from "react";
import { ProductDTO } from "../../models/product";
import { ProductCard } from "../ProductCard";
import * as productService from "../../services/product-service"
import * as calcService from "../../services/calculate-service";
import ProjectCard from "../ProjectCard";
import { useParams } from "react-router-dom";
 

export function ListingBody() {

  //parametro de requisição 
  const params = useParams();


  const [productFilter, setProductFilter] = useState("");

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [calc, setCalc] = useState(calcService.getCalc());

  function handleUpdateCalc(newCalc: any) {
    setCalc(newCalc);
  }
  useEffect(() => {
    productService.findProductByName(productFilter).then(response =>{ 
      setProducts(response.data.content)
    })
    //setProducts(productService.findProductByName(productFilter));
  }, [productFilter]);



  function handleChange(event: any) {
    const value = event.target.value;
    setProductFilter(value);
  }

  function handleClear() {
    calcService.clear();
  }

  return (
    <>
      <div className="dsf-container">
        <div className="center-title">
          <h2>Projeto</h2>
      
        </div>

        <ProjectCard totalProducts={calc.total} />
        <div className="center-title">
          <h2>Matéria Prima</h2>
        </div>
        <div className="dsf-container">
          <form className="filter-card">
            <input
              name="productFilter"
              type="text"
              value={productFilter}
              className="input-filter"
              placeholder="digite o nome do produto desejado"
              onChange={handleChange}
            />
            <button className="btn-clear" onClick={handleClear}>
              Limpar
            </button>
          </form>
        </div>

        <div className="card-list">
          {products
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name))
            .map((products) => (
              <ProductCard
                key={products.id}
                product={products}
                onCalc={handleUpdateCalc}
              />
            ))}
        </div>
      </div>
    </>
  );
}