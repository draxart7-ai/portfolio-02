import "./header-link-group-desktop.css";
import { HeaderLink } from "../header-link/header-link";

export const HeaderLinkGroupDesktop = () => {
  return (
    <div className="HeaderLinkGroupDesktop">
      <HeaderLink title="Intro" />
      <HeaderLink title="About" />
      <HeaderLink title="Projects" />
      <HeaderLink title="Skills" />
      <HeaderLink title="Contact" />
    </div>
  );
};
