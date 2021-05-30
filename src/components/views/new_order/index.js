import React, { useRef, useState } from "react";
import {
  AcceptTable,
  Details,
  Order_details,
  Actions,
  SellItem,
  Bid,
} from "./sections";
import { Row, Col } from "antd";
import "./css/order.css";
import { re_order_the_key } from "../../helpers/procedures";
import { system_Notification } from "../../helpers/notification";
//dummy bids
let object = {
  1: {
    desc: "פריט ראשון",
    1: {
      name: "ספק ראשון",
      amount: 5,
      price: 300,
      providing_time: "1-3-2022",
    },
    2: {
      name: "ספק שני",
      amount: 53,
      price: 300,
      providing_time: "1-3-2022",
    },
    3: {
      name: "ספק מס 3",
      amount: 42,
      price: 300,
      providing_time: "1-3-2022",
    },
  },
  2: {
    desc: "פריט שני",
    1: {
      name: "ספק ראשון",
      amount: 51,
      price: 300,
      providing_time: "1-3-2022",
    },
    2: {
      name: "ספק שני",
      amount: 53,
      price: 300,
      providing_time: "1-3-2022",
    },
    3: {
      name: "ספק מס 3",
      amount: 55,
      price: 300,
      providing_time: "1-3-2022",
    },
  },
};
export default function New_order() {
  //sections state
  let [bids, setBids] = useState(object);
  let [items, setItems] = useState([]);
  let [selected_items, setSelected] = useState([]);
  function addItem() {
    let messages = [];
    let last_row = items[items.length - 1];
    if (last_row.desc == "") messages.push("לא הוזן תיאור פריט");
    if (last_row.iaf_num == "") messages.push("לא הוזנה מסחא");
    if (last_row.tech == "") messages.push("לא נבחר אפיון טכני ");
    if (last_row.creator_num == "") messages.push("לא נבחר מספר יצרן");
    if (last_row.recomended_provider == "") messages.push("לא נבחר ספק מומלץ");
    if (last_row.quantity == "") messages.push("לא הוזנה כמות פריטים");
    if (last_row.measurement == "") messages.push("לא נבחרה יחידת מידה");
    if (last_row.price == "") messages.push("לא הוזן מחיר ליח");

    if (messages.length >= 1) {
      let error_list = messages.map((error) => <li>{error}</li>);
      return system_Notification("error", "שגיאת הזנה", <ul>{error_list}</ul>);
    }
    setItems(
      re_order_the_key([
        ...items,
        {
          key: items.length,
          item_number: items.length + 1,
          desc: "",
          iaf_num: "",
          tech: "",
          creator_num: "",
          creator_name: "",
          recomended_provider: "",
          quantity: "",
          measurement: "",
          price: "",
        },
      ])
    );
  }

  function do_action(action) {
    switch (action) {
      case "delete":
        setItems(
          re_order_the_key(
            items.filter((item) => !selected_items.includes(item.key)),
            "item_number"
          )
        );
        setSelected([]);
    }
  }
  return (
    <React.Fragment>
      <Row justify="end" gutter={[0, 0]}>
        <Col span={18}>
          <Order_details />
        </Col>
        <Col span={6}>
          <Details />
        </Col>
        <Col span={18}>
          <SellItem
            sell_Items={items}
            add_item={addItem}
            selected_keys={selected_items}
            items_selected={(items) => {
              setSelected(items);
            }}
            new_value={(row) => {
              let index = items.findIndex(
                (current_row) => current_row.key == row.key
              );
              let new_items = items.slice();
              new_items[index] = row;
              setItems(new_items);
            }}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={5}>
          <Actions on_delete={do_action.bind(this, "delete")}></Actions>
        </Col>
        <Col span={13}>
          <Bid bids={bids} />
        </Col>
        <Col span={1}></Col>
        <Col span={10}>
          <AcceptTable />
        </Col>
      </Row>
    </React.Fragment>
  );
}
