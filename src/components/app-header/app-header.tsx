import { useAppContext } from "../../state/app/app-context";
import "./app-header.css";
import { LogoSvg } from "../../assets/svgs/logo-svg";

export const AppHeader = () => {
  const { theme, toggleTheme } = useAppContext();
  console.log({ theme, toggleTheme });
  return (
    <div className="AppHeader">
      <LogoSvg size="10px" />
      <h1>header</h1>
    </div>
  );
};
