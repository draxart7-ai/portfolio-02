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
    <a className={`HeaderLink`} href={`#${title}`} onClick={onClick}>
      {title}
    </a>
  );
};
