"use client";

import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

type Props = {
  label: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = ({ id, label, type, disabled, ...props }) => {
  const [innerType, setIsHide] = useState(type);
  const [value, setValue] = useState("");

  const toggleShow = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.preventDefault();
    innerType === "password" ? setIsHide("text") : setIsHide("password");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  // window.addEventListener('keydown', (event: KeyboardEvent) => {
  //   event.preventDefault();
  //   console.log(event);
  // })

  return (
    <div className="relative">
      <input
        {...props}
        id={id}
        type={innerType}
        disabled={disabled}
        className={`
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
         text-gray-800
         bg-white
          bg-opacity-95
          appearance-none
          focus:outline-none
          focus:ring-0
          peer ${disabled && "opacity-75 text-gray-600"}`}
        value={value}
        onChange={handleChange}
        autoComplete={id}
        placeholder=" "
      />
      <label
        className={
          `
          absolute
          text-md
          capitalize
          text-zinc-400
          duration-150
          transform
          top-4 z-10 origin-[0]
          left-6
          cursor-text
          transition-all
          peer-focus:scale-75
          peer-focus:-translate-y-3
          ` +
          `${
            value !== ""
              ? "scale-75 -translate-y-3"
              : "scale-100 -translate-y-0"
          }`
        }
        htmlFor={id}
      >
        {label}
      </label>
      {type === "password" && (
        <div className="absolute right-4 top-4 text-gray-900 cursor-pointer">
          {innerType === "password" ? (
            <BsEyeFill
              size={18}
              onClick={toggleShow}
              className="transition-all ease-in-out duration-150 delay-150"
            />
          ) : (
            <BsEyeSlashFill
              size={18}
              onClick={toggleShow}
              className="transition-all ease-in-out duration-150 delay-150"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
