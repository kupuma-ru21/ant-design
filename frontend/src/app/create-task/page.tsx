import { Layout } from "antd";
import Typography from "antd/es/typography";
import Title from "antd/es/typography/Title";
import { CreateTodoForm } from "./components/CreateTodoForm";

const CreateTask = () => {
  return (
    <Layout style={{ height: "100dvh", padding: "1rem" }}>
      <Typography>
        <Title>Create Todo</Title>
      </Typography>
      <CreateTodoForm />
    </Layout>
  );
};

export default CreateTask;
