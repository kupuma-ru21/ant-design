"use client";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useEditTodoForm } from "./useEditTodoForm";
import { Alert } from "antd";
import TextArea from "antd/es/input/TextArea";

export const EditTodoForm = (props: { id: string }) => {
  const { titleRef, descriptionRef, error, updateTodo, isUpdatingTodo } =
    useEditTodoForm(props);

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
        <FormItem
          label="Title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input style={{ width: "300px" }} ref={titleRef} />
        </FormItem>
        <FormItem
          label="Description"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <TextArea style={{ width: "300px" }} rows={10} ref={descriptionRef} />
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
