import "./header-link.css";
interface HeaderLinkProps {
  title?: string;
  onClick?: () => void;
  isActive?: boolean;
}
export const HeaderLink = ({
  title = "",
  onClick = () => {
    console.log(title);
  },
  isActive = false,
}: HeaderLinkProps) => {
  const active = isActive ? "active" : "";
  return (
    <a className={`HeaderLink ${active}`} href={`#${title}`} onClick={onClick}>
      {title}
    </a>
  );
};
