import Link from "next/link";
import React from "react";
import Button from "./Button";
import Input from "./Input";
import { FcGoogle } from "react-icons/fc";

type Props = {
  type: "signIn" | "signUp";
  isLoading?: boolean;
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const AuthForm = ({ type, isLoading=false, ...props }: Props) => {
  const variant = {
    question: {
      signIn: "Don't have an account? ",
      signUp: "Already have an account? ",
    },
    linkLabel: {
      signIn: "Create an account",
      signUp: "Login",
    },
    link: {
      signIn: "/auth/signup",
      signUp: "/auth/signin",
    },
    buttonName: {
      signIn: "Login",
      signUp: "Sign Up",
    },
    title: {
      signIn: "Sign in",
      signUp: "Register",
    },
  };

  return (
    <div
      className="
        w-full
        h-full
        min-h-screen
        flex
        justify-center
       "
    >
      <form
        {...props}
        className="
          w-full
          h-full
          min-h-screen
          sm:w-1/2
          sm:rounded-lg
          sm:min-h-min
          sm:my-16
          md:3/5
          lg:w-2/5
          xl:w-1/3
          px-12
          pt-16
          pb-8
          bg-[var(--primary-color)]
          text-[var(--white)]
          flex
          flex-col
          gap-3"
      >
        <h2 className="text-center text-4xl font-bold pb-6">
          {variant.title[type]}
        </h2>

        {type === "signUp" && (
          <div className="flex gap-2">
            <Input
              id="lastname"
              type="text"
              label="last name"
              name="lastName"
              required={true}
              disabled={isLoading}
            />
            <Input
              id="firstname"
              type="text"
              label="first name"
              name="firstName"
              required={true}
              disabled={isLoading}
            />
          </div>
        )}
        <Input
          id="email"
          type="email"
          label="email"
          name="email"
          required={true}
          disabled={isLoading}
        />
        <Input
          id="password"
          type="password"
          label="password"
          name="password"
          required={true}
          disabled={isLoading}
        />
        <div className="h-6"></div>

        <Button disabled={isLoading}>{variant.buttonName[type]}</Button>
        {type === "signIn" && (
          <span className="flex justify-evenly items-center h-2 text-neutral-800">
            <hr className="w-20 border-neutral-800" /> Or
            <hr className="w-20 border-neutral-800" />
          </span>
        )}
        {type === "signIn" && (
          <Button>
            <span>Login with</span>
            <FcGoogle size={24} />
            <span>Google</span>
          </Button>
        )}

        <div className="h-2"></div>
        <p className="text-neutral-800 text-md">
          {variant.question[type]}
          <Link
            href={variant.link[type]}
            className="font-semibold text-[var(--white)] text-lg hover:underline hover:underline-white"
          >
            {variant.linkLabel[type]}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
