import storage from "redux-persist/lib/storage";
import { user, snackbarReducer } from "./common/commonReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { newsReducer } from "./news/reducer";


const persistConfig = {
  key: "auth",
  storage,
  whitelist: [
    "newsReducer",
    "snackbarReducer",

  ],
};

const appReducer = combineReducers({
  newsReducer: newsReducer,
  snackbarReducer: snackbarReducer,
});

export default persistReducer(persistConfig, appReducer);
