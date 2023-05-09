"use client";

import AuthForm from "@/components/AuthForm";
import React, { FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type Props = {};

const SignInPage = ({}: Props) => {
  // const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: string } = {};

    formData.forEach((value, key) => (data[key] = String(value)));

    signIn("credentials", {
      ...data,
      callbackUrl: "/",
      redirect: false,
    })
      .then((res) => {
        if (res!.error) {
          toast.error('Invalide email or password')
        } else if (res!.ok) {
          toast.success('Login successfuly')
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-screen h-full bg-neutral-800 bg-opacity-50">
      <AuthForm type="signIn" onSubmit={handleSubmit} />
    </div>
  );
};

export default SignInPage;
