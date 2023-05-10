import React from "react";

type Props = {} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  React.PropsWithChildren;

const Button: React.FC<Props> = ({ children, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={
        `
        flex
        justify-center
        items-center
        gap-1
        border-2
        border-black
        border-opacity-50
        p-2
        min-h-14
        rounded-xl
        bg-black
        bg-opacity-75
        uppercase
        font-semibold
        duration-150
        md:border-[var(--white)]
        md:border-opacity-25
        md:bg-opacity-50
        hover:bg-opacity-75
        hover:border-black
        hover:border-opacity-50
        ` + (disabled && "opacity-75")
      }
    >
      {children}
    </button>
  );
};

export default Button;
