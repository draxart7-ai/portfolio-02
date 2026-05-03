import { ReactNode } from "react";
import "./button-icon.css";
interface ButtonIconProps {
  variant?: string;
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  isQuiet?: boolean;
}
export const ButtonIcon = ({
  variant = "default",
  title = "",
  disabled = false,
  onClick = () => {
    console.log(title);
  },
  children,
  isQuiet = false,
}: ButtonIconProps) => {
  const isQuietStyle = isQuiet && "isQuiet";

  return (
    <button
      className={`ButtonIcon ${variant} ${isQuietStyle}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
};
