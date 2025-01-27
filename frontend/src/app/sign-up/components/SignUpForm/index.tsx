"use client";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import { useSignUpForm } from "./useSignUpForm";
import { Alert } from "antd";

export const SignUpForm = () => {
  const {
    userNameRef,
    passwordRef,
    confirmPasswordRef,
    error,
    signup,
    isSigningUp,
  } = useSignUpForm();

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 20 }}
        style={{ textAlign: "center", marginBottom: "1rem" }}
        initialValues={{ remember: true }}
        onFinish={signup}
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

        <FormItem
          label="Confirm Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Password ref={confirmPasswordRef} />
        </FormItem>

        <Button type="primary" htmlType="submit" loading={isSigningUp}>
          Submit
        </Button>
      </Form>
      {error && <Alert type="error" message={error} />}
    </>
  );
};
