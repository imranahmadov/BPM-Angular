export class Menu {
  errors: [];
  isSuccess: boolean;
  menu: MenuItem[];

  constructor(errors: [], isSuccess: boolean, menu: MenuItem[]) {
    this.errors = errors;
    this.isSuccess = isSuccess;
    this.menu = menu;
  }
}

export interface MenuItem {
  active: boolean;
  description: string;
  functionId: string;
  icon: string;
  nodeId: string;
  parentId: string;
  position: string;
  url: string;
  sub: MenuItem[];

  /* constructor(description: string, functionId: string, icon: string, nodeId: string, parentId: string, position: string, url: string, sub: MenuItem[]) {
        this.description = description;
        this.functionId = functionId;
        this.icon = icon;
        this.nodeId = nodeId;
        this.parentId = parentId;
        this.position = position;
        this.url = url;
        this.sub = sub;
      }*/
}
