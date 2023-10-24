import { ProductDTO } from "../models/product";

const calculate: object = {
  name: "totalValue",
  value: null,
};

export function newCalc() {
  localStorage.setItem("calculate", JSON.stringify(calculate));
}

export function increaseValue(product: ProductDTO) {
  const calc = JSON.parse(localStorage.getItem("calculate") || "");
  calc.value = calc.value + product.price;
  localStorage.setItem("calculate", JSON.stringify(calc));
}
