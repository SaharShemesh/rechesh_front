import { Form, Table, Input,Button, Popconfirm } from "antd";
import React, { useState } from "react";
import { FormModal } from "../../helpers/Modal";
import { UserOutlined } from "@ant-design/icons";
import { isNumber } from "../../../helpers/validators";
import {useSelector, useDispatch} from "react-redux";
import { DropDown } from "../../helpers/fields";
import { unwrapResult } from "@reduxjs/toolkit";
import {update_users} from "../../../features/collections/userSlice";
import {update_providers} from "../../../features/collections/providerSlice";

export function Update_bag(props) {
  let pulling_bags = useSelector(state => state.pulling_bags.items);
  
  const data = pulling_bags.map( (pulling_bag,index) => ({
    key:index,
    id: pulling_bag.bag_id,
    bag_number: pulling_bag.bag_number,
    bag_description: pulling_bag.bag_description,
    sum_budget: pulling_bag.sum_budget,
    calculated_finished_budget: pulling_bag.calculated_finished_budget,
    tiov_budget: pulling_bag.tiov_budget,
    budget_left: pulling_bag.sum_budget - pulling_bag.tiov_budget,
  }))
  let [rows,set_rows] = useState(data); 

  const handleDelete = (key) => {
    const rows = [...this.state.rows];
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
  const add_bag = function() {
      let new_bag = {
        key:rows.length,
        bag_number: "",
        bag_description: "",
        sum_budget: 0,
        calculated_finished_budget: "0",
        tiov_budget: 0,
      };
      new_bag.budget_left =  new_bag.sum_budget - new_bag.tiov_budget;
      //console.log([]...rows,new_bag});
      set_rows([...rows,new_bag]);
  }
  /*const delete_last = function(){
    rows.pop();
    set_rows([...rows]);
  }*/
  const columns = [
    {
      align:"right",
      title: "מספר תיק",
      dataIndex: "bag_number",
      key: "bag_number",
      render: (number, row, index) => <Input type="number" value={number} onChange={valueInsertion.bind(this, index, "bag_number")}  />,
    },
    {
      align:"right",
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
      }  
    },
    {
      align:"right",
      title: 'סהכ תקציב',
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
      }  
    },
    {
      align:"right",
      title: "תקציב שממומש מחושב",
      dataIndex: "calculated_finished_budget",
      key: "calculated_finished_budget",
      render(value, row, index) {
        return (
          <Input
            type="number"
            value={value}
            onInput={valueInsertion.bind(this, index, "calculated_finished_budget")}
          />
        );
      }  
    },
    {
      align:"right",
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
      } 
    },
    {
      align:"right",
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
      render: (_, row) =>
          <Popconfirm title="האם אתה בטוח?" onConfirm={() => this.handleDelete(row.key)}>
            <a>מחק</a>
          </Popconfirm>
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
          name="bag_num">
          <Input placeholder="מספר תיק" />
        </Form.Item>

        <Form.Item label="תיאור תיק" 
        name="bag_desc">
          <Input type="text" placeholder="תיאור תיק" />
        </Form.Item>
        <Form.Item>
        <Button type="primary" onClick={add_bag}>הוסף תיק</Button>
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
  let constants = useSelector((state) => state.constants.items).map((constant) => ({type: constant.type, condition: constant.condition, price_value: constant.price_value}));
  console.log(constants);
  const columns = [
    {
      align:"right",
      title: "ערוץ רכש",
      dataIndex: "type",
      key: "type",
      render: (text) => <p>{text}</p>,
    },
    {
      align:"right",
      title: "תנאי",
      dataIndex: "condition",
      key: "condition",
      render: (text) => <p>{text}</p>,
    },
    {
      align:"right",
      title: "הזנה",
      dataIndex: "price_value",
      key: "price_value",
      render(value, row, index) {
        return (
          <Input
            type="text"
            value={value}
            // onChange={valueInsertion.bind(this, row, "")}
          />
        );
      },
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
      name: "אסמכתא",
      desc:"הזנה"
    },
    {
      key: "3",
      name: "אסמכתא",
      desc:"הזנה"
    },
    {
      key: "4",
      name: "משיכה",
      desc:"הזנה"
    },
    {
      key: "5",
      name: "דרישה",
      desc:"הזנה"
    },
    {
      key: "6",
      name: "דרישה",
      desc:"הזנה"
    },
  ];

  return (
    <FormModal
      header="עדכון נתוני התראות תקציב"
      show={props.show}
      onCancel={props.onCancel}
    >
      <Table columns={columns} dataSource={constants} pagination={false} bordered />
    </FormModal>
  );
}

