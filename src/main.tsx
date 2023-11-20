import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { pokemonsReducer } from "./reducers/pokemons.tsx";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { logger, pokeUpperCaseName } from "./middlewares/index.ts";
import "antd/dist/reset.css";
import "./index.css";

const composeAlt =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger, pokeUpperCaseName)
);

const store = createStore(pokemonsReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
