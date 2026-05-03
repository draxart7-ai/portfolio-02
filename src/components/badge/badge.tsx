import "./badge.css";
import { XSvg } from "../../assets/svgs/x-svg";

interface BadgeProps {
  onClick?: () => void;
  value?: string;
}
export const Badge = ({ onClick, value }: BadgeProps) => {
  return (
    <div className={`Badge`}>
      {value}
      <button onClick={onClick} className="remove-button">
        <XSvg fill="currentColor" size="18px" />
      </button>
    </div>
  );
};
