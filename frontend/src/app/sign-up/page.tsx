import React from "react";
import Typography from "antd/es/typography";
import Title from "antd/es/typography/Title";
import { Button, Layout, Space } from "antd";
import { SignUpForm } from "./components/SignUpForm";
import Link from "next/link";
import Text from "antd/es/typography/Text";

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
          <Text>Do you already have account?</Text>
        </Typography>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </Space>
    </Layout>
  );
};

export default SignUp;
