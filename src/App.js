import React, { useState } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Table } from "antd";
import App_Router from "./components/helpers/navigation";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <App_Router />
    </BrowserRouter>
  );
}
export default App;
