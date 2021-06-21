import { Row, Col, Divider, Form, Table, Input } from "antd";
import React, { useState } from "react";
import { FormModal } from "../../helpers/Modal";
import { UserOutlined } from "@ant-design/icons";
import { isNumber } from "../../../helpers/validators";
let valueInsertion = (row, key, e) => { };
export function Update_bag(props) {
  //<FolderOpenOutlined />
  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 22 },
    name: "control-hooks",
  };

  const columns = [
    {
      align: "right",
      title: "מספר תיק",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      align: "right",
      title: "תיאור תיק",
      dataIndex: "desc",
      key: "desc",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      }
    },
    {
      align: "right",
      title: 'סהכ תקציב',
      dataIndex: "budget",
      key: "budget",
      render(value, row, index) {
        return (
          <Input
            type="text"
            rules={[
              {
                validator: isNumber,
                message: "סהכ תקציב חייב להיות מספר"
              }
            ]}
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      }
    },
    {
      align: "right",
      title: "תקציב שממומש מחושב",
      dataIndex: "calculated_budget1",
      key: "calculated_budget1",
      render(value, row, index) {
        return (
          <Input
            type="text"
            rules={[
              {
                validator: isNumber,
                message: "תקציב חייב להיות מספר"
              }
            ]}
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      }
    },
    {
      align: "right",
      title: "תקציב שממומש טיוב",
      dataIndex: "calculated_budget2",
      key: "calculated_budget2",
      render(value, row, index) {
        return (
          <Input
            type="text"
            rules={[
              {
                validator: isNumber,
                message: "תקציב חייב להיות מספר"
              }
            ]}
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      }
    },
    {
      align: "right",
      title: "תקציב שנותר",
      dataIndex: "budget_left",
      key: "budget_left",
      render(value, row, index) {
        return (
          <Input
            type="text"
            rules={[
              {
                validator: isNumber,
                message: "תקציב חייב להיות מספר"
              }
            ]}
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      }
    },
  ];

  const data = [
    {
      key: "1",
      name: "תיאור 1",
      desc: "תיאור תיק",
      budget: "סהכ תקציב",
      calculated_budget1: "תקציב שממומש מחושב",
      calculated_budget2: "תקציב שממוש טיוב",
      budget_left: "תקציב שנותר"
    },
    {
      key: "2",
      name: "תיאור 2",
    },
  ];

  return (
    <FormModal
      header="עדכון תיקי משיכה"
      buttonText="עדכן"
      show={props.show}
      onCancel={props.onCancel}
    >
      <Row>
        <Col span={8} >
          <Form.Item
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 16,
            }}
            label=" מס' תיק"
            name="bag_num"
            rules={[
              {
                validator: isNumber,
                message: "חייב להיות מספר",
              },
            ]}
          >
            <Input placeholder="מספר תיק" />
          </Form.Item>
        </Col>
        <Col span={8} >

          <Form.Item
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 16,
            }}
            label="תיאור תיק" name="bag_desc">
            <Input type="text" placeholder="תיאור תיק" />
          </Form.Item>
        </Col>

      </Row>

      <Form {...layout}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
      </Form>
    </FormModal>
  );
}

export function Update_notificationData(props) {
  const columns = [
    {
      align: "right",
      title: "ערוץ רכש",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      align: "right",
      title: "תנאי",
      dataIndex: "condition",
      key: "condition",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      },
    },
    {
      align: "right",
      title: "הזנה",
      dataIndex: "desc",
      key: "desc",
    },
  ];

  const data = [
    {
      key: "1",
      name: "אסמכתא",
      desc: "הזנה",
    },
    {
      key: "2",
      name: "משיכה",
      desc: "הזנה"
    },
    {
      key: "2",
      name: "דרישה",
      desc: "הזנה"
    },
  ];

  return (
    <FormModal
      header="עדכון נתוני התראות תקציב"
      show={props.show}
      onCancel={props.onCancel}
    >
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </FormModal>
  );
}

