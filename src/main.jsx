import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { Provider } from "react-redux";

import store from "./redux/store.js";
import DemoCarousel from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DemoCarousel />
    </Provider>
  </React.StrictMode>
);
