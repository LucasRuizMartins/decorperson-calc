import ButtonInverse from "../../ButtonInverse";
import ButtonPrimary from "../../ButtonPrimary";
import * as productService from "../../../services/product-service";
import { ProductDTO } from "../../../models/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function DialogPostInfo() {
  const navigate = useNavigate();

  const [prod, setProd] = useState<ProductDTO>();

  const [formData, setFormData] = useState<ProductDTO>();

  useEffect(() => {
    setProd(formData);
  }, [formData]);

  function handlePostNewItem() {
    const result = confirm(
      `Deseja cadastrar o item ${prod?.name}?`
    );
    if (result) {
      prod ? productService.insertRequest(prod) : navigate("/calc");
      navigate("/calc");
    } else {
      navigate("/calc");
    }
  }

  function handleCancelClick() {
    navigate("/calc");
  }

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value });
    setProd(formData);
  }

  return (
    <div className="decp-dialog-background update-bg">
      <div
        className="decp-dialog-box"
        onClick={(event) => event.stopPropagation()}
      >
        <h2>CADASTRAR NOVO PRODUTO </h2>
        <div className="delete-dialog-info">
          <img className="product_img" src={prod?.imgUrl}></img>

          <div>
            {" "}
            <span></span>
            <input
              type="text"
              className="update-input-value"
              value={formData ? formData.name : ""}
              name="name"
              placeholder="nome do produto"
              onChange={handleInputChange}
            />
          </div>

          <div>
      
            <span></span>
            <input
              type="number"
          
              className="update-input-value"
              value={formData ? formData.price : ""}
              name="price"
              placeholder="preço"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <span></span>
            <input
              type="text"
              className="update-input-value"
              value={formData ? formData.imgUrl : ""}
              name="imgUrl"
              placeholder="url da imagem"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="decp-dialog-btn">
          <div onClick={handlePostNewItem}>
            <ButtonPrimary nameButton={"SIM"} />
          </div>

          <div onClick={handleCancelClick}>
            <ButtonInverse nameButton={"CANCELAR"} />
          </div>
        </div>
      </div>
    </div>
  );
}
