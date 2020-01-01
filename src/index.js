import React from "react";
import { render } from "react-dom";
import { ConnectedRouter } from "react-router-redux";
import { history } from "./store";
import MainPage from "./components/main";
import { createStore, applyMiddleware } from "redux";

import "./index.css";

// const target = document.querySelector('#root')

// render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <div>
//         <MainPage />
//       </div>
//     </ConnectedRouter>
//   </Provider>,
//   target
// )

import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import reducer from "./reducers";
import { watcherSaga } from "./sagas/sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(reducer, applyMiddleware(sagaMiddleware));

// run the saga
sagaMiddleware.run(watcherSaga);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MainPage />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
