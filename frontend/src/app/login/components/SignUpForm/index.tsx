"use client";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input";
import { useLogin } from "./useLogin";
import { Alert } from "antd";

export const SignUpForm = () => {
  const { userNameRef, passwordRef, error, login, isLogin } = useLogin();

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ minWidth: 600, textAlign: "center", marginBottom: "1rem" }}
        initialValues={{ remember: true }}
        onFinish={login}
        autoComplete="off"
      >
        <FormItem
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input ref={userNameRef} />
        </FormItem>

        <FormItem
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Password ref={passwordRef} />
        </FormItem>

        <Button type="primary" htmlType="submit" loading={isLogin}>
          Submit
        </Button>
      </Form>
      {error && <Alert type="error" message={error} />}
    </>
  );
};
