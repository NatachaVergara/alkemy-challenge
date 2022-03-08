import { BrowserRouter } from "react-router-dom";
import MenuContextProvider from "./Context/MenuContext";


import RoutesApp from "./routes/RoutesApp";


function App() {


  return (
    <MenuContextProvider>
    <BrowserRouter>
      <div className="container d-flex flex-column">
        <RoutesApp />
      </div>
    </BrowserRouter>
    </MenuContextProvider>
  );
}

export default App;
