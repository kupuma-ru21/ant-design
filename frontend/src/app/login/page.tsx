import React from "react";
import Typography from "antd/es/typography";
import Title from "antd/es/typography/Title";
import { Layout } from "antd";
import { SignUpForm } from "./components/SignUpForm";

const Login = () => {
  return (
    <Layout
      style={{ height: "100dvh", padding: "1rem 0", alignItems: "center" }}
    >
      <Typography>
        <Title>Login</Title>
      </Typography>
      <SignUpForm />
    </Layout>
  );
};

export default Login;
