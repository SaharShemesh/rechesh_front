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
    setItems([
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
    ]);
  }

  function do_action(action) {
    switch (action) {
      case "delete":
        console.log(
          re_order_the_key(
            items.filter((item) => !selected_items.includes(item.key)),
            "item_number"
          )
        );
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
