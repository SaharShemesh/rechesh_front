import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import orderReducer from "../features/order/orderSlice";
import procument_typeReducer from "../features/collections/procumenttypeSlice";
import unitReducer from "../features/collections/unitSlice";
import pulling_bagReducer from "../features/collections/pulling_bagSlice";
import assignments_Reducer from "../features/collections/assignmentSlice";
import soldiers_Reducer from "../features/collections/soldiersSlice";
import ordertypes_Reducer from "../features/collections/order_typeSlice";
import budgettypes_Reducer from "../features/collections/budget_typeSlice";
//reducers
import {} from "../features/order/orderSlice";
export const store = configureStore({
  reducer: {
    orders: orderReducer,
    units: unitReducer,
    procument_types: procument_typeReducer,
    pulling_bags: pulling_bagReducer,
    assignments: assignments_Reducer,
    soldiers: soldiers_Reducer,
    order_types: ordertypes_Reducer,
    budget_types: budgettypes_Reducer,
  },
});
