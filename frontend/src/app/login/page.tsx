import React from "react";
import Title from "antd/es/typography/Title";
import { Button, Layout, Space, Typography } from "antd";
import { SignUpForm } from "./components/SignUpForm";
import Link from "next/link";
import { Paragraph } from "@/libs/antd/Paragraph";

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
          <Paragraph>Create account?</Paragraph>
        </Typography>
        <Button>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </Space>
    </Layout>
  );
};

export default Login;
