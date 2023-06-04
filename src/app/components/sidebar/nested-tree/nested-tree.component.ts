import { Component, Input, OnInit } from "@angular/core";
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
}

@Component({
  selector: "app-nested-tree",
  templateUrl: "./nested-tree.component.html",
  styleUrls: ["./nested-tree.component.scss"],
})
export class NestedTreeComponent implements OnInit {
  @Input() nestedObjects: MenuItem[] = [];

  ngOnInit(): void {}
  changeParentMenu(nodeId: any) {
    this.nestedObjects.forEach((x) => {
      if (x.nodeId == nodeId || x.active) {
        x.active = !x.active;
      } else {
        x.active = false;
      }
    });
  }
  findParentId(functionId: string) {
    return this.nestedObjects.find((x) => x.functionId == functionId)?.parentId;
  }
}
