import { notification } from "antd";
export const system_Notification = (type = "info", message, description) => {
  notification[type]({
    message,
    description,
  });
};
