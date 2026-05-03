import { ReactNode } from "react";
import "./button-icon.css";
interface ButtonIconProps {
  variant?: string;
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  isQuiet?: boolean;
  isActive?: boolean;
}
export const ButtonIcon = ({
  variant = "default",
  title = "",
  disabled = false,
  onClick = () => {
    console.log(title);
  },
  isActive = false,
  children,
  isQuiet = false,
}: ButtonIconProps) => {
  const isQuietStyle = isQuiet && "isQuiet";
  const isActiveStyle = isActive && "isActive";

  return (
    <button
      className={`ButtonIcon ${variant} ${isQuietStyle} ${isActiveStyle}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
};
