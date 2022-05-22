import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from "./routes";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/toastr/package/toastr.css";
import "./styles/styles.css";

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById("app")
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
