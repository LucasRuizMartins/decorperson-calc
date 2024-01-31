import ButtonInverse from "../../ButtonInverse";
import ButtonPrimary from "../../ButtonPrimary";
import * as furnitureService from "../../../services/furniture-service";
import { FurnitureDTO } from "../../../models/furniture";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

export default function DialogFurnitureUpdateInfo() {
  const navigate = useNavigate();
  const params = useParams();

  const [furniture, setProd] = useState<FurnitureDTO>();

  const [formData, setFormData] = useState<FurnitureDTO>();

  useEffect(() => {
    furnitureService.findById(Number(params.furnitureId)).then((response) => {
      setProd(response.data);
      setFormData(response.data);
    });
  }, []);

  useEffect(() => {
    setProd(formData);
  }, [formData]);

  function handleUpdateClick() {
    const result = confirm(
      `Você tem certeza que deseja atualizar os dados do ${furniture?.name}?`
    );
    if (result) {
      furniture ? furnitureService.updateRequest(furniture) : navigate("/fur");
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
        <h2> Deseja atualizar os dados do móvel ? </h2>
        <div className="delete-dialog-info">
          <img className="product_img" src={furniture?.imgUrl}></img>

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
              value={formData ? formData.height : 0}
              name="height"
              onChange={handleInputChange}
            />
          </div>

          <div>
            {" "}
            <span></span>
            <input
              type="text"
              className="update-input-value"
              value={formData ? formData.width : 0}
              name="width"
              onChange={handleInputChange}
            />
          </div>

          <div>
            {" "}
            <span></span>
            <input
              type="text"
              className="update-input-value"
              value={formData ? formData.length : 0}
              name="length"
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
