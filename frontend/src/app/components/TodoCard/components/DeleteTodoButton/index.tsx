"use client";
import { createContext } from "react";
import { Button } from "antd";
import { useDeleteTodoButton } from "./useDeleteTodoButton";

const Context = createContext({});

export const DeleteTodoButton = ({
  isDeletingTodo,
  ...rest
}: {
  id: string;
  onStartDeletingTodo: () => void;
  onFinishDeletingTodo: () => void;
  isDeletingTodo: boolean;
}) => {
  const { deleteTodo, contextHolder, contextValue } = useDeleteTodoButton(rest);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Button
        danger
        type="primary"
        style={{ minWidth: "88px" }}
        onClick={async () => {
          await deleteTodo();
        }}
        loading={isDeletingTodo}
      >
        Delete
      </Button>
    </Context.Provider>
  );
};
