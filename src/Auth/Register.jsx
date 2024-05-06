import React from "react";
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from "antd";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const Register = () => {
  const { loading, error, registerUser } = useSignup();

  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <Card className="form-container">
      <Flex gap={"large"} align="center">
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an Account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for exclusive offers and discounts
          </Typography.Text>
          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your full name",
                },
              ]}
            >
              <Input size="large" placeholder="Enter you full name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email",
                },
                {
                  type: "email",
                  message: "Please input a valid Email",
                },
              ]}
            >
              <Input size="large" placeholder="Enter you Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter you Password" />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username",
                },
              ]}
            >
              <Input size="large" placeholder="Enter you username" />
            </Form.Item>
            <Form.Item
              label="Re Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please input your Re Password",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter you Password" />
            </Form.Item>
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}
            <Form.Item>
              <Button
                type={`${loading ? "default" : "primary"}`}
                htmlType="submit"
                size="large"
                className="btn"
                
              >
                {loading? <Spin/>: "Create Account"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size="large" className="btn">
                  Sign In
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>

        <Flex flex={1}>
          <img
            src="https://via.placeholder.com/400"
            alt="Register"
            className="auth-image"
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
