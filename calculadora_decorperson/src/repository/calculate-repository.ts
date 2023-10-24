import { OrderDTO, OrderItemDTO } from "../models/order";
import { CALC_KEY } from "../utils/system";

export function save(calc: OrderDTO) {
  const str = JSON.stringify(calc);
  localStorage.setItem(CALC_KEY, str);
}

export function get(): OrderDTO {
  const str = localStorage.getItem(CALC_KEY) || '{"items": []}';
  const obj = JSON.parse(str) as OrderDTO;
  
  const calc = new OrderDTO();

  obj.items.forEach(x => {
    calc.items.push(new OrderItemDTO(x.productId, x.quantity, x.name, x.price))
  })

  return calc
}
