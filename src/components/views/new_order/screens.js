import { Form, Table, Input, AutoComplete } from "antd";
import React, { useEffect, useState } from "react";
import { FormModal } from "../../helpers/Modal";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export function New_bid(props) {
  let current_date = new Date();
  let day = ("0" + current_date.getDate()).slice(-2);
  let month = ("0" + (current_date.getMonth() + 1)).slice(-2);
  let items = props.sell_Items.map(({ desc, quantity, price }, index) => ({
    desc,
    quantity: parseInt(quantity),
    price: parseFloat(price),
    getting_date: current_date.getFullYear() + "-" + month + "-" + day,
    key: index,
  }));
  let [sell_items, set_item] = useState(items);
  console.log(items);
  useEffect(() => {
    if (items) set_item(items);
  }, [props.sell_Items]);
  let providers = useSelector((state) => state.providers.items);
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

  let [selected_provider, setSelected] = useState({ label: "", value: "" });
  let providers_collection = providers.map((provider) => ({
    label: provider.provider_name,
    value: provider.provider_id,
  }));
  return (
    <FormModal
      header="הצעת מחיר חדשה - הזמנה מספר"
      show={props.show}
      onCancel={() => {
        set_item(items);
        props.onCancel();
      }}
    >
      <Form {...layout}>
        <Form.Item label=" שם ספק">
          <AutoComplete
            filterOption={(inputValue, option) =>
              option.label.includes(inputValue)
            }
            value={selected_provider.label}
            options={providers.map((provider) => ({
              label: provider.provider_name,
              value: provider.provider_id,
            }))}
            onChange={(valu) => {
              let provider_option = providers_collection.find(
                (provider) => provider.value == valu
              );
              if (!provider_option)
                provider_option = { value: -1, label: valu };
              setSelected(provider_option);
            }}
            placeholder="ספקים מוגדרים"
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
