import { ReactNode } from "react";
import "./button-action.css";
interface ButtonActionProps {
  link: { type: string; url: string };
  icon: ReactNode;
}
export const ButtonAction = ({
  link = { type: "github", url: "https://github.com" },
  icon = null,
}: ButtonActionProps) => {
  return (
    <a
      className={`ButtonAction `}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {link.type}
    </a>
  );
};
