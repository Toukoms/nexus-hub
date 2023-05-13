"use client";

import AuthForm from "@/components/AuthForm";
import React, { FormEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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

    signIn("credentials", {
      ...data,
      callbackUrl: "/",
      redirect: false,
    })
      .then((res) =>
        res?.error
          ? toast.error(res.error)
          : toast.success("signin successfully")
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-screen h-full bg-neutral-800 bg-opacity-50">
      <AuthForm type="signIn" onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
};

export default SignInPage;
