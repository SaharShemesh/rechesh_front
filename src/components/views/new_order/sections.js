import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Table, message } from "antd";
import {New_bid} from "../management-panel/screens";
import { DropDown, DisabledInput } from "../../helpers/fields";
import {
  PlayCircleOutlined,
  CloseOutlined,
  ApartmentOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { map_bid_to_table } from "../../helpers/procedures";
import { isNumber } from "../../../helpers/validators";
import { useSelector } from "react-redux";
export function Order_details(props) {
  const [form] = Form.useForm();
  let procument_types = useSelector((state) => state.procument_types.items);
  let pulling_bags = useSelector((state) => state.pulling_bags.items);
  console.log(procument_types);
  return (
    <React.Fragment>
      <Form
        name="order_details"
        form={form}
        className="ant-advanced-search-form"
        onValuesChange={(values) => console.log(form.getFieldsValue())}
      >
        <Row>
          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              rules={[
                {
                  required: true,
                  message: "חובה להזין סוג הזמנה",
                },
              ]}
              name="order_type"
              label="סוג הזמנה:"
            >
              <DropDown
                items={[
                  { id: 1, name: "רכש בהקפה" },
                  { id: 2, name: "רכש במשיכה" },
                  { id: 3, name: "רכש בדרישה" },
                ]}
                header="סוג הזמנה"
                valueUpdated={(value) => console.log(value)}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              rules={[
                {
                  required: true,
                  message: "יש להזין פקע",
                },
                {
                  validator: isNumber,
                  message: "פקע חייבת להיות מספר",
                },
                {
                  max: 9,
                  message: "פקע ארוכה מדי",
                },
                {
                  min: 8,
                  message: "פקע קצרה מדי",
                },
              ]}
              name="paka"
              label="פקע:"
            >
              <Input className="system-field"></Input>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              rules={[
                {
                  required: true,
                  message: "חובה להזין גורם מקצועי",
                },
              ]}
              name="Professional_at"
              label="גורם מקצועי:"
            >
              <DropDown items={[
                  { id: 1, name: "דני" },
                  { id: 2, name: "אלכס" },
                  { id: 3, name: "סהר" },
                ]} header="גורם מקצועי" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="budget_type"
              rules={[
                {
                  required: true,
                  message: "חובה להזין גורם מתקצב",
                },
              ]}
              label="גורם מתקצב:"
            >
              <DropDown items={[
                  { id: 1, name: "מטלה תקציבית" },
                  { id: 2, name: "אישור מנהל לתקציב בסיסי" },
                  { id: 3, name: "מצמ" },
                  { id: 4, name: "פרויקטנט"},
                ]} header="גורם מתקצב" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="desc"
              label="תיאור:"
            >
              <DisabledInput value="תיאור" placeHolder="תיאור"></DisabledInput>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              rules={[
                {
                  required: true,
                  message: "חובה להזין מספר מטלה",
                },
              ]}
              name="assignment_id"
              label="מספר מטלה:"
              dependencies={["procument_type"]}
              rules={[
                {
                  validator: (_, vl) => {
                    let value = vl.name;
                    console.log(value);
                    if (
                      form.getFieldValue("procument_type").id == 1 &&
                      (value.substring(value.length - 3) == "962" ||
                        value.substring(value.length - 3) == "950")
                    ) {
                      message.error(
                        "מספר מטלה אינו תואם את סוג הרכש. מועבר לבחינת מחלקת רכש"
                      );
                      return Promise.reject();
                    } else {
                      if (
                        form.getFieldValue("procument_type").id > 1 &&
                        value.substring(value.length - 3) != "962" &&
                        value.substring(value.length - 3) != "950"
                      ) {
                        message.error(
                          "מספר מטלה אינו תואם את סוג הרכש. מועבר לבחינת מחלקת רכש"
                        );
                        return Promise.reject();
                      }
                      return Promise.resolve();
                    }
                  },
                },
              ]}
            >
              <DropDown
                items={[
                  { id: 1, name: "679678856" },
                  { name: "657497040", id: 2 },
                ]}
                header="מטלות"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              rules={[
                {
                  required: true,
                  message: "חובה להזין סוג רכש",
                },
              ]}
              name="procument_type"
              label="סוג רכש:"
            >
              <DropDown
                onChange={(value) => console.log(value)}
                items={procument_types}
                header="סוג רכש"
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="priority"
              label="עדיפות:"
            >
              <DisabledInput placeHolder="עדיפות"></DisabledInput>
            </Form.Item>
          </Col>

          <Col span={8}></Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              rules={[
                {
                  required: true,
                  message: "חובה להזין תיק משיכה",
                },
              ]}
              name="pulling_bag"
              label="תיק משיכה:"
            >
              <DropDown items={pulling_bags} header="תיק משיכה" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="Paka_type"
              label="סוג:"
            >
              <DisabledInput placeHolder="סוג"></DisabledInput>
            </Form.Item>
          </Col>

          <Col span={8}></Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              rules={[
                {
                  required: true,
                  message: "יש להזין הגדרת צורך",
                },
              ]}
              name="reason"
              label="הגדרת הצורך:"
            >
              <Input className="system-field"></Input>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="schedule"
              label="לוז פרויקט:"
            >
              <DisabledInput placeHolder="לוז פרויקט"></DisabledInput>
            </Form.Item>
          </Col>

          <Col span={8}></Col>
          <Col span={24}>
            <Form.Item></Form.Item>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
}

export function Actions(prop) {
  return (
    <React.Fragment>
      <Row justify="end" gutter={[0, 16]} align="middle">
        <Col span={24}>
          <Button
            onClick={prop.on_delete}
            type="primary"
            shape="circle"
            size="large"
            icon={<CloseOutlined />}
          ></Button>{" "}
          מחק פריטים מסומנים
        </Col>

        <Col span={24}>
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<ApartmentOutlined />}
          ></Button>{" "}
          הפרד פריטים לבקשה משנית
        </Col>

        <Col span={24}>
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<FileOutlined />}
          ></Button>{" "}
          הפק נספח ב
        </Col>

        <Col span={24}>
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<PlayCircleOutlined />}
          ></Button>{" "}
          כלל הבקשות המקושרות
        </Col>
      </Row>
    </React.Fragment>
  );
}

