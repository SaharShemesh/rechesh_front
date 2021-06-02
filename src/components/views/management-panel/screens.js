import { Form, Table, Input } from "antd";
import React, { useState } from "react";
import { FormModal } from "../../helpers/Modal";
import { UserOutlined } from "@ant-design/icons";
import { isNumber } from "../../../helpers/validators";
let valueInsertion = (row, key, e) => {};
export function Update_bag(props) {
  //<FolderOpenOutlined />
  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 22 },
    name: "control-hooks",
  };

  const columns = [
    {
      title: "מספר תיק",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "תיאור תיק",
      dataIndex: "age",
      key: "age",
    },
    {
      title: 'סה"כ תקציב',
      dataIndex: "age",
      key: "age",
    },
    {
      title: "תקציב שממומש מחושב",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "תקציב שממומש טיוב",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "תקציב שנותר",
      dataIndex: "age",
      key: "age",
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

  return (
    <FormModal
      header="עדכון תיקי משיכה"
      buttonText="עדכן"
      show={props.show}
      onCancel={props.onCancel}
    >
      <Form layout="inline">
        <Form.Item
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
        <Form.Item label="תיאור תיק" name="bag_desc">
          <Input type="text" placeholder="תיאור תיק" />
        </Form.Item>
      </Form>

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
      title: "ערוץ רכש",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
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
      title: "הזנה",
      dataIndex: "age",
      key: "age",
    },
  ];

  const data = [
    {
      key: "1",
      name: "אסמכתא",
      age: "fdsfds",
    },
    {
      key: "2",
      name: "משיכה",
    },
    {
      key: "2",
      name: "דרישה",
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
      title: "שם הספק",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
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
      title: "טלפון",
      dataIndex: "phone",
      key: "phone",
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

  return (
    <FormModal
      header="עדכון ספקים"
      buttonText="עדכן"
      show={props.show}
      onCancel={props.onCancel}
    >
      <Form layout="inline">
        <Form.Item label=" שם ספק" name="providerName">
          <Input placeholder="שם ספק" />
        </Form.Item>
        <Form.Item label="התמחות" name="proffession">
          <Input type="text" placeholder="התמחות" />
        </Form.Item>
        <Form.Item
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
      </Form>

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

export function Screen_Permission(props) {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
    name: "control-hooks",
  };

  const columns = [
    {
      title: "מספר אישי",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "שם משתמש",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "סוג הרשאות",
      dataIndex: "age",
      kefy: "age",
    },
  ];

  const data = [
    {
      key: "1",
      name: "אסמכתא",
      age: "fdsfds",
    },
    {
      key: "2",
      name: "משיכה",
    },
    {
      key: "2",
      name: "דרישה",
    },
  ];
  let [form] = Form.useForm();
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
