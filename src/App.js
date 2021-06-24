import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Spin } from "antd";
import App_Router from "./components/helpers/navigation";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { fetchOrders } from "./features/order/orderSlice";
import { fetch_units } from "./features/collections/unitSlice";
import { fetch_types } from "./features/collections/procumenttypeSlice";
import { fetch_bags } from "./features/collections/pulling_bagSlice";
import { fetch_assignments } from "./features/collections/assignmentSlice";
import { fetch_soldiers } from "./features/collections/soldiersSlice";
import { fetch_orderTypes } from "./features/collections/order_typeSlice";
import { fetch_budgetTypes } from "./features/collections/budget_typeSlice";
import { fetch_iaf_num} from "./features/collections/iaf_numSlice";
import { fetch_creators } from "./features/collections/creatorSlice";
import { fetch_providers } from "./features/collections/providerSlice";
import { fetch_measurements } from "./features/collections/measurementSlice";
import { fetch_constants } from "./features/collections/constantSlice";
import {fetch_users} from "./features/collections/userSlice";
import { fetch_user_permissions } from "./features/collections/user_permissionSlice";
import { fetch_users_roles } from "./features/collections/user_roleSlice";
function App() {
  let [ready, setReady] = useState(false);
  useEffect(() => {
    //fetching all the members on start up!
    Promise.all([
      store.dispatch(fetchOrders()),
      store.dispatch(fetch_units()),
      store.dispatch(fetch_types()),
      store.dispatch(fetch_bags()),
      store.dispatch(fetch_assignments()),
      store.dispatch(fetch_soldiers()),
      store.dispatch(fetch_orderTypes()),
      store.dispatch(fetch_budgetTypes()),
      store.dispatch(fetch_iaf_num()),
      store.dispatch(fetch_creators()),
      store.dispatch(fetch_providers()),
      store.dispatch(fetch_measurements()),
      store.dispatch(fetch_constants()),
      store.dispatch(fetch_users()),
      store.dispatch(fetch_user_permissions()),
      store.dispatch(fetch_users_roles()),
    ]).then((done) => setReady(true));
  }, []);
  if (!ready) return <Spin />;
  return (
    <BrowserRouter>
      <App_Router />
    </BrowserRouter>
  );
}
export default App;
