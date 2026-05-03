import { ReactNode } from "react";
import "./badge.css";
import { XSvg } from "../../assets/svgs/x-svg";

interface BadgeProps {
  children: ReactNode;
}
export const Badge = ({ children }: BadgeProps) => {
  return (
    <div className={`Badge`}>
      {children}
      <button onClick={() => console.log("remove badge")}>
        <XSvg fill="currentColor" size="18px" />
      </button>
    </div>
  );
};
