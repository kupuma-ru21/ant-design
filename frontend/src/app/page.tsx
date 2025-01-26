import { TodosDocument } from "@/gql/graphql";
import { apolloClient } from "@/utils/graphql";

export default async function Home() {
  const { data } = await apolloClient.query({
    query: TodosDocument,
    variables: { userName: "test2" },
  });
  console.log("data", data);

  if (data.todos.length === 0) {
    return <div>No todos</div>;
  }

  return null;
}
