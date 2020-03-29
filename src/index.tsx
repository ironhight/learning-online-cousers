import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./store/reducers/rootReducer";
import App from "./App";

import "./assets/styles/main.scss";

import * as serviceWorker from "./serviceWorker";

const middlwwares = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlwwares))
);
// console.log("run index");
ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
