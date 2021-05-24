import { Menu } from "antd";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Home from "../views/Home.view";
import My_orders from "../views/my_orders/index";
import New_Order from "../views/new_order/index";
function NavB() {
  return (
    <Menu style={{ width: "100%", background: "#f8f8f8" }} mode="horizontal">
      <Menu.Item style={{ float: "right" }}>
        <Link to="/my-orders">הזמנות קיימות</Link>
      </Menu.Item>
      <Menu.Item key="app" style={{ float: "right" }}>
        <Link to="/new-order">יצירה של הזמנה חדשה</Link>
      </Menu.Item>
    </Menu>
  );
}

function App_Router() {
  return (
    <>
      <NavB />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/my-orders">
          <My_orders />
        </Route>
        <Route path="/new-order">
          <New_Order />
        </Route>
      </Switch>
    </>
  );
}
export default App_Router;
