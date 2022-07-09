import React, { useState } from "react";
import styled from "styled-components";
import MenuItem, { MenuItemInterface } from "./MenuItem";

const Component: React.FC<MenuItemInterface> = (props: MenuItemInterface) => {
  const handleClick = () => {
    return props.action();
  };
  return (
    <>
      <MenuItem onClick={handleClick}>{props.label}</MenuItem>
    </>
  );
};

export default Component;
