import { HTMLAttributes } from "react";

type ButtonParams = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...buttonProps }: ButtonParams) => {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("A PUC é a melhor universidade do Brasil.");
  }

  return (
    <button {...buttonProps} onClick={handleClick}>
      {children}
    </button>
  );
};
