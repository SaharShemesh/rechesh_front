import React, { useState } from "react";

import { Row, Col, Form, Input, Button, Table, Modal, Spin } from "antd";
import { Filter } from "./fltr";
import { useHistory } from "react-router";

export default function Management_panel() {
  let rows = [];
  // main_orders.foreach((mn) => {
  //   mn.Orders.foreach(
  //     ({ erp_order, erp_req, invc, need, paka, pulling_bag }) => {
  //       rows.push({ erp_order, erp_req, invc, need, paka, pulling_bag });
  //     }
  //   );
  // });
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
      dataIndex: "name",
      key: "name",
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
