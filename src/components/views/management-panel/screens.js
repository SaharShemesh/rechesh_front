import { Form, Table, Input } from "antd";
import { FormModal } from "../../helpers/Modal";
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
