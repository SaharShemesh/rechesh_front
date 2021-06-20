import { Modal } from "antd";

function System_Modal(props) {
  return (
    <Modal
      title={props.header}
      visible={props.show}
      closable={false}
      center={props.show}
      okText={props.buttonText}
      cancelButtonProps={{
        style: { display: !props.cancelText ? "none" : "inline" },
      }}
      cancelText={props.cancelText}
      maskClosable={props.show}
      style={{ textAlign: "center" }}
      onCancel={props.onCancel}
      onOk={props.onOk}
      width="100%"
    >
      {props.children}
    </Modal>
  );
}

export function FormModal(props) {
  return (
    <System_Modal
      header={props.header}
      show={props.show}
      buttonText={props.buttonText}
      cancelText={"ביטול"}
      onCancel={props.onCancel}
      onOk={props.onOk}
      //click = {props.onSave}
    >
      {props.children}
    </System_Modal>
  );
}
