"use client";

import AuthForm from "@/components/AuthForm";
import React, { FormEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

type Props = {};

const SignInPage = ({}: Props) => {
  const router = useRouter();
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(session.status);
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

    toast.promise(
      async () => {
        const res = await signIn("credentials", {
          ...data,
          callbackUrl: "/",
          redirect: false,
        });
        if (res?.error) {
          setIsLoading(false)
          throw new Error(res.error);
        } else if (res?.ok) {
          setIsLoading(false)
        }
      },
      {
        pending: "Checking data",
        error: "Invalide email or password",
        success: "Login successfully",
      }
    );
  };

  return (
    <div className="w-screen h-full bg-neutral-800 bg-opacity-50">
      <AuthForm type="signIn" onSubmit={handleSubmit} isLoading={isLoading} />
      <ToastContainer />
    </div>
  );
};

export default SignInPage;
