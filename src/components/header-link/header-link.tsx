import "./header-link.css";
import { useActiveElementContext } from "../../state/active-element/active-element-context";

interface HeaderLinkProps {
  title?: string;
  onClick?: () => void;
}

export const HeaderLink = ({ title = "", onClick }: HeaderLinkProps) => {
  const { activeId } = useActiveElementContext();

  const active = activeId === title ? "active" : "";

  return (
    <a className={`HeaderLink ${active}`} href={`#${title}`} onClick={onClick}>
      {title}
    </a>
  );
};
