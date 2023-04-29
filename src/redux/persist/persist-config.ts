import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { REDUX_STATE } from "../../helpers/constants/redux-constants";

import storage from "redux-persist/lib/storage";

const { CART, PIZZAS } = REDUX_STATE;

export const persistConfig = {
  key: CART,

  storage,

  // Add to local storage only cart data
  whitelist: [CART],

  // Not add to local storage pizzas and _pesist data
  blacklist: ["_persist", PIZZAS],
};

export const middlewareConfig = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};
