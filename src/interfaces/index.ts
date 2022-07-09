import React from "react";

export interface MenuItemInterface {
  label: string;
  action: Function;
}

export interface MenuGroupInterface {
  title: string;
  menuItems: Array<MenuItemInterface>;
}

export interface WindowInterface {
  notebooks: Array<React.FC<EditorInterface>>; // list of notebooks currently in memory
}

export interface TabBarInterface {
  tabs: Array<TabInterface>; // array of tabs
}

export interface TabInterface {
  notebook: NotebookInterface; // notebook data
  editor: Array<React.FC<EditorInterface>>; // pointer to the react component Editor - displaying notebook
}

export interface EditorInterface {
  notebook: NotebookInterface; // what notebook to base the instance off of
  location: number; // where the pointer is in the window UI
  viewMode: string; // the viewing mode of the notebook in the editor, notebook-specific
}

export interface NotebookHeaderInterface {
  label: string; // heading text
  location: number; // where the pointer of the beginning of the heading is at
}

export interface NotebookTocInterface {
  contents: Array<NotebookHeaderInterface>; // array of objects adhering to NotebookHeaderInterface
}

export interface NotebookInterface {
  title: string;
  author: string;
  dateCreated: number;
  dateLastModified: number;
  headers: Array<NotebookTocInterface>;
}
