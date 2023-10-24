import { OrderDTO, OrderItemDTO } from "../models/order";
import { ProductDTO } from "../models/product";
import * as calcRepository from "../repository/calculate-repository";

export function saveCalc(calc: OrderDTO) {
  calcRepository.save(calc);
}
export function getCalc(): OrderDTO {
  return calcRepository.get();
}

export function addProduct(product: ProductDTO) {
  const calc = calcRepository.get();
  const item = calc.items.find((x) => x.productId === product.id);
  if (!item) {
    const newItem = new OrderItemDTO(
      product.id,
      1,
      product.name,
      product.price
    );
    calc.items.push(newItem);
    calcRepository.save(calc);
  } else {
    increaseItem(product.id);
  }
}

export function increaseItem(productId: number) {
  const calc = calcRepository.get();
  const item = calc.items.find((x) => x.productId === productId);

  if (item) {
    item.quantity++;
    calcRepository.save(calc);
  }
}

export function decreaseItem(productId: number) {
  const calc = calcRepository.get();
  const item = calc.items.find((x) => x.productId === productId);

  if (item) {
    if (item.quantity > 0) {
      item.quantity--;
    }
    calcRepository.save(calc);
  }
}

export function getProductQtd(productId: number) {
  const calc = calcRepository.get();
  const item = calc.items.find((x) => x.productId === productId);
  return item?.quantity;
}
