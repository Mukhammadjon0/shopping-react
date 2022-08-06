import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./Product";
import BasketReduser from "../redux/basketSlice";
import { usersApi } from "./User";
import UserReduser from "../redux/userSlice";
export const store = configureStore({
  reducer: {
    basket: BasketReduser,
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    user: UserReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware),
});
