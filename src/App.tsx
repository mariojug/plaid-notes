import React from "react";
import "./App.css";
import { AppContext, AppContextDefault } from "./context/AppContext";

const App: React.FC = () => {
  return (
    <>
      <AppContext.Provider value={AppContextDefault}>...</AppContext.Provider>
    </>
  );
};

export default App;
