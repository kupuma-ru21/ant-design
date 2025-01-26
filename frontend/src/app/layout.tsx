import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// REF: https://ant.design/docs/react/v5-for-19
import "@ant-design/v5-patch-for-react-19";
import "./globals.css";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
