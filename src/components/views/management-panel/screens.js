import { Form, Table, Input, Button, Popconfirm } from "antd";
import React, { useState } from "react";
import { FormModal } from "../../helpers/Modal";
import { UserOutlined } from "@ant-design/icons";
import { isNumber } from "../../../helpers/validators";
import { useSelector, useDispatch } from "react-redux";
import { DropDown } from "../../helpers/fields";
import { unwrapResult } from "@reduxjs/toolkit";
import { update_users } from "../../../features/collections/userSlice";
import { create_providers, new_provider, update_provider, update_providers } from "../../../features/collections/providerSlice";
import { update_constant, update_constants } from "../../../features/collections/constantSlice";
export function Update_bag(props) {
  let pulling_bags = useSelector((state) => state.pulling_bags.items);

  const data = pulling_bags.map((pulling_bag, index) => ({
    key: index,
    id: pulling_bag.bag_id,
    bag_number: pulling_bag.bag_number,
    bag_description: pulling_bag.bag_description,
    sum_budget: pulling_bag.sum_budget,
    calculated_finished_budget: pulling_bag.calculated_finished_budget,
    tiov_budget: pulling_bag.tiov_budget,
    budget_left: pulling_bag.sum_budget - pulling_bag.tiov_budget,
  }));
  let [rows, set_rows] = useState(data);

  const handleDelete = (key) => {
    const rows = [...rows];
    this.setState({
      rows: rows.filter((item) => item.key !== key),
    });
  };

  let valueInsertion = (index, attribute, e) => {
    let new_data = rows.slice();
    new_data[index][attribute] = e.target.value;
    set_rows(new_data);
  };
  //<FolderOpenOutlined />
  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 22 },
    name: "control-hooks",
  };
  const add_bag = function () {
    let new_bag = {
      key: rows.length,
      bag_number: "",
      bag_description: "",
      sum_budget: 0,
      calculated_finished_budget: "0",
      tiov_budget: 0,
    };
    new_bag.budget_left = new_bag.sum_budget - new_bag.tiov_budget;
    //console.log([]...rows,new_bag});
    set_rows([...rows, new_bag]);
  };
  /*const delete_last = function(){
    rows.pop();
    set_rows([...rows]);
  }*/
  const columns = [
    {
      align: "right",
      title: "מספר תיק",
      dataIndex: "bag_number",
      key: "bag_number",
      render: (number, row, index) => (
        <Input
          type="number"
          value={number}
          onChange={valueInsertion.bind(this, index, "bag_number")}
        />
      ),
    },
    {
      align: "right",
      title: "תיאור תיק",
      dataIndex: "bag_description",
      key: "bag_description",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onChange={valueInsertion.bind(this, index, "bag_description")}
          />
        );
      },
    },
    {
      align: "right",
      title: "סהכ תקציב",
      dataIndex: "sum_budget",
      key: "sum_budget",
      render(value, row, index) {
        return (
          <Input
            type="number"
            value={value}
            onInput={valueInsertion.bind(this, index, "sum_budget")}
          />
        );
      },
    },
    {
      align: "right",
      title: "תקציב שממומש מחושב",
      dataIndex: "calculated_finished_budget",
      key: "calculated_finished_budget",
      render(value, row, index) {
        return (
          <Input
            type="number"
            value={value}
            onInput={valueInsertion.bind(
              this,
              index,
              "calculated_finished_budget"
            )}
          />
        );
      },
    },
    {
      align: "right",
      title: "תקציב שממומש טיוב",
      dataIndex: "tiov_budget",
      key: "tiov_budget",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onInput={valueInsertion.bind(this, row, "tiov_budget")}
          />
        );
      },
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
            value={value}
            onInput={valueInsertion.bind(this, row, "budget_left")}
          />
        );
      },
    },
    {
      align: "right",
      title: "מחיקה",
      dataIndex: "deleteRow",
      render: (_, row) => (
        <Popconfirm
          title="האם אתה בטוח?"
          onConfirm={() => handleDelete(row.key)}
        >
          <a>מחק</a>
        </Popconfirm>
      ),
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
        <Form.Item label=" מס' תיק" name="bag_num">
          <Input placeholder="מספר תיק" />
        </Form.Item>

        <Form.Item label="תיאור תיק" name="bag_desc">
          <Input type="text" placeholder="תיאור תיק" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={add_bag}>
            הוסף תיק
          </Button>
        </Form.Item>
        <Form.Item>
          {/* <Button type="primary" onClick={delete_last}>מחק תיק</Button> */}
        </Form.Item>
      </Form>
      <div>
        <Table
          columns={columns}
          dataSource={rows}
          pagination={false}
          bordered
        />
      </div>
    </FormModal>
  );
}

