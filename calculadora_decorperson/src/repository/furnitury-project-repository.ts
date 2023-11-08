
import { ProjectDTO, ProjectItemDTO } from "../models/project";
import { FURNITURES_KEY } from "../utils/system";

export function save(proj: ProjectDTO) {
  const str = JSON.stringify(proj);
  localStorage.setItem(FURNITURES_KEY, str);
}

export function get(): ProjectDTO {
  const str = localStorage.getItem(FURNITURES_KEY) || '{"items": []}';
  const obj = JSON.parse(str) as ProjectDTO;
  
  const proj = new ProjectDTO();

  obj.items.forEach(x => {
    proj.items.push(new ProjectItemDTO(x.furnitureId,x.name,x.length,x.height,x.width,x.imgUrl) )
  })

  return proj
}

export function clear() {
  localStorage.setItem(FURNITURES_KEY, '{"items" :[]}');
}