import "./button.css";
export const Button = ({ variant = "default" }) => {
  return <button className={`Button ${variant}`}>Hello</button>;
};
