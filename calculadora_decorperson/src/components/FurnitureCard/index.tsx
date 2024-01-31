import { useEffect, useState } from "react";
import "./styles.css";
import { FurnitureDTO } from "../../models/furniture";
import * as projService from "../../services/furniture-service";
import { ProjectDTO } from "../../models/project";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  furniture: FurnitureDTO;
  onNewProject: (proj: ProjectDTO) => void;
};

export function FurnitureCard({ furniture, onNewProject }: Props) {

  const navigate = useNavigate();

  const [proj, setProj] = useState<ProjectDTO>(projService.getProj());

  useEffect(() => {
    const newProj = projService.getProj();
    onNewProject(newProj);
  }, [proj]);

  function handleAddFurniture() {
    const isFurniturePresent = projService.checkFurniture(furniture);

    if (!isFurniturePresent) {
      const newProj = projService.getProj();
      projService.addFurniture(furniture);
      setProj(newProj);
      onNewProject(newProj);
    }
    else {projService.removeFurniture(furniture)
      const newProj = projService.getProj();
      onNewProject(newProj);
     
    }
  }

  function handleUpdateClick(furnitureId: number) {
    navigate(`/fur/furnitures/${Number(furnitureId)}`);
  }

  function handleDeleteClick(furnitureId: number) {
    navigate(`/fur/delete/${Number(furnitureId)}`);
  }

  return (
    <>
      <div className="furniture-card">
        <img className="furniture-img" src={furniture.imgUrl} alt="" />

        <div>
          <p className="furniture-info">{furniture.name}</p>
          <p className="furniture-info">Comprimento: {furniture.length} mm</p>
          <p className="furniture-info">Altura: {furniture.height} mm</p>
          <p className="furniture-info">Largura: {furniture.width} mm</p>
        </div>

        <div className="right-furniturecard-container">
          <div className="edit-icon-container">
            <img
              onClick={() => handleUpdateClick(furniture.id)}
              className="dsc-furniture-listing-btn"
              src={editIcon}
              alt="Editar"
            />
          </div>

          <div className="edit-icon-container">
            <img
              onClick={() => handleDeleteClick(furniture.id)}
              className="dsc-furniture-listing-btn"
              src={deleteIcon}
              alt="Deletar"
            />
          </div>

          <div onClick={handleAddFurniture} className="add-furniture">
            {projService.checkFurniture(furniture) ? "REMOVER" : "ADICIONAR"}
          </div>
        </div>
      </div>
    </>
  );
}
