import React, { useRef, useState } from "react";
import { Row, Col, Form, Input, Button, Table, message } from "antd";
import { New_bid } from "./screens";
import { DropDown, DisabledInput, System_input } from "../../helpers/fields";
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
  let assignments = useSelector((state) => state.assignments.items);
  let soldiers = useSelector((state) => state.soldiers.items);
  let budget_types = useSelector((state) => state.budget_types.items);
  let order_types = useSelector((state) => state.order_types.items);
  let pakas = useSelector((state) => state.pakas.items);
  let logged_user = useSelector((state) => state.current_user.user);
  console.log(logged_user);
  return (
    <React.Fragment>
      <Form
        name="order_details"
        form={form}
        className="ant-advanced-search-form"
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
                items={order_types.map((type) => ({
                  id: type.type_id,
                  name: type.type,
                }))}
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
              ]}
              name="paka"
              label="פקע:"
            >
              <DropDown
                items={pakas.map((paka) => ({
                  name: paka.paka_number,
                  id: paka.paka_id,
                }))}
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
                  message: "חובה להזין גורם מקצועי",
                },
              ]}
              name="Professional_at"
              label="גורם מקצועי:"
            >
              <DropDown
                items={soldiers.map((soldier) => ({
                  id: soldier.id,
                  name:
                    soldier.id_num +
                    "- " +
                    soldier.first_name +
                    " " +
                    soldier.last_name,
                }))}
                header="גורם מקצועי"
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
              name="budget_type"
              rules={[
                {
                  required: true,
                  message: "חובה להזין גורם מתקצב",
                },
              ]}
              label="גורם מתקצב:"
            >
              <DropDown
                items={budget_types.map((type) => ({
                  id: type.type_id,
                  name: type.type,
                }))}
                header="גורם מתקצב"
              />
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
              <Input value="תיאור" placeHolder="תיאור"></Input>
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
                    let value = vl;
                    if (
                      logged_user.Permission.permission_id > 2 &&
                      form.getFieldValue("procument_type").id == 1 &&
                      (value.name.substring(value.length - 3) == "962" ||
                        value.name.substring(value.length - 3) == "950")
                    ) {
                      message.error(
                        "מספר מטלה אינו תואם את סוג הרכש. מועבר לבחינת מחלקת רכש"
                      );
                      return Promise.reject();
                    } else {
                      if (
                        logged_user.Permission.permission_id > 2 &&
                        form.getFieldValue("procument_type").id > 1 &&
                        value.name.substring(value.length - 3) != "962" &&
                        value.name.substring(value.length - 3) != "950"
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
              <DropDown items={assignments} header="מטלות" />
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
              <Input placeHolder="עדיפות"></Input>
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
              <DropDown
                items={pulling_bags.map(
                  ({ bag_id, bag_number, bag_description }) => ({
                    id: bag_id,
                    name: bag_number + "-" + bag_description,
                  })
                )}
                header="תיק משיכה"
              />
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
              <Input placeHolder="סוג"></Input>
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
              <Input placeHolder="לוז פרויקט"></Input>
            </Form.Item>
          </Col>

          <Col span={8}></Col>
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              אשר
            </Button>
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

        {prop.mode != "new" && (
          <>
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
          </>
        )}
      </Row>
    </React.Fragment>
  );
}

