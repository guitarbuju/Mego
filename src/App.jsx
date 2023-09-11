
import "./App.css";
import mainRouter from "./Routing/mainRouter";
import { RouterProvider } from "react-router-dom";

function App() {


  return (
    <div>
    <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;
