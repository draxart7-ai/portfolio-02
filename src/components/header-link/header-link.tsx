import "./header-link.css";
import { useActiveElementContext } from "../../state/active-element/active-element-context";

interface HeaderLinkProps {
  title?: string;
}

export const HeaderLink = ({ title = "" }: HeaderLinkProps) => {
  const { activeId } = useActiveElementContext();

  const active = activeId === title ? "active" : "";

  return (
    <a className={`HeaderLink ${active}`} href={`#${title}`}>
      {title}
    </a>
  );
};
