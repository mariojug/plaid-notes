import { MenuItems, MenuGroups } from "../constants/menu";
import { MenuGroupInterface } from "../interfaces";

const FileMenu: MenuGroupInterface = {
  title: MenuGroups.FILE,
  menuItems: [
    {
      label: MenuItems.file.OPEN_NOTEBOOK,
      action: () => {},
    },
    {
      label: MenuItems.file.NEW_NOTEBOOK,
      action: () => {},
    },
    {
      label: MenuItems.file.OPEN_MARKDOWN,
      action: () => {},
    },
    {
      label: MenuItems.file.SAVE,
      action: () => {},
    },
    {
      label: MenuItems.file.SAVE_AS,
      action: () => {},
    },
    {
      label: MenuItems.file.TODOS,
      action: () => {},
    },
    {
      label: MenuItems.file.NEW_TODO,
      action: () => {},
    },
    {
      label: MenuItems.file.DELETE_TODO,
      action: () => {},
    },
  ],
};

export default FileMenu;
