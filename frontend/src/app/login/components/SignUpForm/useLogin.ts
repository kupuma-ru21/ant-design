import { InputRef } from "antd";
import { useRef, useState, useTransition } from "react";
import { loginAction } from "./actions/login-action";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const userNameRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  const [error, setError] = useState("");
  const [isLogin, startTransition] = useTransition();
  const router = useRouter();
  const login = async () => {
    const userName = userNameRef.current?.input?.value ?? "";
    const password = passwordRef.current?.input?.value ?? "";

    startTransition(async () => {
      try {
        await loginAction({ userName, password });
        router.push("/");
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setError("Failed to login");
        }
      }
    });
  };

  return {
    userNameRef,
    passwordRef,
    error,
    login,
    isLogin,
  };
};
