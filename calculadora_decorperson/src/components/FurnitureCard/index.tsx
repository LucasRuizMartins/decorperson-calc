import { useEffect, useState } from "react";
import "./styles.css";
import { FurnitureDTO } from "../../models/furniture";
import * as projService from "../../services/furniture-service";
import { ProjectDTO } from "../../models/project";

type Props = {
  furniture: FurnitureDTO;
};

export function FurnitureCard({ furniture }: Props) {
  const [proj, setProj] = useState<ProjectDTO>(projService.getProj());

  function handleAddFurniture(event: any) {
    const newProj = projService.getProj();
    setProj(newProj);
    projService.addFurniture(furniture);
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
        <div>
          <div onClick={handleAddFurniture} className="add-furniture">
            ADICIONAR
          </div>
        </div>
      </div>
    </>
  );
}
