import { Menu, Dropdown, Button, Input } from "antd";
import { useState, React } from "react";
export function DropDown(props) {
  let [selected, setSelected] = useState();
  let menuItems = props.items.map((item) => {
    return (
      <Menu.Item key={item}>
        <a>{item}</a>
      </Menu.Item>
    );
  });
  let menu = (
    <Menu
      onClick={(value) => {
        setSelected(value.key);
      }}
    >
      {menuItems}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Button className="system-field system-space">
        {selected ? selected : props.header}
      </Button>
    </Dropdown>
  );
}

export function DisabledInput(props) {
  return (
    <Input
      className={`system-field ${props.className}`}
      placeholder={props.placeHolder}
      disabled
    ></Input>
  );
}
