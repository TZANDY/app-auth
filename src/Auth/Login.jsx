import React from "react";
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from "antd";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

export default function Login () {
  const { loading, error, loginUser } = useLogin();
  const handleLogin = async(values) => {
    await loginUser(values)
  };

  return (
    <Card className="form-container">
      <Flex gap={"large"} align="center">
        {/* Image Section */}
        <Flex flex={1}>
          <img
            src="https://via.placeholder.com/400"
            alt="Register"
            className="auth-image"
          />
        </Flex>

        {/* Form Section */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Welcome back! Please sign in to your account
          </Typography.Text>
          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
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
                {loading? <Spin/>: "Sign In"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/">
                <Button size="large" className="btn">
                  Create an Account
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>

        
      </Flex>
    </Card>
  );
}
