import "./skills.css";
import { useRef, useEffect } from "react";
import { useActiveElementContext } from "../../state/active-element/active-element-context";
import { Description } from "./components/description/description";
import { Development } from "./components/development/development";
import { Devops } from "./components/devops/devops";
import { Tools } from "./components/tools/tools";
import { More } from "./components/more/more";
import { Title } from "./components/title/title";

export const Skills = () => {
  const sectionRef = useRef(null);
  const { activeId, register } = useActiveElementContext();
  const visible = activeId === "Skills" ? "visible" : "invisible";

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister;
  }, [register]);

  return (
    <div id="Skills" className={`Skills ${visible} section`} ref={sectionRef}>
      <Title />
      <Description />
      <Development />
      <Devops />
      <Tools />
      <More />
    </div>
  );
};
