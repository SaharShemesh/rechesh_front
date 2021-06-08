import { Menu } from "antd";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import Home from "../views/Home.view";
import My_orders from "../views/my_orders";
import New_Order from "../views/new_order";
import Management_view from "../views/management-panel";
function NavB() {
  return (
    <Menu style={{ width: "100%", background: "#f8f8f8" }} mode="horizontal">
      <Menu.Item style={{ float: "right" }}>
        <NavLink activeClassName="ant-menu-item-selected" to="/my-orders">הזמנות קיימות</NavLink>
      </Menu.Item>
      <Menu.Item style={{ float: "right" }}>
        <NavLink activeClassName="ant-menu-item-selected" activeStyle={{color:"red"}} to="/new-order">יצירה של הזמנה חדשה</NavLink>
      </Menu.Item>
      <Menu.Item style={{ float: "right" }}>
        <Link to="/management-panel">פאנל ניהול</Link>
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
        <Route path="/management-panel">
          <Management_view />
        </Route>
      </Switch>
    </>
  );
}
export default App_Router;
