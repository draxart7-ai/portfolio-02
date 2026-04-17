import "./about.css";
import { useRef, useEffect } from "react";
import { useActiveElementContext } from "../../state/active-element/active-element-context";
import { Description } from "./components/description/description";
import { Timeline } from "./components/timeline/timeline";
import { Picture } from "./components/picture/picture";
import { Location } from "./components/location/location";
import { More } from "./components/more/more";
import { Title } from "./components/title/title";

export const About = () => {
  const sectionRef = useRef(null);
  const { activeId, register } = useActiveElementContext();
  const visible = "visible"; // activeId === "About" ? "visible" : "invisible";

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister;
  }, [register]);

  return (
    <div id="About" className={`About ${visible} section`} ref={sectionRef}>
      <Title />
      <Description />
      <Picture />
      <Timeline />
      <Location />
      <More />
    </div>
  );
};
