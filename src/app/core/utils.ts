import { MenuItem } from "app/components/menu";

export const groupSidebarItems = (
  items: MenuItem[],
  parentId: string = "0"
): MenuItem[] => {
  const groupedItems: MenuItem[] = [];

  for (const item of items) {
    if (item.parentId === parentId) {
      const children = groupSidebarItems(items, item.nodeId);
      if (children.length > 0) {
        item.sub = children;
      }
      groupedItems.push(item);
    }
  }

  return groupedItems;
};
