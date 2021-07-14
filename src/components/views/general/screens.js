import { Form, Table, Input, AutoComplete, message } from "antd";
import React, { useEffect, useState } from "react";
import { FormModal } from "../../helpers/Modal";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { DropDown } from "../../helpers/fields";

export function New_bid(props) {
  let current_date = new Date();
  let day = ("0" + current_date.getDate()).slice(-2);
  let month = ("0" + (current_date.getMonth() + 1)).slice(-2);
  let items = props.sell_Items.map(
    ({ desc, quantity, price, item_sign }, index) => ({
      desc,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      getting_date: current_date.getFullYear() + "-" + month + "-" + day,
      key: index,
      item_sign,
    })
  );
  let [sell_items, set_item] = useState(items);
  useEffect(() => {
    if (items) set_item(items);
  }, [props.sell_Items]);
  let providers_collection = useSelector((state) => state.providers.items);
  //<FolderOpenOutlined />
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
    name: "control-hooks",
  };
  let update_items = (index, attribute, e) => {
    let new_items = sell_items.concat();
    new_items[index][attribute] = e.target.value;
    set_item(new_items);
  };
  const columns = [
    {
      title: "תיאור הפריט",
      dataIndex: "desc",
      key: "desc",
      render: (text) => text,
    },
    {
      title: "כמות",
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => text,
    },
    {
      title: "מחיר ליחידה",
      dataIndex: "price",
      key: "price",
      render: (price, record, index) => (
        <Input
          type="number"
          onChange={update_items.bind(this, index, "price")}
          value={price}
          min="0"
        />
      ),
    },
    {
      title: "מועד אספקה",
      dataIndex: "getting_date",
      key: "getting_date",
      render: (date, record, index) => {
        return (
          <Input
            type="date"
            value={date}
            onChange={update_items.bind(this, index, "getting_date")}
          />
        );
      },
    },
  ];
  let [selected_provider, setSelected] = useState({ name: "", id: -1 });
  providers_collection = providers_collection.map((provider) => ({
    name: provider.provider_name,
    id: provider.provider_id,
  }));
  let [providers, setProviders] = useState(providers_collection);
  let changeProvider = (provider) => {
    setSelected(provider);
  };
  let saveBid = () => {
    if (selected_provider.id == -1) return message.error("בחר ספק");
    let selected_collection = props.selected_providers_ids || [];
    setProviders(
      providers.filter((provider) => provider.id != selected_provider.id)
    );
    let BID = sell_items.map((item) => ({
      [item.item_sign]: {
        [selected_provider.id]: {
          name: selected_provider.name,
          id: selected_provider.id,
          price: parseFloat(item.price),
          providing_time: item.getting_date,
        },
      },
    }));
    setSelected({ name: "", id: -1 });
    BID = Object.assign({}, ...BID);

    props.onCreation(BID);
  };
  return (
    <FormModal
      header="הוסף הצעת מחיר חדשה"
      show={props.show}
      onCancel={() => {
        set_item(items);
        props.onCancel();
      }}
      onOk={saveBid}
    >
      <Form {...layout}>
        <Form.Item label=" שם ספק">
          <DropDown
            header="יש לבחור ספק רצוי"
            items={providers}
            value={selected_provider}
            onChange={changeProvider}
          />
        </Form.Item>
        <Form.Item label="פריטים">
          <Table
            columns={columns}
            dataSource={sell_items}
            pagination={false}
            bordered
          />
        </Form.Item>
      </Form>
    </FormModal>
  );
}
