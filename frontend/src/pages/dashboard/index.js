import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../../pages/dashboard/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./components/store/reducer";

const root = ReactDOM.createRoot(document.getElementById("wrapper"));
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </BrowserRouter>
);
