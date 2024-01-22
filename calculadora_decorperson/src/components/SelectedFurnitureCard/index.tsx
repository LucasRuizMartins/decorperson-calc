/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useState } from "react";
import "./styles.css";
import * as projService from "../../services/furniture-service";
import { ProjectDTO, ProjectItemDTO } from "../../models/project";


type Props = {
  furniture: ProjectItemDTO;
  onNewProject: Function;
};

export function SelectedFurnitureCard({ furniture, onNewProject }: Props) {
  const [proj, setProj] = useState<ProjectDTO>(projService.getProj());

  useEffect(() => {
    const newProj = projService.getProj();
    onNewProject(newProj);
  }, [proj]);

  function handleRemoveFurniture() {
    const newProj = projService.getProj();
    projService.removeFurniture(furniture);

 
    setProj(newProj);
    onNewProject(newProj);
  }

  return (
    <>
      <div className="selected-furniture-card flex">
        <div className="selected-furniture-card-info">
          <img className="selected-img" src={furniture.imgUrl} alt="" />
          <div>
            <p className="selected-info">{furniture.name}</p>
          </div>
        </div>
        <div onClick={handleRemoveFurniture} className="remove-furniture flex">
          REMOVER
        </div>
      </div>
    </>
  );
}
