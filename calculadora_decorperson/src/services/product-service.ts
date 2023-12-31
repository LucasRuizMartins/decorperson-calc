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
  const productsList = products
    .slice()
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name))
    .filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));

  return productsList;
}



const products: ProductDTO[] = [
  {
    id: 1,
    name: "MDF Madeirado 18mm",
    price: 531.95,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/mdf_madeirado.png?raw=true",
  },
  {
    id: 2,
    name: "MDF Madeirado 18mm",
    price: 471.75,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/mdf_madeirado.png?raw=true",
  },
  {
    id: 3,
    name: "MDF Branco 18mm",
    price: 227.0,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/mdf_branca.png?raw=true",
  },
  {
    id: 4,
    name: "MDF Branco 15mm",
    price: 184.98,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/mdf_branca.png?raw=true",
  },
  {
    id: 5,
    name: "MDF Branco 6mm",
    price: 155.2,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/mdf_branca.png?raw=true",
  },
  {
    id: 6,
    name: "Parafusos 40x40  caixa",
    price: 38.14,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/caixa_parafusos.png?raw=true",
  },
  {
    id: 7,
    name: "parafuso    35x35   caixa",
    price: 30.47,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/caixa_parafusos.png?raw=true",
  },
  {
    id: 8,
    name: "parafuso 16x35",
    price: 29.97,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/parafusos.png?raw=true",
  },
  {
    id: 9,
    name: "Fita 22mm madeirado ",
    price: 34.56,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/fita_madeirada.png?raw=true",
  },
  {
    id: 10,
    name: "Fita 35mm madeirado ",
    price: 54.99,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/fita_madeirada.png?raw=true",
  },
  {
    id: 11,
    name: "Fita 64mm madeirado",
    price: 100.57,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/fita_madeirada.png?raw=true",
  },
  {
    id: 12,
    name: "Adesivo Instantaneo Leo 100g",
    price: 18.83,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/adesivo_instantaneo.png?raw=true",
  },
  {
    id: 13,
    name: "Corrediça Telescópica 300",
    price: 16.0,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/corredica.png?raw=true",
  },
  {
    id: 14,
    name: "Corrediça Telescópica 350",
    price: 17.11,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/corredica.png?raw=true",
  },
  {
    id: 15,
    name: "Corrediça Telescópica 400",
    price: 17.62,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/corredica.png?raw=true",
  },
  {
    id: 16,
    name: "Corrediça Telescópica 450",
    price: 15.27,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/corredica.png?raw=true",
  },
  {
    id: 17,
    name: "Corrediça Telescópica 500",
    price: 17.49,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/corredica.png?raw=true",
  },
  {
    id: 18,
    name: "Corrediça Invisível FGVTN 300",
    price: 55.3,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/corredica.png?raw=true",
  },
  {
    id: 19,
    name: "Corrediça Invisível FGVTN 400",
    price: 60.35,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/corredica.png?raw=true",
  },
  {
    id: 20,
    name: "Corrediça Invisível FGVTN 450",
    price: 61.58,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/corredica.png?raw=true",
  },
  {
    id: 21,
    name: "Corrediça Invisível FGVTN 500",
    price: 64.75,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/corredica.png?raw=true",
  },
  {
    id: 22,
    name: "Corrediça Invisível FGVTN 550",
    price: 72.52,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/corredica.png?raw=true",
  },
  {
    id: 23,
    name: "Cola Branca PVA Extra Leo 1Kg",
    price: 23.16,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/adesivo_instantaneo.png?raw=true",
  },
  {
    id: 24,
    name: "Cola Tudo Branco Leo 400g",
    price: 25.95,
    imgUrl:
      "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/adesivo_instantaneo.png?raw=true",
  },
  {
    id: 25,
    name: "Monta e Fixa PL600",
    price: 55.71,
    imgUrl: "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/Monta%20e%20Fixa.png?raw=true",
  },
  {
    id: 26,
    name: "Selante Monta e Fixa Branco",
    price: 16.65,
    imgUrl: "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/Monta%20e%20Fixa.png?raw=true",
  },
  {
    id: 27,
    name: "Tubo de aço industrial 20x20",
    price: 41.66,
    imgUrl: "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/tubo_aco.png?raw=true",
  },
  {
    id: 28,
    name: "Tubo de Aço Industrial 60 X 60 X 2,0",
    price: 197.46,
    imgUrl: "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/tubo_aco.png?raw=true",
  },
  {
    id: 29,
    name: "Tinta preta ",
    price: 207.0,
    imgUrl: "https://github.com/LucasRuizMartins/decorperson-calc/blob/main/calculadora_decorperson/src/assets/tinta_preta.png?raw=true",
  }, 
  ];
