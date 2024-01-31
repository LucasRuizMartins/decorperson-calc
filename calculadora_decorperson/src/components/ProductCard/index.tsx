/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import "./styles.css";
import * as calcService from "../../services/calculate-service";
import { OrderDTO } from "../../models/order";
import { useNavigate } from "react-router-dom";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";


type Props = {
  product: ProductDTO;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onCalc: Function;
};

export function ProductCard({ product, onCalc }: Props) {

  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(0);

  const [productQtd, setProductQtd] = useState(
    calcService.getProductQtd(product.id) || 0
  );
  const [, setCalc] = useState<OrderDTO>(calcService.getCalc);

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
    calcService.selectItemQtd(product, Number(event.target.value));
    onCalc(newCalc);
  }

  function handleIncreaseProduct() {
    const newCalc = calcService.getCalc();
    setProductQtd(productQtd + 1);
    setCalc(newCalc);
    calcService.addProduct(product);
    onCalc(newCalc);
  }
  function handleDecreaseProduct() {
    const newCalc = calcService.getCalc();
    if (productQtd >= 1) {
      setProductQtd(productQtd - 1);
    }
    setCalc(newCalc);
    calcService.decreaseItem(product.id);
    onCalc(newCalc);
  }

  function handleUpdateClick(productId:number) {
    navigate(`/calc/products/${Number(productId)}`)

  }

  function handleDeleteClick(productId:number) {

    navigate(`/calc/delete/${Number(productId)}`)

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
            onClick={() => handleDecreaseProduct()}
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
            onClick={() => handleIncreaseProduct()}
          >
            +
          </div>
        </div>
        <p className="product-total-price">
          total <br />
          {totalPrice.toFixed(2)}
        </p>

        <div className="edit-icon-container">
          <img
            onClick={()=> handleUpdateClick(product.id)}
            className="dsc-product-listing-btn"
            src={editIcon}
            alt="Editar"
          />
          <img
               onClick={()=> handleDeleteClick(product.id)}
            className="dsc-product-listing-btn"
            src={deleteIcon}
            alt="Deletar"
          />
        </div>
      </div>
    </>
  );
}
