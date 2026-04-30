import "./header-link-group-desktop.css";
import { HeaderLink } from "../header-link/header-link";

export const HeaderLinkGroupDesktop = () => {
  return (
    <div className="HeaderLinkGroupDesktop">
      <HeaderLink title="Intro" />
      <HeaderLink title="About" />
      <HeaderLink title="Skills" />
      <HeaderLink title="Projects" />
      <HeaderLink title="Contact" />
    </div>
  );
};
