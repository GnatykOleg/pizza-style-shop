import React from "react";

import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter } from "react-router-dom";

import { persistor, store } from "./redux/store/store";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/pizza-style-shop">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
