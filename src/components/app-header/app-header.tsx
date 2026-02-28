import { useAppContext } from "../../state/app/app-context";
import "./app-header.css";
import { LogoSvg } from "../../assets/svgs/logo-svg";
import { HeaderLink } from "../header-link/header-link";
import { useMediaQuery } from "../../hooks/useMediaQuery/useMediaQuery";

export const AppHeader = () => {
  const { theme, toggleTheme } = useAppContext();
  console.log({ theme, toggleTheme });

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <div className="AppHeader">
      <div className="LeftActions">
        <LogoSvg size="40px" />
        <div className="Name">
          <p>Alan Curtis</p>
        </div>
        {isMobile && <p>This content is only visible on mobile screens.</p>}
        {isDesktop && <p>This content is only visible on desktop screens.</p>}
      </div>
      <div className="Links">
        <HeaderLink title="Intro" />
        <HeaderLink title="About" />
        <HeaderLink title="Projects" />
        <HeaderLink title="Skills" />
        <HeaderLink title="Contact" />
      </div>
    </div>
  );
};
