import "./header-link-group-mobile.css";
import { BurgerSvg } from "../../assets/svgs/burger-svg";
import { Button } from "../button/button";

export const HeaderLinkGroupMobile = () => {
  return (
    <div className={`HeaderLinkGroupMobile`}>
      <Button
        isQuiet
        onClick={() => {
          console.log("open draw");
        }}
      >
        <BurgerSvg />
      </Button>
    </div>
  );
};
