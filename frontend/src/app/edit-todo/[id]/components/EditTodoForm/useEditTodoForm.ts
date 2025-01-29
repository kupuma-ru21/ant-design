import { CheckboxRef, InputRef } from "antd";
import { useRef, useState, useTransition } from "react";
import { updateTodoAction } from "./actions/update-todo-action";
import { useParams, useRouter } from "next/navigation";
import { TextAreaRef } from "antd/es/input/TextArea";

export const useEditTodoForm = () => {
  const { id } = useParams<{ id: string }>();
  const titleRef = useRef<InputRef>(null);
  const descriptionRef = useRef<TextAreaRef>(null);
  const doneRef = useRef<CheckboxRef>(null);
  const [error, setError] = useState("");
  const [isUpdatingTodo, startTransition] = useTransition();
  const router = useRouter();

  const updateTodo = async () => {
    startTransition(async () => {
      try {
        await updateTodoAction({
          title: titleRef.current?.input?.value ?? "",
          description:
            descriptionRef.current?.resizableTextArea?.textArea.value ?? "",
          id,
          isDone: doneRef.current?.input?.checked ?? false,
        });
        router.push("/");
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setError("Failed to update todo");
        }
      }
    });
  };

  return {
    titleRef,
    descriptionRef,
    doneRef,
    error,
    updateTodo,
    isUpdatingTodo,
  };
};