export function Update_provider(props) {
  //<FolderOpenOutlined />
  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 22 },
    name: "control-hooks",
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const columns = [
    {
      width: "7%",
      align: "right",
      title: "שם הספק",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      width: "10%",
      align: "right",
      title: "התמחויות",
      dataIndex: "proffession",
      key: "proffession",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      },
    },
    {
      width: "10%",
      align: "right",
      title: "טלפון",
      dataIndex: "phone",
      key: "phone",
      render(value, row, index) {
        return (
          <Input
            type="text"
            rules={[
              {
                validator: isNumber,
                message: "טלפון חייב להיות מספר",
              },
            ]}
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      },
    },
    {
      width: "10%",
      align: "right",
      title: "פקס",
      dataIndex: "fax",
      key: "fax",
      render(value, row, index) {
        return (
          <Input
            type="number"
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      },
    },
    {
      width: "10%",
      align: "right",
      title: "איש קשר",
      dataIndex: "contact",
      key: "contact",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      },
    },
    {
      width: "15%",
      align: "right",
      title: "כתובת החברה/איסוף",
      dataIndex: "adress",
      key: "adress",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      },
    },
    {
      width: "15%",
      align: "right",
      title: "מייל",
      dataIndex: "mail",
      key: "mail",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      },
    },
    {
      width: "15%",
      align: "right",
      title: "אתר אינטרנט",
      dataIndex: "website",
      key: "website",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      },
    },
    {
      width: "5%",
      align: "right",
      title: "מס ספק משהבט",
      dataIndex: "provider_number",
      key: "provider_number",
      render(value, row, index) {
        return (
          <Input
            type="number"
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "תיאור 1",
      age: "fdsfds",
    },
    {
      key: "2",
      name: "תיאור 2",
    },
  ];
  let [form] = Form.useForm();
  return (
    <FormModal
      header="עדכון ספקים"
      buttonText="עדכן"
      show={props.show}
      onCancel={props.onCancel}
    >
      <Row>
        <Col span={6} >
          <Form.Item
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 16,
            }}
            label=" שם ספק" name="providerName">
            <Input placeholder="שם ספק" />
          </Form.Item>
        </Col>
        <Col span={6} >
          <Form.Item
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 16,
            }}
            label="התמחות" name="proffession">
            <Input type="text" placeholder="התמחות" />
          </Form.Item>
        </Col>
        <Col span={8} >
          <Form.Item
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            label="מספר ספק משהבט"
            name="providerNum"
            rules={[
              {
                validator: isNumber,
                message: "חייב להיות מספר",
              },
            ]}
          >
            <Input type="text" placeholder="תיאור תיק" />
          </Form.Item>
        </Col>

      </Row>
      <Divider> </Divider>
      <Row>
        <Form {...layout}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
        </Form>
      </Row>
    </FormModal>
  );
}

export function New_bid(props) {
  //<FolderOpenOutlined />
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
    name: "control-hooks",
  };

  const columns = [
    {
      title: 'תיאור הפריט',
      dataIndex: 'name',
      key: 'name',
      render: text => <p>{text}</p>,
    },
    {
      title: 'כמות',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'מחיר ליחידה',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'מועד אספקה',
      dataIndex: 'age',
      key: 'dateArrive',
    },

  ]

  const data = [
    {
      key: '1',
      name: 'תיאור 1',
      age: ''
    },
    {
      key: '2',
      name: 'תיאור 2',

    },
  ]

  return (
    <FormModal header="הצעת מחיר חדשה - הזמנה מספר" show={props.show} onCancel={props.onCancel}>
      <Form {...layout}>
        <Form.Item label=" שם ספק" >
          <Input
            placeholder=" בחירה מרשימה "
            suffix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item label="פריטים">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered

          />
        </Form.Item>
      </Form>
    </FormModal>
  );
}

export function Screen_Permission(props) {
  let [form] = Form.useForm();
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
    name: "control-hooks",
  };

  const columns = [
    {
      title: "מספר אישי",
      dataIndex: "idf_num",
      key: "idf_num",
      render(value, row, index) {
        return (
          <Input
            type="text"
            rules={[
              {
                validator: isNumber,
                message: "מספר אישי חייב להיות מספר"
              }
            ]}
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      }
    },
    {
      title: "שם משתמש",
      dataIndex: "username",
      key: "username",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onInput={valueInsertion.bind(this, row, "")}
          />
        );
      }
    },
    {
      title: "סוג הרשאות",
      dataIndex: "permissions",
      kefy: "permissions",
    },
  ];

  const data = [
    {
      key: "1",
    },
    {
      key: "2",
    },
    {
      key: "2",
    },
  ];

  return (

    <FormModal header="מסך הרשאות" show={props.show} onCancel={props.onCancel}>
      <Form
        form={form}
        onValuesChange={() => console.log(form.getFieldsValue())}
        {...layout}
      >
        <Form.Item
          name="soldiers"
          label=" חיפוש"
          rules={[
            {
              validator: isNumber,
              message: "מספר אישי חייב להיות מספר",
            },
            {
              len: 7,
              message: "מספר אישי חייב להיות באורך 7",
            },
          ]}
        >
          <Input
            placeholder=" מספר אישי "
            suffix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item label="טבלת משתמשים">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
        </Form.Item>
      </Form>
    </FormModal>
  );
}
