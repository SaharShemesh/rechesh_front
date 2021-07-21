import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AcceptTable,
  Details,
  Order_details,
  Actions,
  SellItem,
  Bid,
} from "../general/sections";
import { useHistory, useParams } from "react-router";
import { Row, Col, Button, message } from "antd";
import "../new_order/css/order.css";
import {
  get_changes,
  get_random,
  re_order_the_key,
  isEmpty,
} from "../../helpers/procedures";
import { system_Notification } from "../../helpers/notification";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  add_order,
  createOrder,
  create_sell_items,
  update_General_Details,
  update_order,
  update_sell_items,
} from "../../../features/order/orderSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { General_details_mapper, Items_mapper } from "../../helpers/mappers";
//memos
export default function Edit_order(props) {
  let history = useHistory();
  let details = useRef({});
  let iaf_nums = useSelector((state) => state.iaf_nums.items);
  let dispatch = useDispatch();
  let details_form = useRef();
  let create_order = (details) => {
    details_form.current.submit_Form();
  };
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
  //sections state
  let [bids, setBids] = useState({});
  let [items, setItems] = useState([]);
  let [selected_items, setSelected] = useState([]);
  let order = useSelector((state) => state.orders.items);
  let params = useParams();
  order = order.find((order) => order.id == parseInt(params.order)).Orders[
    parseInt(params.sub_order) - 1
  ];
  let order_details = General_details_mapper.server_to_client(order);
  let sell_items = [];
  if (order.Sell_items) {
    sell_items = Items_mapper.server_to_client(order.Sell_items);
  }
  console.log(sell_items);
  useEffect(() => {
    let rows = re_order_the_key(
      sell_items.map((sell) => getItem_format(sell)),
      "item_number"
    );
    setItems(rows);
    console.log("items:", items);
  }, []);

  function getItem_format({
    Iaf_num = "",
    desc = "",
    technical_spec = "",
    creator_num = "",
    creator_name = "",
    recommended_provider = "",
    quantity = "",
    measurement = "",
    price = "",
    id = 0,
  }) {
    let item = {
      key: items.length,
      item_number: items.length + 1,
      desc,
      Iaf_num,
      technical_spec,
      creator_num,
      creator_name,
      recommended_provider,
      quantity,
      measurement,
      price,
      item_sign: get_random(items.map((item) => item.item_sign)),
    };
    if (id) item.id = id;
    return item;
  }
  function addItem({
    Iaf_num = "",
    desc = "",
    technical_spec = "",
    creator_num = "",
    creator_name = "",
    recommended_provider = "",
    quantity = "",
    measurement = "",
    price = "",
    id = 0,
  }) {
    if (items.length >= 1) {
      if (!validate_items()) return;
    }
    let item = getItem_format({
      Iaf_num,
      desc,
      technical_spec,
      creator_num,
      creator_name,
      recommended_provider,
      quantity,
      measurement,
      price,
      id,
    });
    setItems(re_order_the_key([...items, item]));
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
    console.log(new_bids);
    setBids({ ...new_bids });
  };
  let do_action = function (action) {
    // console.log(
    //   re_order_the_key(
    //     items.filter((item) => !selected_items.includes(item.key)),
    //     "item_number"
    //   )
    // );
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
        onFormFinish={async (name, { values, forms }) => {
          if (name == "order_details") {
            console.log(values);
            console.log(order_details);
            console.log(get_changes(order_details, values));

            if (items.length > 0 && validate_items()) {
              let general_details = get_changes(order_details, values);
              console.log(
                General_details_mapper.client_to_server(general_details)
              );
              let sell_items_to_server = Items_mapper.client_to_server(
                items.map((item) => ({ ...item }))
              );
              sell_items_to_server.forEach((item) => {
                delete item.key;
                delete item.item_number;
                delete item.item_sign;
              });
              let updated_items = sell_items_to_server.filter(
                (item) => item.id
              );
              let new_items = sell_items_to_server.filter((item) => !item.id);
              try {
                if (
                  !isEmpty(general_details) ||
                  !isEmpty(updated_items) ||
                  !isEmpty(new_items)
                ) {
                  if (!isEmpty(general_details)) {
                    let res = await dispatch(
                      update_General_Details({
                        general_details:
                          General_details_mapper.client_to_server(
                            general_details
                          ),
                        main_order_id: params.order,
                        order_id: order.id,
                      })
                    );
                    unwrapResult(res);
                  }
                  if (!isEmpty(updated_items)) {
                    let update = await dispatch(
                      update_sell_items({
                        order_id: order.id,
                        main_id: parseInt(params.order),
                        items: updated_items,
                      })
                    );
                    unwrapResult(update);
                  }
                  if (!isEmpty(updated_items)) {
                    let update = await dispatch(
                      update_sell_items({
                        order_id: order.id,
                        main_id: parseInt(params.order),
                        items: updated_items,
                      })
                    );
                    unwrapResult(update);
                  }

                  if (!isEmpty(new_items)) {
                    let add = await dispatch(
                      create_sell_items({
                        order_id: order.id,
                        main_id: parseInt(params.order),
                        items: new_items,
                      })
                    );
                    unwrapResult(add);
                  }
                  history.push("/");
                } else {
                  message.warning("לא נעשו שינויים בהזמנה!");
                }
              } catch (e) {
                console.log(e);
              } finally {
              }
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
              order_details={order_details}
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
                setSelected(items);
              }}
              new_value={(row) => {
                let index = items.findIndex(
                  (current_row) => current_row.key == row.key
                );
                let new_items = items.slice();
                new_items[index] = row;
                //update bid
                let updated_bids = { ...bids };
                Object.keys(updated_bids).forEach((item_sign) => {
                  let item = new_items.find(
                    (item) => item.item_sign == item_sign
                  );
                  if (item.desc != updated_bids[item_sign].desc)
                    updated_bids[item_sign].desc = item.desc;
                });
                setBids(updated_bids);
                setItems(new_items);
              }}
              new_bid={getBid}
            />
          </Col>
          <Col span={1}></Col>
          <Col span={5}>
            <Actions
              mode="exist"
              on_delete={do_action.bind(this, "delete")}
            ></Actions>
          </Col>
        </Row>
        <Row>
          <Col span={14}>
            {!isEmpty(bids) && (
              <Bid
                bids={bids}
                delete_bid={(prov_id) => {
                  let updated_bids = { ...bids };
                }}
                check_bid={(prov_id) => {}}
              />
            )}
          </Col>
          <Col span={10} style={{ marginTop: "62px" }}>
            <AcceptTable />
          </Col>
        </Row>
        <Row>
          <Col span={5} pull={2}>
            <Button onClick={create_order.bind(this, details)}>
              עדכן הזמנה
            </Button>
          </Col>
        </Row>
      </Form.Provider>
    </React.Fragment>
  );
}
