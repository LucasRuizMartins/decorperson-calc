import axios, { AxiosRequestConfig } from "axios";
import { ProductDTO } from "../models/product";
import { BASE_URL } from "../utils/system";

export function findByPrice(min: number, max: number): ProductDTO[] {
  return products
    .filter((x) => x.price >= min && x.price <= max)
    .sort((x, y) => x.price - y.price);
}

export function findById(id: number) {
  console.log(`${BASE_URL}/products/${id}`);
  return axios.get(`${BASE_URL}/products/${id}`);
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
  return axios.get(`${BASE_URL}/products?sort=name,asc&name=${name}`);
}
