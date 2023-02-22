import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Routers from "./router/Routers";
// this manifest is used temporarily for development purposes

const manifestUrl =
  "https://maverick516.github.io/Lucia-page/tonconnect-manifest.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
);
