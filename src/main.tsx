import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { pokemonsReducer } from "./reducers/pokemons.tsx";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import "antd/dist/reset.css";
import "./index.css";

const store = createStore(
  pokemonsReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
