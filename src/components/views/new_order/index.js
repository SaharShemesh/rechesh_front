import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  AcceptTable,
  Details,
  Order_details,
  Actions,
  SellItem,
  Bid,
} from "./sections";
import { Update_StatusOrder } from "./screens";
import { useHistory } from "react-router";
import { Row, Col, Button } from "antd";
import "./css/order.css";
import { get_random, re_order_the_key } from "../../helpers/procedures";
import { system_Notification } from "../../helpers/notification";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { add_order } from "../../../features/order/orderSlice";
//memos


let ActionsMemo = Actions;

//dummy bids
// let object = {
//   1: {
//     desc: "פריט ראשון",
//     1: {
//       name: "ספק ראשון",
//       amount: 5,
//       price: 300,
//       providing_time: "1-3-2022",
//     },
//     2: {
//       name: "ספק שני",
//       amount: 53,
//       price: 300,
//       providing_time: "1-3-2022",
//     },
//     3: {
//       name: "ספק מס 3",
//       amount: 42,
//       price: 300,
//       providing_time: "1-3-2022",
//     },
//   },
//   2: {
//     desc: "פריט שני",
//     1: {
//       name: "ספק ראשון",
//       amount: 51,
//       price: 300,
//       providing_time: "1-3-2022",
//     },
//     2: {
//       name: "ספק שני",
//       amount: 53,
//       price: 300,
//       providing_time: "1-3-2022",
//     },
//     3: {
//       name: "ספק מס 3",
//       amount: 55,
//       price: 300,
//       providing_time: "1-3-2022",
//     },
//   },
// };
export default function New_order() {

  let [screensStatus, setStatus] = useState({
    Update_StatusOrder: false,
  });
  
  let openScreen = (screen_type, e) => {
    setStatus({ [screen_type]: true });
  };
  
  let cancelScreen = (screen_type) => {
    setStatus({ [screen_type]: false });
  };
  let history = useHistory();
  let details = useRef({});
  let orders = useSelector((state) => state.orders.items);
  console.log(orders);
  let dispatch = useDispatch();
  let create_order = (details) => {
    details.current = { ...details.current, status: 1 };
    dispatch(add_order({ order: details.current }));
    console.log("DETAILS: ", details);
    history.push("/my-orders");
  };
  //sections state
  let [bids, setBids] = useState({});
  let [items, setItems] = useState([]);
  let [selected_items, setSelected] = useState([]);

  function addItem() {
    if (items.length >= 1) {
      let messages = [];
      let last_row = items[items.length - 1];
      if (last_row.desc == "") messages.push("לא הוזן תיאור פריט");
      else if (!isNaN(last_row.desc))
        messages.push("תיאור פריט חייב להיות טקסט");
      if (last_row.iaf_num == "") messages.push("לא הוזנה מסחא");
      if (last_row.tech == "") messages.push("לא נבחר אפיון טכני ");
      if (last_row.creator_num == "") messages.push("לא נבחר מספר יצרן");
      if (last_row.recomended_provider == "")
        messages.push("לא נבחר ספק מומלץ");
      if (last_row.quantity == "") messages.push("לא הוזנה כמות פריטים");
      if (last_row.measurement == "") messages.push("לא נבחרה יחידת מידה");
      if (last_row.price == "") messages.push("לא הוזן מחיר ליח");

      if (messages.length >= 1) {
        let error_list = messages.map((error) => <li>{error}</li>);
        return system_Notification(
          "error",
          "שגיאת הזנה",
          <ul>{error_list}</ul>
        );
      }
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
          recommended_provider: "",
          quantity: "",
          measurement: "",
          price: "",
          item_sign: get_random(items.map((item) => item.item_sign)),
        },
      ])
    );
  }

  let getBid = (bid) => {
    
    let new_bids = bids;
    Object.keys(bid).forEach((item_sign) => {
      if (Object.keys(new_bids).find((sign) => sign == item_sign))
        new_bids[item_sign] = { ...new_bids[item_sign], ...bid[item_sign] };
      else
        new_bids[item_sign] = {
          desc: items.find((sell) => sell.item_sign == item_sign).desc,
          quantity: items.find((sell) => sell.item_sign == item_sign).quantity,
          ...bid[item_sign],
        };
    });
    console.log(new_bids);
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
            details.current = values;
            console.log(values);
          }
        }}
      >
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
            <ActionsMemo
              on_delete={do_action.bind(this, "delete")}
            ></ActionsMemo>
          </Col>
          <Col span={13}>
            <Bid bids={bids} />
          </Col>
          <Col span={1}></Col>
          <Col span={10}>
            <AcceptTable />
          </Col>
        </Row>
        <Row>
          <Col span={5} pull={2}>
            <Button onClick={create_order.bind(this, details)}>
              צור הזמנה
            </Button>
            <Button
            
        onClick={openScreen.bind(this, "Update_StatusOrder")}
      >
              עדכן סטאטוס
              </Button>
              <Update_StatusOrder
        show={screensStatus.Update_StatusOrder}
        onCancel={cancelScreen.bind(this, "Update_StatusOrder")}
      />
          </Col>
        </Row>
      </Form.Provider>
    </React.Fragment>
  );
}
