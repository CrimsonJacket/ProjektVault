import React, { useContext } from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import { store } from "../services/store";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = (props) => {
  let history = useHistory();
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const onFinish = (values) => {
    const { password, email } = values;

    /*
    api
      .signin({ password, email })
      .then((response) => {
        dispatch({ type: "login" });
        history.push("/");
      })
      .catch((e) => {
        console.error(e);
      });*/
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Col>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
            //email: localStorage.getItem("userEmail"),
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
