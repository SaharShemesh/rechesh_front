import { useForm } from "antd/lib/form/Form";
import { Form, Divider, Col, Row, Input, Button, Collapse } from "antd";
import { DropDown } from "../../helpers/fields";
import { SearchOutlined, CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const style = { padding: '8px 0' };

function callback(key) {
  console.log(key);
}
export let Filter = (props) => {
  let [form] = useForm();
  return (
    <Collapse

      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      onChange={callback}>
      <Panel header="חיפוש בקשה" style={{ textAlign: "center" }}>

        <Form
          name="advanced_search"
          form={form}
          className="ant-advanced-search-form"
        >
          <Row gutter={24} justify="center">
            <Col span={6} >
              <Form.Item
                labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 20,
                }}
                name="req_num"
                label="מספר בקשה:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="מספר בקשה" />
              </Form.Item>
            </Col>

            <Col span={8} >
              <Form.Item
                labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 16,
                }}
                name="customer"
                label="מזמין:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="מזמין" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24} justify="center">
            <Col span={6}>
              <Form.Item
                labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 20,
                }}
                name="sub_order"
                label="תת הזמנה:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="DD" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 16,
                }}
                name="order_bim"
                label="בימ מזמין:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="DD" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="center">
            <Col span={6}>
              <Form.Item
                 labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 20,
                }}
                name="priority"
                label="עדיפות:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="DD" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 16,
                }}
                name="treating_factor"
                label="גורם מטפל:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="DD" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24} justify="center">
            <Col span={6}>
              <Form.Item
                 labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 20,
                }}
                name="type"
                label="סוג:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="DD" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 16,
                }}
                name="ERP_demand"
                label="מס' דרישה-ERP:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="DD" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="center">
            <Col span={6}>
              <Form.Item
                 labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 20,
                }}
                name="pulling_bag"
                label="תיק משיכה:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="DD" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 16,
                }}
                name="ERP_num"
                label="מס' הזמנה-ERP:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="DD" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="center">
            <Col span={6}>
              <Form.Item
                 labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 20,
                }}
                name="status"
                label="סטטוס:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="DD" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 16,
                }}
                name="num"
                label="מס' חשבונית:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="DD" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24} justify="center">
            <Col span={6}>
              <Form.Item
                 labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 20,
                }}
                name="paka"
                label="פקע:"
              >
                <DropDown items={["ישיר", "עקיף"]} header="DD" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 22,
                }}
                name="desc"
                label="תיאור בקשה:"
              >
                <Input className="system-field"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row  justify="center">
            
              <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            
           
          </Row>
        </Form>

      </Panel>
    </Collapse>








  );
};
