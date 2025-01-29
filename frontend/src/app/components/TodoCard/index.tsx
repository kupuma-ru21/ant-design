"use client";
import { Button, Card, CardProps } from "antd";
import Link from "next/link";
import { DeleteTodoButton } from "./components/DeleteTodoButton";
import { useTodoCard } from "./useTodoCard";

export function TodoCard({ id, ...rest }: CardProps & { id: string }) {
  const { isDeletingTodo, startDeletingTodo, finishDeletingTodo } =
    useTodoCard();

  return (
    <Card
      {...rest}
      actions={[
        <Button
          key="edit"
          ghost
          type="primary"
          style={{ minWidth: "88px", padding: 0 }}
          disabled={isDeletingTodo}
        >
          <Link
            href="/edit-todo/1"
            style={{
              height: "100%",
              alignContent: "center",
              width: "100%",
              color: "inherit",
            }}
          >
            Edit
          </Link>
        </Button>,
        <DeleteTodoButton
          key="delete"
          id={id}
          onStartDeletingTodo={startDeletingTodo}
          onFinishDeletingTodo={finishDeletingTodo}
          isDeletingTodo={isDeletingTodo}
        />,
      ]}
    />
  );
}
