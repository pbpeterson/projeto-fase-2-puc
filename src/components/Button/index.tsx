import { HTMLAttributes } from "react";

type ButtonParams = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...buttonProps }: ButtonParams) => {
  return <button {...buttonProps}>{children}</button>;
};
