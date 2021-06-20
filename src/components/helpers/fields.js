import { Menu, Dropdown, Button, Input, AutoComplete } from "antd";
import { useState, React } from "react";
import { procument_TypesSlice } from "../../features/collections/procumenttypeSlice";
export function DropDown(props) {
  let [selected, setSelected] = useState({label:"",value:-1});
  let options = props.items.map(item => ({
    label:item.name,
    value:item.id
  }))
 
  return (
   <AutoComplete
     options={options}
     value={selected.label}
     placeholder={props.header}
     filterOption={(inputValue, option) => option.label.includes(inputValue)}
     onChange={(valu) => {
      let _option = options.find(option => option.value == valu);
        if(!_option) _option = {value:-1, label:valu}; 
       setSelected(_option);
       if(props.onChange)
       props.onChange({name:_option.label,id:_option.value})
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

export function System_input(props){
  return <Input  value ={props.value} key={props.value} placeholder={props.placeholder} />;
}