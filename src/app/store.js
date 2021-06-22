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
import iaf_num_Reducer from "../features/collections/iaf_numSlice";
import creator_Reducer from "../features/collections/creatorSlice";
import provider_Reducer from "../features/collections/providerSlice";
import measurement_Reducer from "../features/collections/measurementSlice";
import constants_Reducer from "../features/collections/constantSlice";
import users_Reducer from "../features/collections/userSlice";
import user_permissions_Reducer from "../features/collections/user_permissionSlice";
import users_roles_Reducer from "../features/collections/user_roleSlice";
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
    iaf_nums: iaf_num_Reducer,
    creators: creator_Reducer,
    providers: provider_Reducer,
    measurements: measurement_Reducer,
    constants: constants_Reducer,
    users: users_Reducer,
    user_permissions: user_permissions_Reducer,
    users_roles: users_roles_Reducer,
  },
});
