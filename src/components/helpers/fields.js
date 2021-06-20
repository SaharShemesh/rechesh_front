import { Menu, Dropdown, Button, Input, AutoComplete } from "antd";
import { useState, React } from "react";
import { procument_TypesSlice } from "../../features/collections/procumenttypeSlice";
export function DropDown(props) {
  let [selected, setSelected] = useState(
    props.value
      ? { label: props.value.name, value: props.value.id }
      : { label: "", value: -1 }
  );
  let options = props.items.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  return (
    <AutoComplete
      options={options}
      value={selected.label ? selected.label : ""}
      placeholder={props.header}
      style={{
        minWidth: 250,
      }}
      filterOption={(inputValue, option) => option.label.includes(inputValue)}
      onSearch={(label) => {
        let _option = options.find((option) => option.label == label);
        if (props.onChange && _option)
          props.onChange({ name: _option.label, id: _option.value });
        if (!_option) _option = { value: -1, label: label };
        setSelected(_option);
      }}
      onSelect={(value, option) => {
        setSelected(option);
        if (props.onChange)
          props.onChange({ name: option.label, id: option.value });
      }}
    />
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

export function System_input(props) {
  return (
    <Input
      value={props.value}
      key={props.value}
      placeholder={props.placeholder}
    />
  );
}
