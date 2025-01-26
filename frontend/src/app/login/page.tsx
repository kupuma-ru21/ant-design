import React from "react";
import Typography from "antd/es/typography";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { Button, Layout, Space } from "antd";
import { SignUpForm } from "./components/SignUpForm";
import Link from "next/link";

const Login = () => {
  return (
    <Layout
      style={{
        height: "100dvh",
        padding: "1rem 0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>
        <Title>Login</Title>
      </Typography>
      <SignUpForm />
      <Space>
        <Typography>
          <Text>Create account?</Text>
        </Typography>
        <Button>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </Space>
    </Layout>
  );
};

export default Login;
