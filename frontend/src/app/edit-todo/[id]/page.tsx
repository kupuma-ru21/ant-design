import { Layout } from "antd";
import Typography from "antd/es/typography";
import Title from "antd/es/typography/Title";
import { EditTodoForm } from "./components/EditTodoForm";

const EditTodo = () => {
  return (
    <Layout style={{ height: "100dvh", padding: "1rem" }}>
      <Typography>
        <Title>Edit Todo</Title>
      </Typography>
      {/* TODO */}
      <EditTodoForm id="1" />
    </Layout>
  );
};

export default EditTodo;
