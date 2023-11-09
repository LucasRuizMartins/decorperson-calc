import { FurnitureDTO } from "../models/furniture";
import { ProjectDTO, ProjectItemDTO } from "../models/project";
import * as projRepository from "../repository/furnitury-project-repository";

export function saveProj(proj: ProjectDTO) {
  projRepository.save(proj);
}
export function getProj(): ProjectDTO {
  return projRepository.get();
}

export function addFurniture(furniture: FurnitureDTO) {
  const proj = projRepository.get();
  const item = proj.items.find((x) => x.furnitureId === furniture.id);
  if (!item) {
    const newItem = new ProjectItemDTO(
      furniture.id,
      furniture.name,
      furniture.length,
      furniture.height,
      furniture.width,
      furniture.imgUrl
    );
    proj.items.push(newItem);
    projRepository.save(proj);
  }
}

export function removeFurniture(item: ProjectItemDTO) {
  const itemId = item.furnitureId;

  const proj = projRepository.get();
  proj.items = proj.items.filter((x) => x.furnitureId !== Number(itemId));
  projRepository.save(proj);
}

export function findFurnitureByName(name: string) {
  const furnitureList = furnitures
    .slice()
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name))
    .filter((furniture) =>
      furniture.name.toLowerCase().includes(name.toLowerCase())
    );

  return furnitureList;
}

const furnitures: FurnitureDTO[] = [
  {
    id: 1,
    name: "Balcão com porta de passagem em MDF Alamo Essencial Wood",
    length: 3600,
    height: 1200,
    width: 600,
    imgUrl:
      "https://static.mobly.com.br/p/Politorno-BalcC3A3o-de-Cozinha-Canelone-2-PT-3-GV-Preto-e-Alamo-5787-6819211-3-zoom.jpg",
  },
  {
    id: 2,
    name: "Armário com 2 portas, 4 gavetas internas, 4 prateleiras em MDF Alamo Essencial Wood",
    length: 2300,
    height: 1000,
    width: 500,
    imgUrl:
      "https://product-hub-prd.madeiramadeira.com.br/112869733/images/1e265166-a569-410e-b710-c12aded09f8415148048847autes02.jpg",
  },
  {
    id: 3,
    name: "Armário Pequeno MDF Alamo Essencial Wood",
    length: 1500,
    height: 1200,
    width: 400,
    imgUrl:
      "https://cdn.dooca.store/43368/products/hyn7rcbw8rtoylf102noceqzrbcr8ii5iosj_640x640+fill_ffffff.png?v=1655996742&webp=0",
  },
  {
    id: 4,
    name: "Mesa de Cabeceira Jandira 1 GV Oak",
    length: 500,
    height: 500,
    width: 400,
    imgUrl:"https://static.mobly.com.br/p/Completa-MC3B3veis-Mesa-de-Cabeceira-Jandira-1-GV-Oak-6591-622698-1-zoom.jpg",
  },
];