export function Details() {
  return (
    <React.Fragment>
      <Row justify="end" gutter={[0, 16]} align="middle">
        <Col span={24}>
          <DisabledInput placeHolder="שם"></DisabledInput>
        </Col>

        <Col span={24}>
          <DisabledInput placeHolder="נייד"></DisabledInput>
        </Col>

        <Col span={24}>
          <DisabledInput placeHolder="בימ/גף"></DisabledInput>
        </Col>

        <Col span={24}>
          <DisabledInput placeHolder="מחלקה"></DisabledInput>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export function AcceptTable() {
  return (
    <React.Fragment>
      <Form name="advanced_search" className="ant-advanced-search-form">
        <Row>
          <Col span={7}>
            <Button
              type="primary"
              shape="circle"
              size="small"
              icon={<CloseOutlined />}
            ></Button>
            אישור חוזר
          </Col>

          <Col span={17}>
            <Form.Item
              name="ordering"
              label="מזמין:"
              style={{
                width: "80%",
                textAlign: "right",
                alignItems: "initial",
                borderStyle: "solid",
                borderWidth: "0 1px 0 0",
              }}
              labelCol={{ pull: 1, span: 6 }}
              wrapperCol={{ pull: 1 }}
            >
              <DisabledInput
                className="system-space"
                placeHolder="מזמין"
              ></DisabledInput>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={7}>
            <Button
              type="primary"
              shape="circle"
              size="small"
              icon={<CloseOutlined />}
            ></Button>
            אישור חוזר
          </Col>

          <Col span={17}>
            <Form.Item
              labelCol={{
                span: 10,
              }}
              name="Bim_commander"
              label="מפקד בימ:"
              style={{
                width: "80%",
                textAlign: "right",
                alignItems: "initial",
                borderStyle: "solid",
                borderWidth: "0 1px 0 0",
              }}
              labelCol={{ pull: 1, span: 6 }}
              wrapperCol={{ pull: 1 }}
            >
              <DropDown items={[
                  { id: 1, name: "ארתור" },
                  { id: 2, name: "גלית" },
                  { id: 3, name: "מפקד בימ נוסף" },
                ]} header="מפקד בימ" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={7}>
            <Button
              type="primary"
              shape="circle"
              size="small"
              icon={<CloseOutlined />}
            ></Button>
            אישור חוזר
          </Col>

          <Col span={17}>
            <Form.Item
              name="Professional_at1"
              label="גורם מקצועי:"
              style={{
                width: "80%",
                textAlign: "right",
                alignItems: "initial",
                borderStyle: "solid",
                borderWidth: "0 1px 0 0",
              }}
              labelCol={{ pull: 1, span: 6 }}
              wrapperCol={{ pull: 1 }}
            >
              <DropDown items={[
                  { id: 1, name: "אלכס" },
                  { id: 2, name: "אלכסיי" },
                  { id: 3, name: "ולאדימיר" },
                ]} header="גורם מקצועי" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={7}>
            <Button
              type="primary"
              shape="circle"
              size="small"
              icon={<CloseOutlined />}
            ></Button>
            אישור חוזר
          </Col>

          <Col span={17}>
            <Form.Item
              name="Professional_at1"
              label="גורם מקצועי:"
              style={{
                width: "80%",
                textAlign: "right",
                alignItems: "initial",
                borderStyle: "solid",
                borderWidth: "0 1px 0 0",
              }}
              labelCol={{ pull: 1, span: 6 }}
              wrapperCol={{ pull: 1 }}
            >
              <DropDown items={[
                  { id: 1, name: "אלכס" },
                  { id: 2, name: "אלכסיי" },
                  { id: 3, name: "ולאדימיר" },
                ]} header="גורם מקצועי" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
}

export function SellItem(props) {
  let valueInsertion = (row, field, e) => {
    row[field] = e.target.value;
    props.new_value(row);
  };
  let [screensStatus, setStatus] = useState({
    New_bid: false,
  });

  let openScreen = (screen_type, e) => {
    setStatus({ [screen_type]: true });
  };

  let cancelScreen = (screen_type) => {
    setStatus({ [screen_type]: false });
  };
  let DropdownInsertion = (row, value, field, e) => {
    row[field] = value;
    props.new_value(row);
  };
  let columns = [
    {
      align: "right",
      title: "מספר פריט",
      width: "auto",
      key: "item_number",
      dataIndex: "item_number",
      render(value, row, index) {
        return <h2>{row.item_number}</h2>;
      },
    },
    {
      align: "right",
      title: "תיאור פריט",
      key: "desc",
      dataIndex: "desc",
      render(value, row, index) {
        return (
          <Input
            type="text"
            rules={[
              {
                required: true,
                message: "יש להזין פקע",
              },
            ]}
            value={value}
            onInput={valueInsertion.bind(this, row, "desc")}
          />
        );
      },
    },
    {
      align: "right",
      title: "מסחא",
      key: "iaf_num",
      dataIndex: "iaf_num",
      render(value, row, index) {
        return (
          <DropDown
          items={[
            { id: 1, name: "82718473" },
            { id: 2, name: "83726471" },
            { id: 3, name: "85973827" },
          ]}
            valueChanged={(va) => {
              DropdownInsertion(row, va, "iaf_num");
            }}
            header="מסחא"
          />
        );
      },
    },
    {
      align: "right",
      title: "איפיון טכני",
      key: "tech",
      dataIndex: "tech",
      render(value, row, index) {
        return (
          <DropDown
          items={[
            { id: 1, name: "כן" },
            { id: 2, name: "לא" },
          ]}
            valueChanged={(va) => {
              DropdownInsertion(row, va, "tech");
            }}
            header="איפיון טכני"
          />
        );
      },
    },
    {
      align: "right",
      width: "10%",
      title: "מספר יצרן",
      key: "creator",
      dataIndex: "creator",
      render(value, row, index) {
        return (
          <DropDown
          items={[
            { id: 1, name: "84729384" },
            { id: 2, name: "42839749" },
          ]}
            valueChanged={(va) => {
              DropdownInsertion(row, va, "מספר יצרן");
            }}
            header="מספר יצרן"
          />
        );
      },
    },
    {
      align: "right",
      title: "שם יצרן",
      key: "creator_name",
      dataIndex: "creator_name",
      render(value, row, index) {
        return (
          <DisabledInput value="שם יצרן" placeHolder="שם יצרן"></DisabledInput>
        );
      },
    },
    {
      align: "right",
      title: "ספק מומלץ",
      key: "provider",
      dataIndex: "provider",
      render(value, row, index) {
        return (
          <DropDown
          items={[
            { id: 1, name: "אלכס" },
            { id: 2, name: "דוד" },
          ]}
            valueChanged={(va) => {
              DropdownInsertion(row, va, "provider");
            }}
            header="ספק מומלץ"
          />
        );
      },
    },
    {
      align: "right",
      width: "6%",
      title: "כמות",
      key: "quantity",
      dataIndex: "quantity",
      render(value, row, index) {
        return (
          <Input
            type="text"
            rules={[
              {
                required: true,
                message: "יש להזין פקע",
              },
              {
                validator: isNumber,
                message: "פקע חייבת להיות מספר",
              },
            ]}
            value={value}
            onInput={valueInsertion.bind(this, row, "quantity")}
          />
        );
      },
    },
    {
      align: "right",
      title: "יחידת מידה",
      key: "measurement",
      dataIndex: "measurement",
      render(value, row, index) {
        return (
          <DropDown
          items={[
            { id: 1, name: "קילו" },
            { id: 2, name: "אינץ" },
          ]}
            header="יחידת מידה"
            valueChanged={(va) => {
              DropdownInsertion(row, va, "measurement");
            }}
          />
        );
      },
    },
    {
      align: "right",
      width: "10%",
      title: "עלות משוארת ליח",
      key: "price",
      dataIndex: "price",
      render(value, row, index) {
        return (
          <Input
            type="text"
            rules={[
              {
                required: true,
                message: "יש להזין פקע",
              },
              {
                validator: isNumber,
                message: "פקע חייבת להיות מספר",
              },
            ]}
            value={value}
            onInput={valueInsertion.bind(this, row, "price")}
          />
        );
      },
    },
  ];
  let selection = {
    selectedRowKeys: props.selected_keys,
    onChange(selectedRowKeys) {
      props.items_selected(selectedRowKeys);
    },
  };


  return (
    <>
      <Button onClick={props.add_item}>הוסף פריט</Button>
      <Button onClick={props.add_price}
             onClick={openScreen.bind(this, "New_bid")}
             > הוסף הצעה חדשה </Button>
             <New_bid
            show={screensStatus.New_bid}
            onCancel={cancelScreen.bind(this, "New_bid")}
          />
      <Table
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
        dataSource={props.sell_Items}
        rowSelection={selection}
      />
    </>
  );
}

export function Bid(prop) {
  let rows = map_bid_to_table(prop.bids);
  let providers_headers = Object.assign({}, Object.values(prop.bids)[0]);
  delete providers_headers.desc;
  console.log(rows);
  //delete providers_headers.desc;
  let columns = [
    {
      align: "right",
      width: "25%",
      title: "תיאור פריט",
      key: "desc",
      dataIndex: "desc",
      render(value, row, index) {
        // console.log(row);
        return {
          children: <p>{row.desc}</p>,
          props: {
            rowSpan: index % 3 == 0 ? 3 : 0,
          },
        };
      },
    },
    {
      align: "right",
      width: "25%",
      title: "נתוני הצעה",
      key: "order_info",
      dataIndex: "order_info",
      render(value, row, index) {
        return <p>{row.order_info}</p>;
      },
    },
    ...Object.keys(providers_headers).map((provider_index) => ({
      align: "right",
      title: providers_headers[provider_index]["name"],
      key: provider_index,
      dataIndex: provider_index,
      render(value, row, index) {
        return <p>{row[provider_index]}</p>;
      },
    })),
  ];

  console.log(
    ...Object.keys(providers_headers).map((provider_index) => ({
      align: "right",
      title: providers_headers[provider_index]["name"],
      key: provider_index,
      dataIndex: provider_index,
      render(value, row, index) {
        return <p>{row[provider_index]}</p>;
      },
    }))
  );
  return (
    <>
      <Table
        columns={columns}
        title={() => "ריכוז הצעות"}
        dataSource={rows}
        pagination={false}
        scroll={{ y: "200px" }}
      />
    </>
  );
}
