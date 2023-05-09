"use client";

import AuthForm from "@/components/AuthForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

type Props = {};

const SignUpPages = (props: Props) => {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: string } = {};

    formData.forEach((value, key) => (data[key] = String(value)));

    try {
      await axios.post("/api/register", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-full bg-neutral-800 bg-opacity-50">
      <AuthForm type="signUp" onSubmit={handleSubmit} />
    </div>
  );
};

export default SignUpPages;
