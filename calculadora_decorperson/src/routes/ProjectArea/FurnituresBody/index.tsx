import "./styles.css";
import { useState, useEffect, useContext } from "react";
import * as furnitureService from "../../../services/furniture-service";
import { FurnitureCard } from "../../../components/FurnitureCard";
import { FurnitureDTO } from "../../../models/furniture";
import { SelectedFurnitureCard } from "../../../components/SelectedFurnitureCard";
 


type QueryParams = {
  min: number;
  max: number;
};

export function FurnituresBody() {

 
 

  const [fornitureFilter, setFurnitureFilter] = useState("");

  const [proj, setProj] = useState(furnitureService.getProj());

  const [furnitures, setfurnitures] = useState<FurnitureDTO[]>([]);

  function handleNewProject(newProject: any) {
    setProj(newProject);
  }

  useEffect(() => {
    setfurnitures(furnitureService.findFurnitureByName(fornitureFilter));
  }, [fornitureFilter, proj]);

  return (
    <>
      <div> 
     
        <div className="selected-furniture-list">
          {proj.items
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name))
            .map((furnitures) => (
              <SelectedFurnitureCard
                key={furnitures.furnitureId}
                furniture={furnitures}
                onNewProject={handleNewProject}
              />
            ))}
        </div>
      </div>

      <div className="card-list">
        {furnitures
          .slice()
          .sort((a, b) => a.name.toLowerCase().localeCompare(b.name))
          .map((furnitures) => (
            <FurnitureCard
              key={furnitures.id}
              furniture={furnitures}
              onNewProject={handleNewProject}
            />
          ))}
      </div>
    </>
  );
}
