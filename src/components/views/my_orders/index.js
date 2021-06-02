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

  const columns = [
    {
      title: 'מס בקשה',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'תיאור בקשה',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'פק"ע',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'עדיפות',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'סוג',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'תיק משיכה',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'מחיר',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'מזמין',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'בי"מ מזמין',
      dataIndex: 'age',
      key: 'age',
    },
    
    
  ]

  const data = [
    {
      key: '1',
      name: 'תיאור 1',
      age: 'fdsfds'
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
             <DropDown items={["ישיר", "עקיף"]} header="מספר בקשה" />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="customer"
              label="מזמין:"
            >
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
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
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
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
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
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
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
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
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
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
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="ERP_demand"
              label="מס' דרישה-ERP:"
            >
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
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
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="ERP_num"
              label="מס' הזמנה-ERP:"
            >
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
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
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="num"
              label="מס' חשבונית:"
            >
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
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
              <DropDown items={["ישיר", "עקיף"]} header="DD" />
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
             
        <Table pagination={false} dataSource={data} columns={columns} />;

        <h3 style={{ textAlign: "center" }}> <Button type="primary">פתיחת בקשה חדשה</Button>  </h3>

       
      </Form>
    </React.Fragment>

    </>
      
  );
}



