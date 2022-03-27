import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(
  <StrictMode>
    <App color="props_color" />
  </StrictMode>,
  document.getElementById("root")
);
