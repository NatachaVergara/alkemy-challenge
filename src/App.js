import { BrowserRouter } from "react-router-dom";


import RoutesApp from "./routes/RoutesApp";


function App() {


  return (
    <BrowserRouter>

      <div className="container d-flex flex-column">
        <RoutesApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
