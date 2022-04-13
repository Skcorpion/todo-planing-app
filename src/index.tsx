import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.scss";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const container = document.getElementById("root")!;

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
