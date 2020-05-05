import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import memeReducer from "./memeReducer";

/**
 * Top level of app.
 * Creates Redux state with memeReducer.
 *  Redux state available throughout app:
 *    meme: An object that stores an imageURL, topText, bottomText and a unique id
 */

const store = createStore(
  memeReducer,
  compose(
    applyMiddleware(thunk), //Needed for something we do later (async stuff)
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
