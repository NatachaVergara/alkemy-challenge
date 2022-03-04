import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import RoutesApp from "./routes/RoutesApp";


function App() {
  return (
    <BrowserRouter>
      
      <div className="container d-flex flex-column">
         <Navbar />  
         <RoutesApp/>
        </div>
     
    </BrowserRouter>
  );
}

export default App;
