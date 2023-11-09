import { useEffect, useState } from "react";
import "./styles.css";
import { FurnitureDTO } from "../../models/furniture";
import * as projService from "../../services/furniture-service";
import { ProjectDTO } from "../../models/project";

type Props = {
  furniture: FurnitureDTO;
  onNewProject: Function;
};

export function FurnitureCard({ furniture, onNewProject }: Props) {
  
  const [proj, setProj] = useState<ProjectDTO>(projService.getProj());

  useEffect(() => {
    const newProj = projService.getProj();
    onNewProject(newProj);
  }, [proj]);

  function handleAddFurniture(event: any) {
    const newProj = projService.getProj();
    projService.addFurniture(furniture);
    setProj(newProj);
    onNewProject(newProj);
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