export function Update_notificationData(props) {
  let dispatch = useDispatch();
  let constants = useSelector((state) => state.constants.items);

  let save_constants = async () => {
    console.log(JSON.stringify(constants));
    try {
      let r = await dispatch(update_constants(constants));
      unwrapResult(r);
    } catch (e) {
      console.log("error", e);
    } finally {
      props.onCancel();
    }
  };

  let valueInsertion = async (index, attribute, e) => {
   dispatch(update_constant({
      value:e.target.value,
      index,
      attribute
    }));
  };

  console.log(constants);
  const columns = [
    {
      align: "right",
      title: "ערוץ רכש",
      dataIndex: "type",
      key: "type",
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
            onChange={valueInsertion.bind(this, index, "condition")}
          />
        );
      },
    },
    {
      align: "right",
      title: "הזנה",
      dataIndex: "price_value",
      key: "price_value",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onChange={valueInsertion.bind(this, index, "price_value")}
          />
        );
      },
    },
  ];


  return (
      <FormModal
      header="עדכון התראות"
      show={props.show}
      onCancel={props.onCancel}
      onOk={save_constants}
    >
      <Table
        columns={columns}
        dataSource={constants}
        pagination={false}
        bordered
      />
    </FormModal>
  );
}

export function Update_provider(props) {
  let providers = useSelector((state) => state.providers.items);
  console.log("providers:",providers);
  let dispatch = useDispatch();
  //<FolderOpenOutlined />
  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 22 },
    name: "control-hooks",
  };

  let save_providers = async () => {
    console.log(JSON.stringify(providers));
    try {
      let r = await Promise.all([dispatch(update_providers(providers.slice().filter(provider => provider.provider_id)))]);
      unwrapResult(r);
    } catch (e) {
      console.log("error", e);
    } finally {
      props.onCancel();
    }
  };

  const add_provider = async function () {
    await dispatch(new_provider());
  };
  let valueInsertion = async (index, attribute, e) => {
    await dispatch(update_provider({
      value:e.target.value,
      index,
      attribute
    }));
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const columns = [
    {
      width: "15%",
      align: "right",
      title: "שם הספק",
      dataIndex: "provider_name",
      key: "name",
      render: (text,row,index) =>  <Input type="text" value={text} onChange={valueInsertion.bind(this, index, "provider_name")} />,
    },
    {
      width: "auto",
      align: "right",
      title: "התמחויות",
      dataIndex: "profession",
      key: "profession",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onChange={valueInsertion.bind(this, index, "profession")}
          />
        );
      },
    },
    {
      width: "12%",
      align: "right",
      title: "טלפון",
      dataIndex: "phones",
      key: "phones",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onChange={valueInsertion.bind(this, index, "phones")}
          />
        );
      },
    },
    {
      width: "11%",
      align: "right",
      title: "פקס",
      dataIndex: "fax",
      key: "fax",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onChange={valueInsertion.bind(this, index, "fax")}
          />
        );
      },
    },
    {
      width: "10%",
      align: "right",
      title: "איש קשר",
      dataIndex: "contact_name",
      key: "contact_name",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onChange={valueInsertion.bind(this, index, "contact_name")}
          />
        );
      },
    },
    {
      width: "12%",
      align: "right",
      title: "כתובת החברה/איסוף",
      dataIndex: "adress",
      key: "adress",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onChange={valueInsertion.bind(this, index, "adress")}
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
            onChange={valueInsertion.bind(this, index, "mail")}
          />
        );
      },
    },
    {
      width: "15%",
      align: "right",
      title: "אתר אינטרנט",
      dataIndex: "site_adress",
      key: "site_adress",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            onChange={valueInsertion.bind(this, index, "site_adress")}
          />
        );
      },
    },
    {
      width: "10%",
      align: "right",
      title: "מס ספק משהבט",
      dataIndex: "provider_num",
      key: "num",
      render(value, row, index) {
        return (
          <Input
            type="number"
            value={value}
            onChange={valueInsertion.bind(this, index, "provider_num")}
          />
        );
      },
    },
  ];

  return (
    <FormModal
      header="עדכון ספקים"
      show={props.show}
      onCancel={props.onCancel}
      onOk={save_providers}
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
          </Form.Item>
          <Form.Item>
          <Button type="primary" onClick={add_provider}>
            הוסף ספק
          </Button>
        </Form.Item> 
      </Form>

      <Form {...layout}>
        <Table
          columns={columns}
          dataSource={providers}
          pagination={false}
          bordered
        />
      </Form>
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
      title: "תיאור הפריט",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "כמות",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "מחיר ליחידה",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "מועד אספקה",
      dataIndex: "age",
      key: "dateArrive",
    },
  ];

  const data = [
    {
      key: "1",
      name: "תיאור 1",
      age: "",
    },
    {
      key: "2",
      name: "תיאור 2",
    },
  ];

  return (
    <FormModal
      header="הצעת מחיר חדשה - הזמנה מספר"
      show={props.show}
      onCancel={props.onCancel}
    >
      <Form {...layout}>
        <Form.Item label=" שם ספק">
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
  let users = useSelector((state) => state.users.items);
  let user_permissions = useSelector((state) => state.user_permissions.items);
  let dispatch = useDispatch();
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
    name: "control-hooks",
  };
  let save_users = async () => {
    let users = rows.map((row) => ({
      id: row.id,
      soldier_id: row.soldier_id,
      id_num: row.idf_num,
      first_name: row.username.split(" ")[0],
      last_name: row.username.split(" ")[1],
      permission_id: row.permission.id,
    }));
    console.log(JSON.stringify(users));
    try {
      let r = await dispatch(update_users(users));
      unwrapResult(r);
    } catch (e) {
      console.log("error", e);
    } finally {
      props.onCancel();
    }
  };
  let valueInsertion = (index, attribute, e) => {
    let new_data = rows.slice();
    new_data[index][attribute] = e.target.value;
    set_rows(new_data);
  };
  let update_permission = function (index, value) {
    let new_data = rows.slice();
    new_data[index].permission = value;
    set_rows(new_data);
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
                message: "מספר אישי חייב להיות מספר",
              },
            ]}
            value={value}
            onInput={valueInsertion.bind(this, index, "idf_num")}
          />
        );
      },
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
            onChange={valueInsertion.bind(this, index, "username")}
          />
        );
      },
    },
    {
      title: "הרשאה",
      dataIndex: "permission",
      key: "permission",
      render: (value, row, index) => (
        <DropDown
          value={value}
          onChange={update_permission.bind(this, index)}
          items={user_permissions.map((perm) => ({
            name: perm.permission,
            id: perm.permission_id,
          }))}
        />
      ),
    },
  ];
  console.log("users = ", users)
  const data = users.map((user) => ({
    soldier_id: user.soldier_id,
    id: user.id,
    idf_num: user.Soldier.id_num,
    username: user.Soldier.first_name + " " + user.Soldier.last_name,
    permission: {
      name: user.Permission.permission,
      id: user.Permission.permission_id,
    },
  }));
  let [rows, set_rows] = useState(data);
  let [idf_num, set_num] = useState("");
  console.log(
    rows.map((row) => row.idf_num.includes(form.getFieldValue("idf_num")))
  );
  return (
    <FormModal
      header="מסך הרשאות"
      show={props.show}
      onCancel={props.onCancel}
      onOk={save_users}
    >
      <Input
        placeholder=" מספר אישי "
        value={idf_num}
        onChange={(e) => set_num(e.target.value)}
        suffix={<UserOutlined className="site-form-item-icon" />}
      />
      {JSON.stringify(form.getFieldValue("idf_num"))}
      <Table
        columns={columns}
        dataSource={rows.filter((row) => row.idf_num.includes(idf_num))}
        pagination={false}
        bordered
      />
    </FormModal>
  );
}
// .filter(bag => bag.id);  :for put
// .filter(bag => !bag.id) : for post
