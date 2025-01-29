import { InputRef } from "antd";
import { useRef, useState, useTransition } from "react";
import { updateTodoAction } from "./actions/update-todo-action";
import { useRouter } from "next/navigation";
import { TextAreaRef } from "antd/es/input/TextArea";

export const useEditTodoForm = ({ id }: { id: string }) => {
  const titleRef = useRef<InputRef>(null);
  const descriptionRef = useRef<TextAreaRef>(null);

  const [error, setError] = useState("");
  const [isUpdatingTodo, startTransition] = useTransition();
  const router = useRouter();
  const updateTodo = async () => {
    const title = titleRef.current?.input?.value ?? "";
    const description =
      descriptionRef.current?.resizableTextArea?.textArea.value ?? "";

    startTransition(async () => {
      try {
        await updateTodoAction({ title, description, id });
        router.push("/");
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setError("Failed to create todo");
        }
      }
    });
  };

  return {
    titleRef,
    descriptionRef,
    error,
    updateTodo,
    isUpdatingTodo,
  };
};
