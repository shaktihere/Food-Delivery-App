import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: { cart: cartReducer },
}); //gives us a store for our react app

export default appStore;
