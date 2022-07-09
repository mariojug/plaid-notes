import { MenuItems, MenuGroups } from "../constants/menu";
import { MenuGroupInterface } from "../interfaces";

const ViewMenu: MenuGroupInterface = {
  title: MenuGroups.VIEW,
  menuItems: [
    {
      label: MenuItems.view.VIEW_ONE_CONTINUOUS,
      action: () => {},
    },
    {
      label: MenuItems.view.VIEW_TWO_CONTINUOUS,
      action: () => {},
    },
    {
      label: MenuItems.view.VIEW_TWO_BOOK,
      action: () => {},
    },
    {
      label: MenuItems.view.SHOW_TABLE_CONTENTS,
      action: () => {},
    },
    {
      label: MenuItems.view.HIDE_TABLE_CONTENTS,
      action: () => {},
    },
  ],
};

export default ViewMenu;
