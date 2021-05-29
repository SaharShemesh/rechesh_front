import { Card } from "antd";
import { useState } from "react";
import {
  Update_bag,
  Update_notificationData,
  Update_provider,
  Screen_Permission,
} from "./screens";

export default function Management_panel() {
  let [screensStatus, setStatus] = useState({
    Update_bag: false,
    Update_notification: false,
    Update_provider: false,
    Screen_Permission: false,
  });

  let gridStyle = {
    width: "33.33%",
    textAlign: "center",
  };

  let openScreen = (screen_type, e) => {
    setStatus({ [screen_type]: true });
  };

  let cancelScreen = (screen_type) => {
    setStatus({ [screen_type]: false });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>פאנל ניהול - מערכת</h1>
      <Card title="פאנל ניהול" dir="rtl" bordered={false}>
        <Card.Grid
          style={gridStyle}
          onClick={openScreen.bind(this, "Update_bag")}
        >
          עריכת ספקים
        </Card.Grid>
        <Card.Grid
          onClick={openScreen.bind(this, "Update_notification")}
          style={gridStyle}
        >
          עדכון התראות
        </Card.Grid>
        <Card.Grid
          onClick={openScreen.bind(this, "Update_provider")}
          style={gridStyle}
        >
          עדכון ספקים
        </Card.Grid>
        <Card.Grid
          onClick={openScreen.bind(this, "Screen_Permission")}
          style={gridStyle}
        >
          מסך הרשאות
        </Card.Grid>
      </Card>
      {
        //screens
        <>
          <Update_bag
            show={screensStatus.Update_bag}
            onCancel={cancelScreen.bind(this, "Update_screen")}
          />
          <Update_notificationData
            show={screensStatus.Update_notification}
            onCancel={cancelScreen.bind(this, "Update_notification")}
          />
          <Update_provider
            show={screensStatus.Update_provider}
            onCancel={cancelScreen.bind(this, "Update_provider")}
          />
          <Screen_Permission
            show={screensStatus.Screen_Permission}
            onCancel={cancelScreen.bind(this, "Screen_Permission")}
          />
        </>
      }
    </>
  );
}
