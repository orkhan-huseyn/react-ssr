import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default () => {
  const store = createStore(rootReducer, {}, applyMiddleware(thunk));
  return store;
};
