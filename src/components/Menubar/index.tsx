import React from "react";
import styled from "styled-components";
import MenuGroup from "./MenuGroup";

import FileMenu from "../../menus/FileMenu";
import EditMenu from "../../menus/EditMenu";
import ViewMenu from "../../menus/ViewMenu";

const Menubar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1rem;
  font-size: 0.75rem;
  user-select: none;
`;

const CSSContainer = styled.div`
  --menu-text-default: "black";
  --menu-text-hover: #3b3b3b;
  --menu-text-click: "#292929";
  --menu-bg-hover: "#dedede";
  --menu-bg-click: "#e9e9e9";
  --menu-bg-color: "black";
`;

const menus = [FileMenu, EditMenu, ViewMenu];

const Component: React.FC = () => {
  return (
    <>
      <CSSContainer>
        <Menubar>
          {menus.map((it) => (
            <MenuGroup title={it.title} menuItems={it.menuItems} />
          ))}
        </Menubar>
      </CSSContainer>
    </>
  );
};

export default Component;
