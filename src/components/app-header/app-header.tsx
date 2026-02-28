import { useAppContext } from "../../state/app/app-context";
import "./app-header.css";
import { LogoSvg } from "../../assets/svgs/logo-svg";
import { HeaderLink } from "../header-link/header-link";

export const AppHeader = () => {
  const { theme, toggleTheme } = useAppContext();
  console.log({ theme, toggleTheme });
  return (
    <div className="AppHeader">
      <div className="LeftActions">
        <LogoSvg size="40px" />
        <div className="Name">
          <p>Alan Curtis</p>
        </div>
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
