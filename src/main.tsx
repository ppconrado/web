import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./global.css"; // importacoes por dentro do arquivo javascript

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
