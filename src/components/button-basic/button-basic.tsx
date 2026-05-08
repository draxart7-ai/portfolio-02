import "./button-basic.css";

interface ButtonBasicProps {
  label: string;
}
export const ButtonBasic = ({ label = "default" }: ButtonBasicProps) => {
  return <button className={`ButtonBasic`}>{label}</button>;
};
