import React, { useState } from "react";
import { AcceptTable, Details, Order_details, Actions, SellItem, Bid } from "./sections";
import { Row, Col } from "antd";
import "./css/order.css";
//dummy bids
let object = {
  1:{
      "desc":"פריט ראשון",
     1:{
        "name":"ספק ראשון",
        "amount":5,
        "price":300,
        "providing_time":"1-3-2022"
       },
     2:{
         "name":"ספק שני",
         "amount":53,
         "price":300,
         "providing_time":"1-3-2022"
       },
   3:{
      "name":"ספק מס 3",
     "amount":42,
     "price":300,
     "providing_time":"1-3-2022"    
       }  
  },
  2:{
      "desc":"פריט שני",
      1:{
         "name":"ספק ראשון",
         "amount":51,
         "price":300,
         "providing_time":"1-3-2022"
        },
      2:{
          "name":"ספק שני",
          "amount":53,
          "price":300,
          "providing_time":"1-3-2022"
        },
    3:{
       "name":"ספק מס 3",
      "amount":55,
      "price":300,
      "providing_time":"1-3-2022"    
     } 
  }
};
export default function New_order() {
    let [bids, setBids] = useState(object);
  return (
    <React.Fragment>
      <Row justify="end" gutter={[0, 0]}>
        <Col span={18}>
          <Order_details />
        </Col>
        <Col span={6}>
          <Details />
        </Col>
        <Col span={18}>
          <SellItem />
        </Col>
        <Col span={1}></Col>
        <Col span={5}>
          <Actions></Actions>
        </Col>
        <Col span={13}>
          <Bid bids={bids} />
        </Col>
        <Col span={1}></Col>
        <Col span={10}>
          <AcceptTable />
        </Col>
      </Row>
    </React.Fragment>
  );
}
