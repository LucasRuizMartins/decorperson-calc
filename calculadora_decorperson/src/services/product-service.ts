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

  

const products: ProductDTO[] = [
  {
    id: 1,
    name: "MDF Madeirado 18mm",
    price: 531.95,
    imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 2,
    name: "MDF Madeirado 18mm",
    price: 471.75,
    imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 3,
    name: "MDF Branco 18mm",
    price: 227.0,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 4,
    name: "MDF Branco 15mm",
    price: 184.98,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 5,
    name: "MDF Branco 6mm",
    price: 155.2,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 6,
    name: "Parafusos 40x40  caixa",
    price: 38.14,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 7,
    name: "parafuso    35x35   caixa",
    price: 30.47,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 8,
    name: "parafusop 16x35",
    price: 29.97,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 9,
    name: "Fita 22mm madeirado ",
    price: 34.56,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 10,
    name: "Fita 35mm madeirado ",
    price: 54.99,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 11,
    name: "Fita 64mm madeirado",
    price: 100.57,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 12,
    name: "Adesivo Instantaneo Leo 100g",
    price: 18.83,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 13,
    name: "Corrediça Telescópica 300",
    price: 16.0,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 14,
    name: "Corrediça Telescópica 350",
    price: 17.11,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 15,
    name: "Corrediça Telescópica 400",
    price: 17.62,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
  {
    id: 16,
    name: "Corrediça Telescópica 450",
    price: 15.27,
     imgUrl: "../assets/adesivo_instantaneo.png",
  },
];
