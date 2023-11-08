import "./styles.css";
import { useState, useEffect, useContext } from "react";
import * as furnitureService from "../../../services/furniture-service";
import * as calcService from "../../../services/calculate-service";

import { FurnitureCard } from "../../../components/FurnitureCard";
import { FurnitureDTO } from "../../../models/furniture";

type QueryParams = {
  min: number;
  max: number;
};

export function FurnituresBody() {
  const [fornitureFilter, setFurnitureFilter] = useState("");
  const [furnitures, setfurnitures] = useState<FurnitureDTO[]>([]);

 
  useEffect(() => {
    setfurnitures(furnitureService.findFurnitureByName(fornitureFilter));
  }, [fornitureFilter]);

  return (
    <>
      <div className="card-list">
        {furnitures
          .slice()
          .sort((a, b) => a.name.toLowerCase().localeCompare(b.name))
          .map((furnitures) => (
            <FurnitureCard key={furnitures.id} furniture={furnitures} />
          ))}
      </div>
    </>
  );
}
