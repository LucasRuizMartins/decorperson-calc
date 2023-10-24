import "./styles.css";
import { useState, useEffect, useContext } from "react";
import { ProductDTO } from "../../models/product";
import { ProductCard } from "../ProductCard";
import * as productService from "../../services/product-service";
import * as calcService from "../../services/calculate-service";
 


type QueryParams = {
  min: number;
  max: number;
};

export function ListingBody() {
  const [product, setProduct] = useState<ProductDTO[]>([]);
  const [calc, setCalc] = useState(calcService.getCalc());


  const [queryParams, setQueryParams] = useState<QueryParams>({
    min: 0,
    max: Number.MAX_VALUE,
  });

  function handleUpdateCalc(newCalc : any){
    setCalc(newCalc);
  }

  useEffect(() => {
    setProduct(productService.findByPrice(queryParams.min, queryParams.max));
    const totalValue = product.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

  }, [queryParams]);


  return (
    <>
    <div className="nav">
    <span>{calc.total.toFixed(2)} produto(s)</span>
    </div>
      <div className="dsf-container">
        <div className="card-list">
          {product.map((product) => (
            <ProductCard key={product.id} product={product} onCalc={handleUpdateCalc} />
          ))}
        </div>
      </div>
    </>
  );
}
