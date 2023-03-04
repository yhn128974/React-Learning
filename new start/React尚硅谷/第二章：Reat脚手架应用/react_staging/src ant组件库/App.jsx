import React, { Component } from "react";
import { DatePicker, Button,   } from "antd";
import {
  WechatFilled
} from '@ant-design/icons';
const { RangePicker } = DatePicker;


export default class App extends Component {
  render() {
    return (
      <div>
        
        <Button type="primary">Primary Button</Button>
        <Button type="">Primary Button 2</Button>
        <Button type="link">Primary Button 3</Button>
        <WechatFilled />
        <RangePicker onChange={() => { } } />
      </div>
    );
  }
}
