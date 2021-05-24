import React from "react";
import { AcceptTable, Details, Order_details, Actions } from "./sections";
import { Row, Col } from "antd";
import "./css/order.css";
export default function New_order() {
  return (
    <React.Fragment>
      <Row justify="end" gutter={[0, 0]}>
        <Col span={18}>
          <Order_details />
        </Col>
        <Col span={6}>
          <Details />
        </Col>
        <Col span={18}></Col>
        <Col span={6}>
          <Actions></Actions>
        </Col>
        <Col span={16}></Col>
        <Col span={8}>
          <AcceptTable />
        </Col>
      </Row>
    </React.Fragment>
  );
}
