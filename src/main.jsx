import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { Provider } from "react-redux";
import Context from "./GlobalContext/GlobalContext.jsx";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <Provider store={store}>
        <App />
      </Provider>
    </Context>
  </React.StrictMode>
);
