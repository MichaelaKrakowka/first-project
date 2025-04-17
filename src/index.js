import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import { App } from "./App";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

// napsani readme
