import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//! which will provide redux store to our react application
import { Provider } from "react-redux";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
