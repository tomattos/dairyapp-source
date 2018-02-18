import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import appReducer from "./reducers";
import "./fontLoader";

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(appReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

export default configureStore;
