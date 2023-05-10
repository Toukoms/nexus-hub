"use client";

import AuthForm from "@/components/AuthForm";
import axios from "axios";
import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

type Props = {};

const SignUpPages = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: string } = {};

    formData.forEach((value, key) => (data[key] = String(value)));

    try {
      axios
        .post("/api/register", data)
        .then((res) => {
          if (res.status === 201) {
            toast.success("Resgistered successfully");
            const data = JSON.parse(res.data)
            signIn("credentials", data);
          }
        })
        .catch((err) => {
          if (err.resposnse.data)
          toast.error(err.response.data.message);
          console.log(err.messsage)
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-full bg-neutral-800 bg-opacity-50">
      <AuthForm type="signUp" onSubmit={handleSubmit} isLoading={isLoading} />
      <ToastContainer />
    </div>
  );
};

export default SignUpPages;
