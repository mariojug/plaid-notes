import React, { useState } from "react";
import styled from "styled-components";
import MenuItemDropdown from "./MenuItemDropdown";
import MenuItem from "./MenuItem";

import { MenuGroupInterface, MenuItemInterface } from "../../../interfaces";

const MenuTitle = styled(MenuItem)`
  font-weight: bold;
  max-width: fit-content;
`;

const MenuGroup = styled.li`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 2.25em;
`;

const MenuGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Component: React.FC<MenuGroupInterface> = (props: MenuGroupInterface) => {
  const [menuShowing, setMenuShowing] = useState<boolean>(false);

  const handleClick = () => setMenuShowing(true);
  const handleMouseLeave = () => setMenuShowing(false);

  return (
    <>
      <MenuGroupWrapper onMouseLeave={handleMouseLeave}>
        <MenuTitle onClick={handleClick}>{props.title}</MenuTitle>
        {menuShowing ? (
          <MenuGroup>
            {props.menuItems.map((it: MenuItemInterface) => (
              <MenuItemDropdown label={it.label} action={it.action} />
            ))}
          </MenuGroup>
        ) : (
          <></>
        )}
      </MenuGroupWrapper>
    </>
  );
};

export default Component;