export function Details() {
  let user = useSelector((state) => state.current_user.user);
  return (
    <React.Fragment>
      <Row justify="end" gutter={[0, 16]} align="middle">
        <Col span={24}>
          <DisabledInput
            placeHolder={user.Soldier.first_name + " " + user.Soldier.last_name}
          ></DisabledInput>
        </Col>

        <Col span={24}>
          <DisabledInput placeHolder={user.phone}></DisabledInput>
        </Col>

        <Col span={24}>
          <DisabledInput
            placeHolder={user.Location.bim.bim_name}
          ></DisabledInput>
        </Col>

        <Col span={24}>
          <DisabledInput
            placeHolder={user.Location.department_name}
          ></DisabledInput>
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
              <Input className="system-space" placeHolder="מזמין"></Input>
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
              <DropDown
                items={[
                  { id: 1, name: "ארתור" },
                  { id: 2, name: "גלית" },
                  { id: 3, name: "מפקד בימ נוסף" },
                ]}
                header="מפקד בימ"
              />
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
              <DropDown
                items={[
                  { id: 1, name: "אלכס" },
                  { id: 2, name: "אלכסיי" },
                  { id: 3, name: "ולאדימיר" },
                ]}
                header="גורם מקצועי"
              />
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
              <DropDown
                items={[
                  { id: 1, name: "אלכס" },
                  { id: 2, name: "אלכסיי" },
                  { id: 3, name: "ולאדימיר" },
                ]}
                header="גורם מקצועי"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
}

export function SellItem(props) {
  let iaf_nums = useSelector((state) => state.iaf_nums.items);
  let creators = useSelector((state) => state.creators.items);
  let providers = useSelector((state) => state.providers.items);
  let measurements = useSelector((state) => state.measurements.items);
  let [selectedCreatorId, setSelected] = useState(null);
  let valueInsertion = (row, field, e) => {
    row[field] =
      (!isNaN(e.target.value) && e.target.value) || e.target.value == "0"
        ? parseFloat(e.target.value)
        : e.target.value;
    props.new_value(Object.assign({}, row));
  };
  let openScreen = (screen_type, e) => {
    setStatus({ [screen_type]: true });
  };

  let cancelScreen = (screen_type) => {
    setStatus({ [screen_type]: false });
  };
  let getNewBid = (Bid) => {
    props.new_bid(Bid);
    cancelScreen("New_bid");
  };
  let DropdownInsertion = (row, value, field, e) => {
    row[field] = value;
    props.new_value(row);
  };
  let [screensStatus, setStatus] = useState({
    New_bid: false,
  });

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
            onChange={valueInsertion.bind(this, row, "desc")}
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
            items={iaf_nums.map((num) => ({ id: num.id, name: num.iaf_num }))}
            onChange={(va) => {
              DropdownInsertion(row, va, "iaf_num");
            }}
            value={value ? value : null}
            header="מסחא"
          />
        );
      },
    },
    {
      align: "right",
      title: "איפיון טכני",
      width: "300px",
      key: "tech",
      dataIndex: "tech",
      render(value, row, index) {
        return (
          <DropDown
            items={[
              { id: 1, name: "כן" },
              { id: 2, name: "לא" },
            ]}
            value={value ? value : null}
            onChange={(va) => {
              DropdownInsertion(row, va, "tech");
            }}
            header="איפיון טכני"
          />
        );
      },
    },
    {
      align: "right",
      width: "300px",
      title: "מספר יצרן",
      key: "creator_num",
      dataIndex: "creator_num",
      render(value, row, index) {
        return (
          <DropDown
            onChange={(selectedCreator) => setSelected(selectedCreator.id)}
            value={value ? value : null}
            items={creators.map((num) => ({
              id: num.id,
              name: num.creator_num,
            }))}
            onChange={(va) => {
              console.log(va);
              DropdownInsertion(row, va, "creator_num");
              DropdownInsertion(
                row,
                creators.find((creator) => creator.id == va.id).creator_name,
                "creator_name"
              );
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
      width: "300px",
      render(value, row, index) {
        return <p>{row.creator_name}</p>;
      },
    },
    {
      align: "right",
      title: "ספק מומלץ",
      key: "provider",
      dataIndex: "recommended_provider",
      width: "300px",
      render(value, row, index) {
        return (
          <DropDown
            value={value ? value : null}
            items={providers.map((num) => ({
              id: num.provider_id,
              name: num.provider_name,
            }))}
            onChange={(va) => {
              DropdownInsertion(row, va, "recommended_provider");
            }}
            header="ספק מומלץ"
          />
        );
      },
    },
    {
      align: "right",
      width: "300px",
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
            onChange={valueInsertion.bind(this, row, "quantity")}
          />
        );
      },
    },
    {
      align: "right",
      title: "יחידת מידה",
      key: "measurement",
      width: "300px",
      dataIndex: "measurement",
      render(value, row, index) {
        console.log("יחידת מידה:", value);
        return (
          <DropDown
            items={measurements.map((num) => ({
              id: num.id,
              name: num.measurement,
            }))}
            value={value ? value : null}
            header="יחידת מידה"
            onChange={(va) => {
              DropdownInsertion(row, va, "measurement");
            }}
          />
        );
      },
    },
    {
      align: "right",
      width: "300px",
      title: "עלות משוערת ליח",
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
            onChange={valueInsertion.bind(this, row, "price")}
          />
        );
      },
    },
  ];
  let selection = {
    selectedRowKeys: props.selected_keys,
    onChange(selectedRowKeys) {
      console.log("selected", selectedRowKeys);
      props.items_selected(selectedRowKeys);
    },
  };

  return (
    <>
      <Button onClick={props.add_item}>הוסף פריט</Button>
      <Button
        onClick={props.add_price}
        onClick={openScreen.bind(this, "New_bid")}
      >
        הוסף הצעה חדשה
      </Button>
      <New_bid
        show={screensStatus.New_bid}
        onCancel={cancelScreen.bind(this, "New_bid")}
        sell_Items={props.sell_Items}
        onCreation={getNewBid}
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
