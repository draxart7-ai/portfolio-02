import { ReactNode } from "react";
import "./button.css";
interface ButtonProps {
  variant?: string;
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  isQuiet?: boolean;
}
export const Button = ({
  variant = "default",
  title = "",
  disabled = false,
  onClick = () => {
    console.log(title);
  },
  children,
  isQuiet = false,
}: ButtonProps) => {
  const isQuietStyle = isQuiet && "isQuiet";

  return (
    <button
      className={`Button ${variant} ${isQuietStyle}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
};
