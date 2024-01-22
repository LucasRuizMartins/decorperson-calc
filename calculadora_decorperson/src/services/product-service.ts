import axios, { AxiosRequestConfig } from "axios";
import { ProductDTO } from "../models/product";
import { requestBackend } from "../utils/requests";
import { BASE_URL } from "../utils/system";

export function findByPrice(min: number, max: number): ProductDTO[] {
  return products
    .filter((x) => x.price >= min && x.price <= max)
    .sort((x, y) => x.price - y.price);
}

export function findById(id: number) {
  console.log(`http://localhost:8080/products/${id}`);
  return axios.get(`http://localhost:8080/products/${id}`);
}

export function deleteById(id: number) {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/products/${id}`,
    withCredentials: true,
  };

  return axios.delete(BASE_URL + config.url, config);
}

export function updateRequest(obj: ProductDTO) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/products/${obj.id}`,
    withCredentials: true,
    data: obj,
  };
  
  return axios.put(BASE_URL + config.url, obj, config);
}


export function insertRequest(obj: ProductDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `/products`,
    withCredentials: true,
    data: obj,
  };

  return axios.post(BASE_URL + config.url, obj, config);
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
