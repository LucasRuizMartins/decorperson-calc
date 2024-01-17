import axios from "axios";
import { ProductDTO } from "../models/product";

export function findByPrice(min: number, max: number): ProductDTO[] {
  return products
    .filter((x) => x.price >= min && x.price <= max)
    .sort((x, y) => x.price - y.price);
}

export function findById(id: number): ProductDTO[] {
  return products.filter((x) => x.id === id);
}

export function calculateTotalValue(products: ProductDTO[]) {
  const totalValue = products.reduce(
    (total: number, product: ProductDTO) => total + product.price,
    0
  );
  return totalValue;
}

export function findProductByName(name: string) {

  /*
  const productsList = products
    .slice()
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name))
    .filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));

  return productsList;*/
  return axios.get(`http://localhost:8080/products?sort=name,asc&name=${name}`);
 
}
 