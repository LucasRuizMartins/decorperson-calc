import { useEffect, useState } from "react";
import "./styles.css";
import * as projService from "../../services/furniture-service";
import { ProjectDTO } from "../../models/project";
import { FurnitureDTO } from "../../models/furniture";

type Props = {
  furniture: FurnitureDTO;
  onNewProject: Function;
};

export function SelectedFurnitureCard({ furniture, onNewProject }: Props) {
  const [proj, setProj] = useState<ProjectDTO>(projService.getProj());

  useEffect(() => {
    const newProj = projService.getProj();
    onNewProject(newProj);
  }, [proj]);

  function handleRemoveFurniture(event: any) {
    const newProj = projService.getProj();
    projService.removeFurniture(furniture);

    console.log(furniture);
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
