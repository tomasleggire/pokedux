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
import { logger, pokeUpperCaseName } from "./middlewares/index.ts";
import "antd/dist/reset.css";
import "./index.css";

const composedEnhancers = compose(
  applyMiddleware(logger, pokeUpperCaseName),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(pokemonsReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
