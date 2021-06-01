import { Form, Table, Input } from "antd";
import { FormModal } from "../../helpers/Modal";
import { UserOutlined } from "@ant-design/icons";
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
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="מספר תיק" />
        </Form.Item>
        <Form.Item
          label="תיאור תיק"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input type="password" placeholder="תיאור תיק" />
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
      render: (text) => <a>{text}</a>,
    },
    {
      title: "תנאי",
      dataIndex: "age",
      key: "age",
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
      dataIndex: "age",
      key: "age",
    },
    {
      title: "טלפונים",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "פקס",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "איש קשר",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "כתובת החברה/איסוף",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "מייל",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "אתר אינטרנט",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "מס ספק משהבט",
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
      header="עדכון ספקים"
      buttonText="עדכן"
      show={props.show}
      onCancel={props.onCancel}
    >
      <Form layout="inline">
        <Form.Item
          label=" שם ספק"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="שם ספק" />
        </Form.Item>
        <Form.Item
          label="התמחות"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input type="password" placeholder="התמחות" />
        </Form.Item>
        <Form.Item
          label="מספר ספק משהבט"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input type="password" placeholder="תיאור תיק" />
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
    <FormModal header="מסך הרשאות" show={props.show} onCancel={props.onCancel}>
      <Form {...layout}>
        <Form.Item
          name="soldiers"
          label=" חיפוש"
          rules={[
            {
              required: true,
              message: "יש להזין",
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
