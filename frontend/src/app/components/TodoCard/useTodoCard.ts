import { useState } from "react";

export const useTodoCard = () => {
  const [isDeletingTodo, setIsDeletingTodo] = useState(false);
  const startDeletingTodo = () => setIsDeletingTodo(true);
  const finishDeletingTodo = () => setIsDeletingTodo(false);

  return { isDeletingTodo, startDeletingTodo, finishDeletingTodo };
};
