import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { DropDown, DisabledInput } from "../../helpers/fields";
import {
  PlayCircleOutlined,
  CloseOutlined,
  ApartmentOutlined,
  FileOutlined,
} from "@ant-design/icons";
export function Order_details() {
  return (
    <React.Fragment>
      <Form name="advanced_search" className="ant-advanced-search-form">
        <Row>
          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="order_type"
              label="סוג הזמנה:"
            >
              <DropDown items={["קטן", "גדול"]} header="סוג הזמנה" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
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
              name="pro_Att"
              label="גורם מקצועי:"
            >
              <DropDown items={["דני", "דניאל"]} header="גורם מקצועי" />
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
              name="pay"
              label="גורם מתקצב:"
            >
              <DropDown items={["בסיסי", "שושי", "מטה"]} header="גורם מתקצב" />
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
              <DisabledInput placeHolder="תיאור"></DisabledInput>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="assign_Num"
              label="מספר מטלה:"
            >
              <DropDown items={["679678856", "657497040"]} header="סוג הזמנה" />
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
              name="buy_Type"
              label="סוג רכש:"
            >
              <DropDown items={["קטן", "גדול"]} header="סוג רכש" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="prio"
              label="עדיפות:"
            >
              <DisabledInput placeHolder="עדיפות"></DisabledInput>
            </Form.Item>
          </Col>

          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="pulling_Bag"
              label="תיק משיכה:"
            >
              <DropDown items={["ישיר", "עקיף"]} header="תיק משיכה" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
              name="type"
              label="סוג:"
            >
              <DisabledInput placeHolder="שם"></DisabledInput>
            </Form.Item>
          </Col>

          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item
              labelCol={{
                span: 7,
              }}
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
              name="scheduale"
              label="לוז פרויקט:"
            >
              <DisabledInput placeHolder="לוז פרויקט"></DisabledInput>
            </Form.Item>
          </Col>

          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
      </Form>
    </React.Fragment>
  );
}

export function Actions() {
  return (
    <React.Fragment>
      <Row justify="end" gutter={[0, 16]} align="middle">
        <Col span={24}>
          <Button
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

          <Col span={9}>
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
              labelCol={{ pull: 1 }}
              wrapperCol={{ pull: 2 }}
            >
              <Input></Input>
            </Form.Item>
          </Col>

          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
      </Form>
    </React.Fragment>
  );
}
