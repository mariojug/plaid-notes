import React from "react";
import "./App.css";

import Menubar from "./components/Menubar";
import Window from "./components/Window";

const App: React.FC = () => {
  return (
    <>
      <Menubar />
      <Window />
    </>
  );
};

export default App;
