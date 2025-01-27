import { TodosDocument } from "@/gql/graphql";
import { get404ErrorResponse } from "@/utils/error/get404ErrorResponse";
import { get500ErrorResponse } from "@/utils/error/get500ErrorResponse";
import { apolloClient } from "@/utils/graphql";
import { Button, Card, Layout, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { getUserNameCookieStore } from "@/utils/getUserNameCookieStore";
import { Paragraph } from "@/libs/antd/Paragraph";

export default async function Home() {
  const userNameCookieStore = await getUserNameCookieStore();
  if (!userNameCookieStore) {
    console.error("userNameCookieStore is not present");
    throw get404ErrorResponse("userNameCookieStore");
  }
  const { error, data } = await apolloClient.query({
    query: TodosDocument,
    variables: { userName: userNameCookieStore.value },
  });
  if (error) throw get500ErrorResponse(error);
  if (!data) throw get404ErrorResponse("data");

  return (
    <Layout style={{ padding: "1rem", height: "100%" }}>
      <Typography>
        <Title>Todos</Title>
      </Typography>
      <Button
        type="primary"
        style={{ width: "fit-content", marginBottom: "24px", padding: "0" }}
      >
        <Link
          href="/create-task"
          style={{ height: "100%", alignContent: "center", padding: "0 15px" }}
        >
          Create Task
        </Link>
      </Button>
      {data.todos.length === 0 ? (
        <Typography>
          <Paragraph>No Todos</Paragraph>
        </Typography>
      ) : (
        <div
          style={{
            backgroundColor: "beige",
            display: " flex",
            justifyContent: "center",
            height: "700px",
            overflowY: "scroll",
          }}
        >
          <Space
            direction="vertical"
            size={16}
            style={{ width: "fit-content" }}
          >
            {data.todos.map(
              ({ id, title, description, isDone }, index, self) => {
                return (
                  <Card
                    title={title}
                    extra={`${isDone ? "Done" : "Not Done"}`}
                    style={{
                      width: 300,
                      marginTop: index === 0 ? "16px" : undefined, // Add margin to the first element
                      marginBottom:
                        index === self.length - 1 ? "16px" : undefined,
                    }}
                    key={id}
                  >
                    <Paragraph style={{ width: "100%" }} ellipsis={{ rows: 3 }}>
                      {description}
                    </Paragraph>
                  </Card>
                );
              }
            )}
          </Space>
        </div>
      )}
    </Layout>
  );
}
