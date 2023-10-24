import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import "./styles.css";
import * as productService from "../../services/product-service";
import * as calcService from "../../services/calculate-service";
import { OrderDTO } from "../../models/order";

type Props = {
  product: ProductDTO;
  onCalc: Function;
};

export function ProductCard({ product, onCalc }: Props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productQtd, setProductQtd] = useState(
    calcService.getProductQtd(product.id) || 0
  );
  const [calc, setCalc] = useState<OrderDTO>(calcService.getCalc);

  useEffect(() => {
    const newCalc = calcService.getCalc();
    setCalc(newCalc);
    onCalc(newCalc);
    setTotalPrice(productQtd * product.price);
  }, [productQtd]);

  function handleInputChange(event: any) {
    setProductQtd(Number(event.target.value));
  }

  function handleIncreaseProduct(event: any) {
    const newCalc = calcService.getCalc();
    setProductQtd(productQtd + 1);
    setCalc(newCalc);
    calcService.addProduct(product);
    onCalc(newCalc);
  }

  function handleDecreaseProduct(event: any) {
    const newCalc = calcService.getCalc();
    if (productQtd >= 1) {
      setProductQtd(productQtd - 1);
    }
    setCalc(newCalc);
    calcService.decreaseItem(product.id);
    onCalc(newCalc);
  }

  return (
    <>
      <div className="product-card">
        <p className="product-name">{product?.name}</p>
        <p className="product-price">
          unidade <br />
          R$ {product?.price.toFixed(2)}
        </p>
        {}
        <div className="quantity-container">
          <div
            className="item-quantity-btn"
            onClick={() => handleDecreaseProduct(product.id)}
          >
            -
          </div>
          <input
            type="text"
            value={productQtd}
            className="qtd-input"
            placeholder="1"
            onChange={handleInputChange}
          />
          <div
            className="item-quantity-btn"
            onClick={() => handleIncreaseProduct(product.id)}
          >
            +
          </div>
        </div>
        <p className="product-total-price">
          total <br />
          R$ {totalPrice.toFixed(2)}
        </p>
      </div>
    </>
  );
}
