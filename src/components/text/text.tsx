import { ReactNode } from "react";
import "./text.css";

interface TextProps {
  children: ReactNode;
  size?: string;
  isSubtle?: boolean;
}
export const Text = ({
  children,
  size = "f2",
  isSubtle = false,
}: TextProps) => {
  const subtle = isSubtle ? "subtle" : "";
  return <div className={`Text ${subtle} ${size}`}>{children}</div>;
};