export function Update_provider(props) {
  let providers = useSelector(state => state.providers.items);
  let dispatch = useDispatch();
  //<FolderOpenOutlined />
  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 22 },
    name: "control-hooks",
  };

  let save_providers = async () => {
    let providers = rows.map(row => ({
      id: row.provider_id,
      name: row.provider_name,
      num: row.provider_num,
      profession: row.profession,
      phones: row.phones,
      fax: row.fax,
      contact_name: row.contact_name,
      adress: row.adress,
      mail: row.mail,
      site_adress: row.site_adress
    })); 
    console.log(JSON.stringify(providers));
   try{
 let r = await dispatch(update_providers(providers));
 unwrapResult(r)
   }
   catch(e){
     console.log("error",e);
   }
   finally{
     props.onCancel();
   }
}

  const add_provider = function() {
    let new_provider = {
      key:rows.length,
      name: "",
      profession: "",
      phones: "",
      fax: "",
      contact_name: "",
      adress: "",
      mail: "",
      site_adress: "",
      num: 0,
    };
    set_rows([...rows,new_provider]);
  }
  let valueInsertion = (index, attribute, e) => {
    let new_data = rows.slice();
    new_data[index][attribute] = e.target.value;
    set_rows(new_data);
 };


  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  

  const columns = [
    {
      width: "5%",
      align: "right",
      title: "שם הספק",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      width:"12%",
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
      width:"12%",
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
      width:"11%",
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
      width:"10%",
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
      width:"12%",
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
      width:"15%",
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
      width:"15%",
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
      width:"10%",
      align: "right",
      title: "מס ספק משהבט",
      dataIndex: "num",
      key: "num",
      render(value, row, index) {
        return (
          <Input
            type="number"
            value={value}
            onChange={valueInsertion.bind(this, index, "num")}
          />
        );
      },
    },
  ];
  console.log(providers);
  const data = providers.map( provider => ({
    id: provider.provider_id,
    name: provider.provider_name,
    num: provider.provider_num,
    profession: provider.profession,
    phones: provider.phones,
    fax: provider.fax,
    contact_name: provider.contact_name,
    adress: provider.adress,
    mail: provider.mail,
    site_adress: provider.site_adress
  }))
  let [rows,set_rows] = useState(data); 

  
  return (
    <FormModal header="עדכון ספקים" show={props.show} onCancel={props.onCancel} onOk={save_providers}>
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
        <Form.Item>
          <Button type="primary" onClick={add_provider}>הוסף ספק</Button>
        </Form.Item>
      </Form>

      <Form {...layout}>
        <Table
          columns={columns}
          dataSource={rows}
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
  let users = useSelector(state => state.users.items);
  let user_permissions = useSelector(state => state.user_permissions.items);
  let dispatch = useDispatch();
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
    name: "control-hooks",
  };
  let save_users = async () => {
         let users = rows.map(row => ({
            id:row.id,
            soldier_id:row.soldier_id,
            id_num:row.idf_num,
            first_name:row.username.split(" ")[0],
            last_name:row.username.split(" ")[1],
            permission_id: row.permission.id
         })); 
         console.log(JSON.stringify(users));
        try{
      let r = await dispatch(update_users(users));
      unwrapResult(r)
        }
        catch(e){
          console.log("error",e);
        }
        finally{
          props.onCancel();
        }
    }
  let valueInsertion = (index, attribute, e) => {
    let new_data = rows.slice();
    new_data[index][attribute] = e.target.value;
    set_rows(new_data);
 };
 let update_permission = function(index,value){
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
                message: "מספר אישי חייב להיות מספר"
              }
            ]}
            value={value}
            onInput={valueInsertion.bind(this, index, "idf_num")}
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
            onChange={valueInsertion.bind(this, index, "username")}
          />
        );
      } 
    },
    {
      title: "הרשאה",
      dataIndex: "permission",
      key: "permission",
      render:(value, row, index) => <DropDown value={value} onChange={update_permission.bind(this,index)} items={user_permissions.map(perm => ({
        name:perm.permission,
        id:perm.permission_id
      }))} />
    },
  ];
  const data = users.map(user => ({
    soldier_id:user.soldier_id,
    id:user.id,
    idf_num:user.soldier.id_num,
    username:user.soldier.first_name + " "+ user.soldier.last_name,
    permission: {
      name: user.Permission.permission,
      id:user.Permission.permission_id
    }
  }));
 let [rows,set_rows] = useState(data); 
 let [idf_num,set_num] = useState("");
 console.log(rows.map(row => row.idf_num.includes(form.getFieldValue("idf_num"))));
  return (
    
    <FormModal header="מסך הרשאות" show={props.show} onCancel={props.onCancel} onOk={save_users}>
          <Input
            placeholder=" מספר אישי "
            value={idf_num}
            onChange={(e) => set_num(e.target.value)}
            suffix={<UserOutlined className="site-form-item-icon" />}
          />
        {JSON.stringify(form.getFieldValue("idf_num"))}
          <Table
            columns={columns}
            dataSource={rows.filter(row => row.idf_num.includes(idf_num))}
            pagination={false}
            bordered
          />

    </FormModal>
  );
}
// .filter(bag => bag.id);  :for put
// .filter(bag => !bag.id) : for post