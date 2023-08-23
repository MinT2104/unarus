import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import currencyPickedReducer from "../slices/currencyPicked";
import userReducer from "../slices/userLoginSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  currencyPicked: currencyPickedReducer,
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
