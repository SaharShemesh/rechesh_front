import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import orderReducer from "../features/order/orderSlice";
import procument_typeReducer from "../features/collections/procumenttypeSlice";
import unitReducer from "../features/collections/unitSlice";
import pulling_bagReducer from "../features/collections/pulling_bagSlice";
//reducers
import {} from "../features/order/orderSlice";
export const store = configureStore({
  reducer: {
    orders: orderReducer,
    units: unitReducer,
    procument_types: procument_typeReducer,
    pulling_bags: pulling_bagReducer,
  },
});
