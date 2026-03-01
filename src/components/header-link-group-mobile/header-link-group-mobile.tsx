import "./header-link-group-mobile.css";
import { BurgerSvg } from "../../assets/svgs/burger-svg";
import { Button } from "../button/button";
import { useState, useEffect, useRef } from "react";
import { HeaderLink } from "../header-link/header-link";

export const HeaderLinkGroupMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLInputElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`HeaderLinkGroupMobile`} ref={dropdownRef}>
      <Button
        isQuiet
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        <BurgerSvg />
      </Button>
      {isOpen && (
        <ul
          id="dropdown-menu"
          role="menu"
          aria-labelledby="dropdown-button"
          className="dropdown-menu"
        >
          <li role="menuitem">
            <HeaderLink title="Intro" />
          </li>
          <li role="menuitem">
            <HeaderLink title="About" />
          </li>
          <li role="menuitem">
            <HeaderLink title="Projects" />
          </li>
          <li role="menuitem">
            <HeaderLink title="Skills" />
          </li>
          <li role="menuitem">
            <HeaderLink title="Contact" />
          </li>
        </ul>
      )}
    </div>
  );
};
