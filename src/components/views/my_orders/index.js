import React, { useState } from "react";
import { DropDown, DisabledInput } from "../../helpers/fields";
import { Row, Col, Form, Input, Button, Table, Modal } from "antd";
import { Filter } from "./fltr";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MyOrders_View() {
  let [form] = Form.useForm();
  let new_order = () => {
    history.push("/new-order");
  };
  // main_orders.foreach((mn) => {
  //   mn.Orders.foreach(
  //     ({ erp_order, erp_req, invc, need, paka, pulling_bag }) => {
  //       rows.push({ erp_order, erp_req, invc, need, paka, pulling_bag });
  //     }
  //   );
  // });
  let orders = useSelector((state) => state.orders.items);
  let update_order = (index, attribute, e) => {
    let orders = orders_table.concat();
    orders[index][attribute] = e.target.value;
    setOrders(orders);
  };
  let rows = [];
  orders.forEach((order) => {
    console.log(order.Orders);
    order.Orders.forEach((sub_order, index) => {
      let order_price = sub_order.Sell_items.reduce(
        (prev, sell_item) => prev + sell_item.price * sell_item.quantity,
        0
      );
      console.log(order_price);
      rows.push({
        order_id: {
          order: order.id,
          sub_order: sub_order.id,
          index,
        },
        need: sub_order.need,
        paka: sub_order.Paka ? sub_order.Paka.paka_number : "אין",
        priority: sub_order.Priority ? sub_order.Priority.priority_name : "אין",
        type: sub_order.Paka_type ? 5 : "אין",
        Pulling_bag: sub_order.Pulling_bag
          ? sub_order.Pulling_bag.bag_description
          : "אין",
        price: order_price,
        Customer: order.Customer.first_name + "-" + order.Customer.id_num,
        bim: order.Customer.user.Location.bim.bim_name,
        treating_factor: "גורם",
        erp_request: sub_order.erp_req ? sub_order.erp_req : "",
        erp_order: sub_order.erp_order ? sub_order.erp_order : "",
        erp_invoice: sub_order.invc ? sub_order.invc : "",
        status: sub_order.Status.id,
        status_days: 0,
        days: Math.round(
          (Date.parse(new Date().toString("mm-dd-yy")) -
            Date.parse(sub_order.start_date)) /
            86400000
        ),
      });
    });
  });
  let [orders_table, setOrders] = useState(rows);
  let history = useHistory();
  const columns = [
    {
      title: "מס בקשה",
      dataIndex: "order_id",
      key: "order_id",
      render: (text) => (
        <Link to={"edit-ordr/" + text.order + "/" + (text.index + 1)}>
          <p dir="ltr">{text.order + "/ " + (text.index + 1)}</p>
        </Link>
      ),
    },
    {
      title: "תיאור בקשה",
      dataIndex: "need",
      key: "need",
      render: (text) => <p>{text}</p>,
    },
    {
      align: "right",
      title: 'פק"ע',
      dataIndex: "paka",
      key: "paka",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "עדיפות",
      dataIndex: "priority",
      key: "priority",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "סוג",
      dataIndex: "type",
      key: "type",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "תיק משיכה",
      dataIndex: "Pulling_bag",
      key: "Pulling_bag",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "מחיר",
      dataIndex: "price",
      key: "price",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "מזמין",
      dataIndex: "Customer",
      key: "Customer",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "בים מזמין",
      dataIndex: "bim",
      key: "bim",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "גורם מטפל",
      dataIndex: "treating_factor",
      key: "treating_factor",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "מס בקשה erp",
      dataIndex: "erp_request",
      key: "erp_request",
      render: (text, row, index) => (
        <Input
          type="number"
          onChange={update_order.bind(this, index, "erp_request")}
          value={text}
        />
      ),
    },
    {
      title: "מס הזמנה erp",
      dataIndex: "erp_order",
      key: "name",
      render: (text, row, index) => (
        <Input
          type="number"
          onChange={update_order.bind(this, index, "erp_order")}
          value={text}
        />
      ),
    },
    {
      title: "מספר חשבונית",
      dataIndex: "erp_invoice",
      key: "erp_invoice",
      render: (text, row, index) => (
        <Input
          type="number"
          onChange={update_order.bind(this, index, "erp_invoice")}
          value={text}
        />
      ),
    },
    {
      title: "סטטוס",
      dataIndex: "status",
      key: "status",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "ימים בסטטוס",
      dataIndex: "status_days",
      key: "status_days",
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'סה"כ ימים',
      dataIndex: "days",
      key: "days",
      render: (text) => <p>{text}</p>,
    },
  ];

  const data = [];
  return (
    <>
      <h1 style={{ textAlign: "center" }}>ברוך הבא למערכת רכש 108! </h1>
      <Row>
        <Col span={20}> </Col>
        <Col span={2}>
          <Button type="primary">סגירה/פתיחת מערכות תקציב</Button>
        </Col>
      </Row>
      <h2 style={{ textAlign: "center" }}>שורת עדכונים חדשים</h2>
      <Filter />
      <Table
        pagination={false}
        locale={{ emptyText: <p>אין הזמנות</p> }}
        dataSource={orders_table}
        columns={columns}
      />
      ;
      <div style={{ textAlign: "center" }}>
        <Button
          type="primary"
          onClick={() => {
            history.push("/new-order");
          }}
        >
          פתיחת בקשה חדשה
        </Button>
      </div>
    </>
  );
}
