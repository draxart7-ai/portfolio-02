import { useAppContext } from "../../state/app/app-context";
import "./app-header.css";
import { LogoSvg } from "../../assets/svgs/logo-svg";
import { HeaderLinkGroupDesktop } from "../header-link-group-desktop/header-link-group-desktop";
import { HeaderLinkGroupMobile } from "../header-link-group-mobile/header-link-group-mobile";

export const AppHeader = () => {
  const {
    theme,
    toggleTheme,
    screen: { isMobile, isTablet, isDesktop },
  } = useAppContext();

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
        {isDesktop && <HeaderLinkGroupDesktop />}
        {(isMobile || isTablet) && <HeaderLinkGroupMobile />}
      </div>
    </div>
  );
};
