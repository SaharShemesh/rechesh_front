import { Menu } from "antd";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useRouteMatch,
  NavLink,
  useLocation,
  useHistory,
} from "react-router-dom";
import Home from "../views/Home.view";
import My_orders from "../views/my_orders";
import New_Order from "../views/new_order";
import Management_view from "../views/management-panel";
import Edit_view from "../views/edit_order";
import { useState } from "react";
function NavB() {
  let history = useHistory();
  let [selected, setSelected] = useState();
  history.listen((location, action) => {
    setSelected(location.pathname);
  });
  return (
    <Menu style={{ width: "100%", background: "#f8f8f8" }} mode="horizontal">
      <Menu.Item style={{ float: "right" }}>
        <NavLink exact to="/">
          הזמנות קיימות
        </NavLink>
      </Menu.Item>
      <Menu.Item style={{ float: "right" }}>
        <NavLink
          activeClassName="ant-menu-item-selected"
          className={selected == "/new-order" ? "ant-menu-item-selected" : ""}
          exact
          to="/new-order"
        >
          יצירה של הזמנה חדשה
        </NavLink>
      </Menu.Item>
      <Menu.Item style={{ float: "right" }}>
        <NavLink
          activeClassName="ant-menu-item-selected"
          exact
          to="/management-panel"
        >
          פאנל ניהול
        </NavLink>
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
          <My_orders />
        </Route>
        <Route path="/new-order">
          <New_Order />
        </Route>
        <Route path="/management-panel">
          <Management_view />
        </Route>
        <Route
          path="/edit-ordr/:order/:sub_order"
          children={<Edit_view />}
        ></Route>
      </Switch>
    </>
  );
}
export default App_Router;
