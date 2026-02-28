import "./button.css";
interface ButtonProps {
  variant?: string;
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
}
export const Button = ({
  variant = "default",
  title = "",
  disabled = false,
  onClick = () => {
    console.log(title);
  },
}: ButtonProps) => {
  return (
    <button
      className={`Button ${variant} ${disabled}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
