import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MenuContextProvider from "./Context/MenuContext";


import RoutesApp from "./routes/RoutesApp";


function App() {


  return (
    <MenuContextProvider>
    <BrowserRouter>
      <>
        <RoutesApp />
      </>
    </BrowserRouter>
    </MenuContextProvider>
  );
}

export default App;
