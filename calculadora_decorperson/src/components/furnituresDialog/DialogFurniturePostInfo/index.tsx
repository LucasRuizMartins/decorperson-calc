import ButtonInverse from "../../ButtonInverse";
import ButtonPrimary from "../../ButtonPrimary";
import * as furnitureService from "../../../services/furniture-service";
import { FurnitureDTO } from "../../../models/furniture";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function DialogFurniturePostInfo() {
  const navigate = useNavigate();

  const [furniture, setProd] = useState<FurnitureDTO>();

  const [formData, setFormData] = useState<FurnitureDTO>();

  useEffect(() => {
    setProd(formData);
  }, [formData]);

  function handlePostNewItem() {
    const result = confirm(`Deseja cadastrar o item ${furniture?.name}?`);
    if (result) {
      furniture ? furnitureService.insertRequest(furniture) : navigate("/calc");
      navigate("/fur");
    } else {
      navigate("/fur");
    }
  }

  function handleCancelClick() {
    navigate("/fur");
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
        <h2>CADASTRAR NOVO MÓVEL </h2>
        <div className="delete-dialog-info">
          <img className="product_img" src={furniture?.imgUrl}></img>

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
              value={formData ? formData.height : ""}
              name="height"
              placeholder="altura"
              onChange={handleInputChange}
            />
          </div>

          <div>
          <span></span>
            <input
              type="number"
              className="update-input-value"
              value={formData ? formData.length : ""}
              name="length"
              placeholder="comprimento"
              onChange={handleInputChange}
            />
          </div>

          <div>
          <span></span>
            <input
              type="number"
              className="update-input-value"
              value={formData ? formData.width : ""}
              name="width"
              placeholder="largura"
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
