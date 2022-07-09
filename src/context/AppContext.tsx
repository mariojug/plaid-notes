import React, { createContext, useContext } from "react";
import { NotebookInterface } from "../interfaces";
import { Users } from "../constants/context";

interface AppContextInterface {
  user: string;
  openNotebooks: Array<NotebookInterface>;
  openNotebookComponents: Array<React.FC<NotebookInterface>>;
}

export const AppContext = createContext<AppContextInterface | null>(null);

export const AppContextDefault: AppContextInterface = {
  user: Users.NOT_LOGGED_IN,
  openNotebooks: [],
  openNotebookComponents: [],
};

export const useAppContext = () => useContext(AppContext);
