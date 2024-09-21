import { configureStore } from "@reduxjs/toolkit";
import { ProductsReducer } from "./productsSlice";
import { EmployeeReducer } from "./EmployeeSlice";
import { AuthReducer } from "./AuthSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    employee: EmployeeReducer,
    auth: AuthReducer
  }
})