import { InputRef } from "antd";
import { useRef, useState } from "react";
import { signUpAction } from "./actions/sign-up-action";

export const useSignUpForm = () => {
  const userNameRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  const confirmPasswordRef = useRef<InputRef>(null);

  const [error, setError] = useState("");
  const signup = async () => {
    const userName = userNameRef.current?.input?.value ?? "";
    const password = passwordRef.current?.input?.value ?? "";
    const confirmPassword = confirmPasswordRef.current?.input?.value ?? "";

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signUpAction({ userName, password });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        setError("Failed to sign up");
      }
    }
  };

  return { userNameRef, passwordRef, confirmPasswordRef, error, signup };
};
