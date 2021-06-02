import { Menu, Dropdown, Button, Input } from "antd";
import { useState, React } from "react";
export function DropDown(props) {
  let [selected, setSelected] = useState(props.value);
  let menuItems = props.items.map((item) => {
    let id = item.id ? item.id : item;
    let name = item.name ? item.name : item;
    return (
      <Menu.Item key={id}>
        <a>{name}</a>
      </Menu.Item>
    );
  });
  let menu = (
    <Menu
      onClick={(value) => {
        setSelected(props.items.find((item) => item.id == value.key).name);
        if (typeof props.onChange != "undefined")
          props.onChange(props.items.find((item) => item.id == value.key).id);
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
      value={props.value}
      onInput={props.onChange}
    ></Input>
  );
}
