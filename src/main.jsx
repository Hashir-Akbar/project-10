import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./reset.scss";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// position: absolute;
//   top: 59px;
//   width: 100%;
//   height: 13px;
