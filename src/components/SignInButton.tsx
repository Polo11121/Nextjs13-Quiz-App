"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/Button";

interface SignInButtonProps {
  text: string;
}

export const SignInButton = ({ text }: SignInButtonProps) => {
  const signInHandler = () => signIn("google");

  return <Button onClick={signInHandler}>{text}</Button>;
};
