import "./intro.css";
import { useRef, useEffect } from "react";
import { useActiveElementContext } from "../../state/active-element/active-element-context";
import { Display } from "./display/display";

export const Intro = () => {
  const sectionRef = useRef(null);
  const { register } = useActiveElementContext();
  const visible = "visible"; // activeId === "Intro" ? "visible" : "invisible";

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister; // Cleanup on unmount
  }, [register]);

  return (
    <div className="intro-container">
      <div id="Intro" className={`Intro ${visible} section`} ref={sectionRef}>
        <Display />
      </div>
    </div>
  );
};
