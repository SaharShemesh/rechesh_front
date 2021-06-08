import React, { useState } from "react";
import { DropDown, DisabledInput } from "../../helpers/fields";
import { Row, Col, Form, Input, Button, Table, Modal } from "antd";
import { Filter } from "./fltr";
import {Link, useHistory} from "react-router-dom";
import {
  PlayCircleOutlined,
  CloseOutlined, SearchOutlined ,ApartmentOutlined,
  FileOutlined, 
} from "@ant-design/icons";
export default function Management_panel() {
  let [form] = Form.useForm();
  let rows = [];
  const history = useHistory();
  let new_order = () => {
    history.push("/new-order")
}
  // main_orders.foreach((mn) => {
  //   mn.Orders.foreach(
  //     ({ erp_order, erp_req, invc, need, paka, pulling_bag }) => {
  //       rows.push({ erp_order, erp_req, invc, need, paka, pulling_bag });
  //     }
  //   );
  // });
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
      align:"right",
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
        
      <h1 style={{ textAlign: "center" }}>ברוך הבא למערכת רכש 108!  </h1>
      
      <Row>
        <Col span = {20}> </Col>
          <Col span = {2}>    
        <Button type="primary">סגירה/פתיחת מערכות תקציב</Button>
        </Col>
        </Row>
     
          
      <h2 style={{ textAlign: "center" }}>שורת עדכונים חדשים</h2>
      
      <React.Fragment>
      <Form name="advanced_search" form={form} className="ant-advanced-search-form">
        <Row>
          <Col span = {5}></Col>
          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="req_num"
              label="מספר בקשה:"
            >
             <DropDown items={[
            { id: 1, name: "84729384" },
            { id: 2, name: "42839749" },
          ]} header="מספר בקשה" />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="ordering"
              label="מזמין:"
            >
              <DropDown items={[
            { id: 1, name: "דוד" },
            { id: 2, name: "אלכס" },
          ]} header="מזמין" />
            </Form.Item>
          </Col>
          <Col span = {5}></Col>
        </Row>
        <Row>
        <Col span = {5}></Col>
          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="sub_order"
              label="תת הזמנה:"
            >
              <DropDown items={[
            { id: 1, name: "84729384" },
            { id: 2, name: "42839749" },
          ]} header="תת הזמנה" />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="order_bim"
              label="בימ מזמין:"
            >
              <DropDown items={[
            { id: 1, name: "לא" },
            { id: 2, name: "נשר" },
          ]} header="בימ מזמין" />
            </Form.Item>
          </Col>
          <Col span = {5}></Col>
        </Row>
        <Row>
        <Col span = {5}></Col>
          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="priority"
              label="עדיפות:"
            >
              <DropDown items={[
            { id: 1, name: "מפת דרכים" },
            { id: 2, name: "7200" },
            { id: 3, name: "אמלח פשוט" },
            { id: 2, name: "רגיל" },
          ]} header="עדיפות" />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="treating_factor"
              label="גורם מטפל:"
            >
              <DropDown items={[
            { id: 1, name: "דוד" },
            { id: 2, name: "אלכס" },
          ]} header="גורם מטפל" />
            </Form.Item>
          </Col>
          <Col span = {5}></Col>

          <Col span={8}></Col>
        </Row>
        <Row>
        <Col span = {5}></Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="type"
              label="סוג:"
            >
              <DropDown items={[
            { id: 1, name: "A" },
            { id: 2, name: "B" },
            { id: 3, name: "משימה" },
            { id: 4, name: "אחזקה בקליטת משימה" },
            { id: 5, name: "קומ" },
            { id: 6, name: "הנדסת שדה וחוליות" },
          ]} header="סוג" />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="ERP_demand"
              label="מס דרישה-ERP:"
            >
              <DropDown items={[
            { id: 1, name: "84729384" },
            { id: 2, name: "42839749" },
          ]} header="מס דרישה - ERP" />
            </Form.Item>
          </Col>
          <Col span = {5}></Col>

          <Col span={8}></Col>
        </Row>
        <Row>
        <Col span = {5}></Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="pulling_bag"
              label="תיק משיכה:"
            >
              <DropDown items={[
            { id: 1, name: "84729384" },
            { id: 2, name: "42839749" },
          ]} header="תיק משיכה" />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="ERP_num"
              label="מס' הזמנה - ERP:"
            >
              <DropDown items={[
            { id: 1, name: "84729384" },
            { id: 2, name: "42839749" },
          ]} header="מס הזמנה - ERP" />
            </Form.Item>
          </Col>
         

        
        </Row>
        <Row>
        <Col span = {5}></Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="status"
              label="סטטוס:"
            >
              <DropDown items={[
            { id: 1, name: "ממתין לאישור" },
            { id: 2, name: "ממתין לשליחה" },
            { id: 3, name: "נשלח לספקים" },
            { id: 4, name: "סבב אישורים" },
            { id: 5, name: "ממתין לפתיחת דרישה" },
            { id: 6, name: "נפתחה דרישה ב-ERP" },
            { id: 7, name: "ממתין לאישור ספק ההזמנה" },
            { id: 8, name: "ממתין להגעת הפריט לבסיס או לאיסוף" },
            { id: 9, name: "ממתין לאיסוף ממחלקת רכש" },
            { id: 10, name: "טיפול חריגים" },
            { id: 11, name: "הזמנה טופלה" },
            { id: 12, name: "הזמנה טופלה" },
          ]} header="סטטוס" />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="num"
              label="מס חשבונית:"
            >
              <DropDown items={[
            { id: 1, name: "84729384" },
            { id: 2, name: "42839749" },
          ]} header="מס חשבונית" />
            </Form.Item>
          </Col>

        </Row>
        <Row>
        <Col span = {5}></Col>
          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="paka"
              label="פקע:"
            >
              <DropDown items={[
            { id: 1, name: "84729384" },
            { id: 2, name: "42839749" },
          ]} header="פקע" />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="desc"
              label="תיאור בקשה:"
            >
              <Input className="system-field"></Input>
            </Form.Item>
          </Col>
          <Col span={8}></Col>

        </Row>
        
        <Row>
        <Col span = {12}> </Col>
          <Col span = {12}>    
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Col>
        <Col span = {24}> </Col>
                </Row>
             
        <Table pagination={false} dataSource={data} columns={columns}/>
          <div style={{ textAlign: "center" }}> <Button onClick={new_order.bind(this)} type="primary" >פתיחת בקשה חדשה</Button>  </div>
       
      </Form>
    </React.Fragment>

    </>
      
  );

}
