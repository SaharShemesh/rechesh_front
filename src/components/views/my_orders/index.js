import React, { useState } from "react";

import { Row, Col, Form, Input, Button, Table, Modal } from "antd";
import { DropDown, DisabledInput } from "../../helpers/fields";
import {
  PlayCircleOutlined,
  CloseOutlined, SearchOutlined ,ApartmentOutlined,
  FileOutlined, 
} from "@ant-design/icons";
import { map_bid_to_table } from "../../helpers/procedures";

import { Card } from "antd";


export default function Management_panel() {
  let [form] = Form.useForm();
  let [screensStatus, setStatus] = useState({
    Update_bag: false,
    Update_notification: false,
    Update_provider: false,
    Screen_Permission: false,
  });

  let gridStyle = {
    width: "33.33%",
    textAlign: "center",
  };

  let openScreen = (screen_type, e) => {
    setStatus({ [screen_type]: true });
  };

  let cancelScreen = (screen_type) => {
    setStatus({ [screen_type]: false });
  };


  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 22 },
    name: "control-hooks",
  };

  let columns = [
    {
      align: "right",
      title: 'מס בקשה',
      dataIndex: 'name',
      key: 'name',
      render: text => <p>{text}</p>,
    },
    {
      align:"right",
      title: 'תיאור בקשה',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      align:"right",
      title: 'פק"ע',
      dataIndex: 'paka',
      key: 'paka',
    },
    {
      align:"right",
      title: 'עדיפות',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      align:"right",
      title: 'סוג',
      dataIndex: 'type',
      key: 'type',
    },
    {
      align:"right",
      title: 'תיק משיכה',
      dataIndex: 'pulling_bag',
      key: 'pulling_bag',
    },
    {
      align:"right",
      title: 'מחיר',
      dataIndex: 'price',
      key: 'price',
    },
    {
      align:"right",
      title: 'מזמין',
      dataIndex: 'ordering',
      key: 'ordering',
    },
    {
      align:"right",
      title: 'בי"מ מזמין',
      dataIndex: 'order_bim',
      key: 'order_bim',
    },
    
    
  ]

  const data = [
    {
      key: '1',
      name: 'תיאור 1',
      desc: "תיאור",
      paka: "פקע",
      priority: "עדיפות",
      type: "סוג",
      pulling_bag: "תיק משיכה",
      price: "מחיר",
      ordering: "מזמין",
      order_bim:"בימ מזמין"
    },
    {
      key: '2',
      name: 'תיאור 2',
      
    },
  ]
  
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
             
        <Table pagination={false} dataSource={data} columns={columns}/>;

        <h3 style={{ textAlign: "center" }}> <Button type="primary">פתיחת בקשה חדשה</Button>  </h3>

       
      </Form>
    </React.Fragment>

    </>
      
  );
}



