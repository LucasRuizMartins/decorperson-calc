import axios, { AxiosRequestConfig } from "axios";
import { FurnitureDTO } from "../models/furniture";
import { ProjectDTO, ProjectItemDTO } from "../models/project";
import * as projRepository from "../repository/furnitury-project-repository";
import { BASE_URL } from "../utils/system";

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

export function checkFurniture(item: FurnitureDTO) {
  const itemId = item.id;
  const proj = projRepository.get();
  const idIsPresent = proj.items.some((x) => x.furnitureId === Number(itemId));

  return idIsPresent;
}

export function removeFurniture(item: FurnitureDTO) {
  const itemId = item.id;

  const proj = projRepository.get();
  proj.items = proj.items.filter((x) => x.furnitureId !== Number(itemId));
  projRepository.save(proj);
}

export function removeProjectWithId(itemId: number) {
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

export function findAll() {
  return axios.get(`${BASE_URL}/furnitures`);
}

export function findById(id: number) {
  console.log(`${BASE_URL}/furnitures/${id}`);
  return axios.get(`${BASE_URL}/furnitures/${id}`);
}

export function deleteById(id: number) {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/furnitures/${id}`,
    withCredentials: true,
  };

  return axios.delete(BASE_URL + config.url, config);
}

export function updateRequest(obj: FurnitureDTO) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/furnitures/${obj.id}`,
    withCredentials: true,
    data: obj,
  };

  return axios.put(BASE_URL + config.url, obj, config);
}

export function insertRequest(obj: FurnitureDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `/furnitures`,
    withCredentials: true,
    data: obj,
  };
  return axios.post(BASE_URL + config.url, obj, config);
}
