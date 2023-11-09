export class ProjectDTO {
  id?: number;
  items: ProjectItemDTO[] = [];



}

export class ProjectItemDTO {

  constructor(
    public furnitureId: number,
    public name: string,
    public length: number,
    public height: number,
    public width: number,
    public imgUrl: string,
  ) {}

}



