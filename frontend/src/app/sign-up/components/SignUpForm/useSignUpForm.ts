import { InputRef } from "antd";
import { useRef, useState, useTransition } from "react";
import { signUpAction } from "./actions/sign-up-action";
import { useRouter } from "next/navigation";

export const useSignUpForm = () => {
  const userNameRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  const confirmPasswordRef = useRef<InputRef>(null);

  const [error, setError] = useState("");
  const [isSigningUp, startTransition] = useTransition();
  const router = useRouter();
  const signup = async () => {
    const userName = userNameRef.current?.input?.value ?? "";
    const password = passwordRef.current?.input?.value ?? "";
    const confirmPassword = confirmPasswordRef.current?.input?.value ?? "";

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    startTransition(async () => {
      try {
        await signUpAction({ userName, password });
        router.push("/login");
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setError("Failed to sign up");
        }
      }
    });
  };

  return {
    userNameRef,
    passwordRef,
    confirmPasswordRef,
    error,
    signup,
    isSigningUp,
  };
};
