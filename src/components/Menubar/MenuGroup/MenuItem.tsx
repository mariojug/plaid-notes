import styled from "styled-components";

export interface MenuItemInterface {
  label: string;
  action: Function;
}

const Component = styled.div`
  padding: 0.25em 1em;
  background-color: var(--menu-bg-default);
  color: var(--menu-text-default);
  font-size: 1em;
  &:hover,
  &:focus {
    background-color: var(--menu-bg-hover);
    color: var(--menu-text-hover);
  }
  &:active {
    font-weight: bold;
    background-color: var(--menu-bg-click);
    color: var(--menu-text-click);
  }
`;

export default Component;
