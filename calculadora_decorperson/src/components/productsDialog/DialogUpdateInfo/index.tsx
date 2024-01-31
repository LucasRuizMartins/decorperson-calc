import ButtonInverse from "../../ButtonInverse";
import ButtonPrimary from "../../ButtonPrimary";
import * as productService from "../../../services/product-service";
import { ProductDTO } from "../../../models/product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

export default function DialogUpdateInfo() {
  const navigate = useNavigate();
  const params = useParams();

  const [prod, setProd] = useState<ProductDTO>();

  const [formData, setFormData] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId)).then((response) => {
      setProd(response.data);
      setFormData(response.data);
    });
  }, []);

  useEffect(() => {
    setProd(formData);
  }, [formData]);

  function handleUpdateClick() {
    const result = confirm(
      `Você tem certeza que deseja atualizar os dados do ${prod?.name}?`
    );
    if (result) {
      prod ? productService.updateRequest(prod) : navigate("/calc");
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
        <h2> Deseja atualizar o valor do produto ? </h2>
        <div className="delete-dialog-info">
          <img className="product_img" src={prod?.imgUrl}></img>

          <div>
            {" "}
            <span></span>
            <input
              type="text"
              className="update-input-value"
              value={formData ? formData.name : "erro ao carregar"}
              name="name"
              onChange={handleInputChange}
            />
          </div>

          <div>
            {" "}
            <span></span>
            <input
              type="text"
              className="update-input-value"
              value={formData ? formData.price : 0}
              name="price"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="decp-dialog-btn">
          <div onClick={handleUpdateClick}>
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
