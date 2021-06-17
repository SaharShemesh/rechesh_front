import { useForm } from "antd/lib/form/Form";
import { Form, Col, Row, Input, Button, Collapse } from "antd";
import { DropDown } from "../../helpers/fields";
import { SearchOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
export let Filter = (props) => {
  let [form] = useForm();
  return (
    <Collapse onChange={callback}>
      <Panel header="חיפוש בקשה" style={{ textAlign: "center" }}>

      <Form
      name="advanced_search"
      form={form}
      className="ant-advanced-search-form"
    >
      <Row>
        <Col span={5}></Col>
        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="req_num"
            label="מספר בקשה:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="מספר בקשה" />
          </Form.Item>
        </Col>

        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="customer"
            label="מזמין:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="מזמין" />
          </Form.Item>
        </Col>
        <Col span={5}></Col>
      </Row>
      <Row>
        <Col span={5}></Col>
        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="sub_order"
            label="תת הזמנה:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="DD" />
          </Form.Item>
        </Col>

        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="order_bim"
            label="בימ מזמין:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="DD" />
          </Form.Item>
        </Col>
        <Col span={5}></Col>
      </Row>
      <Row>
        <Col span={5}></Col>
        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="priority"
            label="עדיפות:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="DD" />
          </Form.Item>
        </Col>

        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="treating_factor"
            label="גורם מטפל:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="DD" />
          </Form.Item>
        </Col>
        <Col span={5}></Col>

        <Col span={8}></Col>
      </Row>
      <Row>
        <Col span={5}></Col>

        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="type"
            label="סוג:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="DD" />
          </Form.Item>
        </Col>

        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="ERP_demand"
            label="מס' דרישה-ERP:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="DD" />
          </Form.Item>
        </Col>
        <Col span={5}></Col>

        <Col span={8}></Col>
      </Row>
      <Row>
        <Col span={5}></Col>

        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="pulling_bag"
            label="תיק משיכה:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="DD" />
          </Form.Item>
        </Col>

        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="ERP_num"
            label="מס' הזמנה-ERP:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="DD" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={5}></Col>

        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="status"
            label="סטטוס:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="DD" />
          </Form.Item>
        </Col>

        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="num"
            label="מס' חשבונית:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="DD" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={5}></Col>
        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="paka"
            label="פקע:"
          >
            <DropDown items={["ישיר", "עקיף"]} header="DD" />
          </Form.Item>
        </Col>

        <Col span={7}>
          <Form.Item
            labelCol={{
              span: 7,
            }}
            name="desc"
            label="תיאור בקשה:"
          >
            <Input className="system-field"></Input>
          </Form.Item>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Row>
        <Col span={12}> </Col>
        <Col span={12}>
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Col>
        <Col span={24}> </Col>
      </Row>
    </Form>
      
      <p>ffsdfd</p>
    </Panel>
    </Collapse>



    
  
  
  
  
  );
};
