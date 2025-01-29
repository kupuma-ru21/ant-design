import { InputRef } from "antd";
import { useRef, useState, useTransition } from "react";
import { createTodoAction } from "./actions/create-todo-action";
import { useRouter } from "next/navigation";
import { TextAreaRef } from "antd/es/input/TextArea";

export const useCreateTodoForm = () => {
  const titleRef = useRef<InputRef>(null);
  const descriptionRef = useRef<TextAreaRef>(null);

  const [error, setError] = useState("");
  const [isCreatingTodo, startTransition] = useTransition();
  const router = useRouter();
  const createTodo = () => {
    const title = titleRef.current?.input?.value ?? "";
    const description =
      descriptionRef.current?.resizableTextArea?.textArea.value ?? "";

    startTransition(async () => {
      try {
        await createTodoAction({ title, description });
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
    createTodo,
    isCreatingTodo,
  };
};
