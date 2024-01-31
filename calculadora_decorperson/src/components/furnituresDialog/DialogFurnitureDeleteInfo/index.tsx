import ButtonInverse from "../../ButtonInverse";
import ButtonPrimary from "../../ButtonPrimary";
import * as furnitureService from "../../../services/furniture-service";
import { FurnitureDTO } from "../../../models/furniture";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";


export default function DialogFurnitureDeleteInfo() {
  const navigate = useNavigate();
  const params = useParams();

  const [furniture, setFurniture] = useState<FurnitureDTO>();

  useEffect(() => {
    furnitureService.findById(Number(params.furnitureId)).then((response) => {
      setFurniture(response.data);
    });

  }, []);

  function handleDeleteClick() {
    const result = confirm(
      `Você tem certeza que deseja excluir permanentemente o ${furniture?.name}?`
    );
    if (result) {
      furnitureService.deleteById(Number(params.furnitureId));
      furnitureService.removeProjectWithId(Number(params.furnitureId))
      navigate("/fur");

    } else {
      navigate("/fur");
    }
  }

  function handleCancelClick(){navigate("/fur")}


  return (
    <div className="decp-dialog-background delete-bg">
      <div
        className="decp-dialog-box"
        onClick={(event) => event.stopPropagation()}
      >
        <h2> Deseja deletar o Movel ? </h2>
        <div className="delete-dialog-info">
          <img className="product_img" src={furniture?.imgUrl}></img>
          <p>{furniture?.name}</p>
          <p>{`Altura : ${furniture?.height} `}</p>
          <p>{`largura ${furniture?.width} `}</p>
          <p>{`comprimento  ${furniture?.length} `}</p>
        
          
        </div>

        <div className="decp-dialog-btn">
          <div onClick={handleDeleteClick}>
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
