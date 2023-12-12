import { Profiler } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/sideBar";
import RouteManager from "./routes/routes";

function App() {
  return (
    <>
    <RouteManager/>
    </>
  );
}

export default App;
