import { ReactNode } from "react";
import "./intro.css";

interface IntroProps {
  children: ReactNode;
}
export const Intro = ({ children }: IntroProps) => {
  return <div className={`Intro`}>{children}</div>;
};
