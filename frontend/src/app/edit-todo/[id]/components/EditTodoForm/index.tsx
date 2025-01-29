"use client";
import { Button, Checkbox, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useEditTodoForm } from "./useEditTodoForm";
import { Alert } from "antd";
import TextArea from "antd/es/input/TextArea";
import { TodoQuery } from "@/gql/graphql";

export const EditTodoForm = ({ todo }: { todo: TodoQuery["todo"] }) => {
  const {
    titleRef,
    descriptionRef,
    doneRef,
    error,
    updateTodo,
    isUpdatingTodo,
  } = useEditTodoForm();

  return (
    <>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        style={{ width: "fit-content", margin: "0 auto" }}
        labelCol={{ span: 6 }}
        onFinish={updateTodo}
      >
        <FormItem label="Title" rules={[{ required: false }]}>
          <Input
            style={{ width: "300px" }}
            defaultValue={todo.title}
            ref={titleRef}
          />
        </FormItem>
        <FormItem label="Description" rules={[{ required: false }]}>
          <TextArea
            style={{ width: "300px" }}
            rows={10}
            defaultValue={todo.description}
            ref={descriptionRef}
          />
        </FormItem>
        <FormItem label="Done" rules={[{ required: false }]}>
          <Checkbox defaultChecked={todo.isDone} ref={doneRef} />
        </FormItem>
        <Button
          type="primary"
          htmlType="submit"
          style={{ display: "block", margin: "0 auto" }}
          loading={isUpdatingTodo}
        >
          Submit
        </Button>
      </Form>
      {error && <Alert type="error" message={error} />}
    </>
  );
};
