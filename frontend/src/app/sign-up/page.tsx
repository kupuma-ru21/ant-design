import React from "react";
import Title from "antd/es/typography/Title";
import { Button, Layout, Space, Typography } from "antd";
import { SignUpForm } from "./components/SignUpForm";
import Link from "next/link";
import { Paragraph } from "@/libs/antd/Paragraph";

const SignUp = () => {
  return (
    <Layout
      style={{
        height: "100dvh",
        padding: "1rem 0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* REF: https://ant.design/docs/react/use-with-next */}
      {/* Next.js App Router currently not support using sub-components via . like <Select.Option /> and <Typography.Text />. Importing them from path would solve this problem. */}
      <Typography>
        <Title>Sign up</Title>
      </Typography>
      <SignUpForm />
      <Space>
        <Typography>
          <Paragraph>Do you already have account?</Paragraph>
        </Typography>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </Space>
    </Layout>
  );
};

export default SignUp;
