import { Layout } from "antd";
import Typography from "antd/es/typography";
import Title from "antd/es/typography/Title";
import { EditTodoForm } from "./components/EditTodoForm";
import { getTodoAction } from "./components/EditTodoForm/actions/get-todo-action";

const EditTodo = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const { todo } = await getTodoAction({ id });

  return (
    <Layout style={{ height: "100dvh", padding: "1rem" }}>
      <Typography>
        <Title>Edit Todo</Title>
      </Typography>
      <EditTodoForm todo={todo} />
    </Layout>
  );
};

export default EditTodo;
