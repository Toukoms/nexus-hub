"use client";

import AuthForm from "@/components/AuthForm";
import React, { FormEvent, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

type Props = {};

const SignInPage = ({}: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    console.log(isLoading);

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
          toast.error("Invalide email or password");
          setIsLoading(false);
        } else if (res!.ok) {
          toast.success("Login successfuly");
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  console.log(isLoading);

  return (
    <div className="w-screen h-full bg-neutral-800 bg-opacity-50">
      <button onClick={() => signOut()}>SignOut</button>
      <AuthForm type="signIn" onSubmit={handleSubmit} isLoading={isLoading} />
      <ToastContainer />
    </div>
  );
};

export default SignInPage;
