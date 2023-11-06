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
    setTotalPrice(productQtd * product.price);
    onCalc(newCalc);
  }, [productQtd]);

  function handleInputChange(event: any) {
    const newCalc = calcService.getCalc();
    const newQtd = Number(event.target.value);
    setProductQtd(newQtd);
    setCalc(newCalc);
    calcService.selectItemQtd(product,  Number(event.target.value));
    onCalc(newCalc);
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
        <div>
          <img className="product_img" src={product.imgUrl} alt="product_img" />
        </div>
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
          {totalPrice.toFixed(2)}
        </p>
      </div>
    </>
  );
}
