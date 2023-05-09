import React from "react";

type Props = {
  label: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input:React.FC<Props> = ({label, ...props}) => {
  return (
    <div className="relative">
      <input
        {...props}
        className="
          block
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
          peer"
        placeholder=" "
      />
      <label
        className="
          absolute
          text-md
          capitalize
          text-zinc-400
          scale-75  
          -translate-y-3
          duration-150
          transform
          top-4 z-10 origin-[0]
          left-6
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
          "
        htmlFor={label}
      >{label}</label>
    </div>
  );
}

export default Input;
