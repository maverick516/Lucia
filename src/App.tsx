import { Button } from "@mui/material";
import { Container } from "@mui/system";
import "@twa-dev/sdk";
import "./App.css";
import "./index.css";
import Logo from "./assets/mainLogo.svg";
import { BrowserRouter, Link, Router } from "react-router-dom";
import Login from "./component/Login";
import Routers from "./router/Routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
