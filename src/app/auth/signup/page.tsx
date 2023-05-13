"use client";

import AuthForm from "@/components/AuthForm";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const SignUpPages = (props: Props) => {
  const router = useRouter();
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session.status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: string } = {};

    formData.forEach((value, key) => (data[key] = String(value)));

    axios
      .post("/api/register", data)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Resgistered successfully");
          toast.promise(
            signIn("credentials", {
              email: data.email,
              password: data.password,
              callbackUrl: "/",
              redirect: false,
            }),
            { pending: "Login...", success: "Login successfully", error: "Something went wrong"}
          );
        }
      })
      .catch((err) => {
        if (err.response !== undefined) toast.error(err.response.data.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-screen h-full bg-neutral-800 bg-opacity-50">
      <AuthForm type="signUp" onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
};

export default SignUpPages;
