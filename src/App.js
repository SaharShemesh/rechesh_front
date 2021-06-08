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
