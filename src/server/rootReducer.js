import { combineReducers } from "redux";
import categoryReducer from "../redux/reducers";

// it's not actually necessary to combine reducers here, but seeing
// how it's done is useful. If you want an individual reducer for
// each component, avoiding a massive, single reducer for the entire
// app, this is a way.
const rootReducer = combineReducers({
  category: categoryReducer
});

export default rootReducer;
