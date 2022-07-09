import { MenuItems, MenuGroups } from "../constants/menu";
import { MenuGroupInterface } from "../interfaces";

const EditMenu: MenuGroupInterface = {
  title: MenuGroups.EDIT,
  menuItems: [
    {
      label: MenuItems.edit.UNDO,
      action: () => {},
    },
    {
      label: MenuItems.edit.REDO,
      action: () => {},
    },
    {
      label: MenuItems.edit.CUT,
      action: () => {},
    },
    {
      label: MenuItems.edit.COPY,
      action: () => {},
    },
    {
      label: MenuItems.edit.PASTE,
      action: () => {},
    },
  ],
};

export default EditMenu;
