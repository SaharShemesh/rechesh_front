import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  AcceptTable,
  Details,
  Order_details,
  Actions,
  SellItem,
  Bid,
} from "./sections";
import { useHistory } from "react-router";
import { Row, Col, Button, message } from "antd";
import "./css/order.css";
import {
  get_random,
  preaper_object_to_server,
  re_order_the_key,
} from "../../helpers/procedures";
import { system_Notification } from "../../helpers/notification";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { add_order, createOrder } from "../../../features/order/orderSlice";
import { unwrapResult } from "@reduxjs/toolkit";
//memos
export default function New_order() {
  let history = useHistory();
  let details = useRef({});
  let iaf_nums = useSelector((state) => state.iaf_nums.items);
  let dispatch = useDispatch();
  let details_form = useRef();
  let create_order = (details) => {
    details_form.current.submit_Form();
    //details.current = { ...details.current, status: 1 };
    // dispatch(add_order({ order: details.current }));
    // console.log("DETAILS: ", details);
    // history.push("/my-orders");
  };
  //sections state
  let [bids, setBids] = useState({});
  let [items, setItems] = useState([]);
  let [selected_items, setSelected] = useState([]);
  let validate_items = () => {
    let messages = [];
    let last_row = items[items.length - 1];
    if (last_row.desc == "") messages.push("לא הוזן תיאור פריט");
    else if (!isNaN(last_row.desc)) messages.push("תיאור פריט חייב להיות טקסט");
    if (last_row.iaf_num == "") messages.push("לא הוזנה מסחא");
    if (last_row.tech == "") messages.push("לא נבחר אפיון טכני ");
    if (last_row.creator_num == "") messages.push("לא נבחר מספר יצרן");
    if (last_row.recomended_provider == "") messages.push("לא נבחר ספק מומלץ");
    if (last_row.quantity == "") messages.push("לא הוזנה כמות פריטים");
    if (last_row.measurement == "") messages.push("לא נבחרה יחידת מידה");
    if (last_row.price == "") messages.push("לא הוזן מחיר ליח");
    if (messages.length >= 1) {
      let error_list = messages.map((error) => <li>{error}</li>);
      system_Notification("error", "שגיאת הזנה", <ul>{error_list}</ul>);
      return false;
    }
    return true;
  };
  function addItem({ Iaf_num = "", desc = "" }) {
    if (items.length >= 1) {
      if (!validate_items()) return;
    }
    setItems(
      re_order_the_key([
        ...items,
        {
          key: items.length,
          item_number: items.length + 1,
          desc,
          Iaf_num,
          technical_spec: "",
          creator_num: "",
          creator_name: "",
          recommended_provider: "",
          quantity: "",
          measurement: "",
          price: "",
          item_sign: get_random(items.map((item) => item.item_sign)),
        },
      ])
    );
  }
  let providers = {};
  let getBid = (bid) => {
    let new_bids = bids;
    Object.keys(bid).forEach((item_sign) => {
      if (Object.keys(new_bids).find((sign) => sign == item_sign))
        new_bids[item_sign] = { ...new_bids[item_sign], ...bid[item_sign] };
      else {
        new_bids[item_sign] = {
          desc: items.find((sell) => sell.item_sign == item_sign).desc,
          quantity: items.find((sell) => sell.item_sign == item_sign).quantity,
          ...bid[item_sign],
        };
      }
    });
    //fill loop
    setBids({ ...new_bids });
  };
  let do_action = function (action) {
    console.log(selected_items);
    console.log(
      re_order_the_key(
        items.filter((item) => !selected_items.includes(item.key)),
        "item_number"
      )
    );
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
  };
  return (
    <React.Fragment>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name == "order_details") {
            if (items.length == 0) {
              return message.error("הוסף פריטים להזמנה זו");
            }
            if (items.length > 0 && validate_items()) {
              console.log(values);
              let details = preaper_object_to_server(values);
              let sell_items = items.map(
                ({
                  technical_spec,
                  desc,
                  quantity,
                  price,
                  creator_num,
                  measurement,
                  recommended_provider,
                  Iaf_num,
                }) => ({
                  technical_spec: technical_spec.id == 1 ? true : false,
                  desc,
                  quantity,
                  price,
                  creator: creator_num.id,
                  measurement: measurement.id,
                  provider: recommended_provider.id,
                  Iaf_num: Iaf_num.id,
                })
              );
              console.log(
                JSON.stringify({
                  Order: { ...details, Sell_items: sell_items },
                })
              );
              dispatch(
                createOrder({ Order: { ...details, Sell_items: sell_items } })
              )
                .then((x) => history.push("/"))
                .catch((ee) => console.log("error", ee));
            }
          }
        }}
      >
        <Row justify="end" gutter={[0, 0]}>
          <Col span={19}>
            <Order_details
              ref={details_form}
              add_item={({ iaf_num, desc }) => {
                let { ["id"]: id, ["iaf_num"]: name } = iaf_nums.find(
                  (num) => num.id == iaf_num
                );
                addItem({ Iaf_num: { name, id }, desc });
              }}
            />
          </Col>
          <Col span={5}>
            <Details />
          </Col>
          <Col span={18}>
            <SellItem
              sell_Items={items}
              add_item={addItem}
              selected_keys={selected_items}
              items_selected={(items) => {
                console.log("items:", items);
                setSelected(items);
              }}
              new_value={(row) => {
                console.log(row);
                let index = items.findIndex(
                  (current_row) => current_row.key == row.key
                );
                let new_items = items.slice();
                new_items[index] = row;
                console.log("new_items:", new_items);
                setItems(new_items);
              }}
              new_bid={getBid}
            />
          </Col>
          <Col span={1}></Col>
          <Col span={5}>
            <Actions
              mode="new"
              on_delete={do_action.bind(this, "delete")}
            ></Actions>
          </Col>
        </Row>
        <Row>
          <Col span={5} pull={2}>
            <Button onClick={create_order.bind(this, details)}>
              צור הזמנה
            </Button>
          </Col>
        </Row>
      </Form.Provider>
    </React.Fragment>
  );
}
