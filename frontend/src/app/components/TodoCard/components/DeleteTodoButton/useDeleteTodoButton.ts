import { useMemo } from "react";
import { deleteTodoAction } from "./actions/delete-todo-action";
import { notification } from "antd";
import { revalidatePath } from "@/utils/revalidatePath";

export const useDeleteTodoButton = ({
  id,
  onStartDeletingTodo,
  onFinishDeletingTodo,
}: {
  id: string;
  onStartDeletingTodo: () => void;
  onFinishDeletingTodo: () => void;
}) => {
  const [api, contextHolder] = notification.useNotification();
  const contextValue = useMemo(() => ({}), []);

  const deleteTodo = async () => {
    try {
      onStartDeletingTodo();
      await deleteTodoAction({ id });
      api.success({
        message: "Todo deleted",
        placement: "bottomRight",
        onClose: () => {
          onFinishDeletingTodo();
          revalidatePath("/", "page");
        },
      });
    } catch (error) {
      console.error(error);
      api.error({
        message: "Failed to delete todo",
        placement: "bottomRight",
        onClose: () => onFinishDeletingTodo(),
      });
    }
  };

  return { deleteTodo, contextHolder, contextValue };
};
