import { ReactNode } from "react";
import "./card-inner.css";

interface CardInnerProps {
  children: ReactNode;
}
export const CardInner = ({ children }: CardInnerProps) => {
  return <div className={`CardInner`}>{children}</div>;
};
