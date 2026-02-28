import "./header-link.css";
interface HeaderLinkProps {
  title?: string;
  onClick?: () => void;
}
export const HeaderLink = ({
  title = "",
  onClick = () => {
    console.log(title);
  },
}: HeaderLinkProps) => {
  return (
    <button className={`HeaderLink`} onClick={onClick}>
      {title}
    </button>
  );
};
