import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GifExpertApp } from "./GifExpertApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);

export * from "./components/GifGrid";
export * from "./components/GifItem";
export * from "./components/AddCategory";
