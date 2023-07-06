import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import WebFont from "webfontloader";
import "./index.css";
import App from "./App";

WebFont.load({
  google: {
    families: ["Roboto:400,700"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
