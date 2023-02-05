import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";

const rootDiv = document.getElementById("react-app");
const root = ReactDOM.createRoot(rootDiv);
root.render(<Home />);
