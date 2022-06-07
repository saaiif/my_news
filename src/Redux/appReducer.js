import storage from "redux-persist/lib/storage";
import { userDetailsReducer } from "./trainee/reducer";
import { user, snackbarReducer } from "./common/commonReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { trainingDetailsReducer } from "./trainingdetails/reducer";
import { trackerReducer } from "./admin/track/trackReducer";
import { userReducer } from "./admin/user/userReducer";
import { designationReducer } from "./admin/designations/reducers";
import { roleReducer } from "./admin/role/reducers";
import { batchReducer } from "./admin/batch/batchReducer";
import { productReducer } from "./admin/huProduct/reducers";
import { adminTrainingReducer } from "./admin/trainings/adminTrainingReducer";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: [
    "userDetails",
    "user",
    "snackbarReducer",
    "trainingDetails",
    "trackReducer",
    "userReducer",
    "batchReducer",
    "designationReducer",
    "roleReducer",
    "productReducer",
  ],
};

const appReducer = combineReducers({
  userDetails: userDetailsReducer,
  snackbarReducer: snackbarReducer,
  user: user,
  trainingDetails: trainingDetailsReducer,
  trackReducer: trackerReducer,
  userReducer: userReducer,
  designationReducer: designationReducer,
  roleReducer: roleReducer,
  batchReducer: batchReducer,
  productReducer: productReducer,
  adminTrainingReducer: adminTrainingReducer,
});

export default persistReducer(persistConfig, appReducer);
