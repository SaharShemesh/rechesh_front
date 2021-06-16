import React, { useState } from "react";
import { DropDown, DisabledInput } from "../../helpers/fields";
import { Row, Col, Form, Input, Button, Table, Modal } from "antd";
import { Filter } from "./fltr";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

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
  console.log(orders);
  let rows = orders.map((order, id) => ({
    order_id: id + 1,
    need: order.desc,
    paka: order.paka,
    priority: order.priority,
    type: order.Paka_type,
    Pulling_bag: order.pulling_bag ? order.pulling_bag.name : "",
    price: 5000,
    Customer: "דוד",
    bim: "נשר",
    treating_factor: "גורם",
    erp_request: 3,
    erp_order: 5,
    erp_invoice: 10,
    status: 2,
    status_days: 3,
    days: 90,
  }));
  let history = useHistory();
  const columns = [
    {
      title: "מס בקשה",
      dataIndex: "order_id",
      key: "order_id",
      render: (text) => <p>{text}</p>,
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
      render: (text) => <p>{text}</p>,
    },
    {
      title: "מס הזמנה erp",
      dataIndex: "erp_order",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "מספר חשבונית",
      dataIndex: "erp_invoice",
      key: "erp_invoice",
      render: (text) => <p>{text}</p>,
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
        dataSource={rows}
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
