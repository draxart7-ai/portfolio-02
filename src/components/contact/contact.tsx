import "./contact.css";
import { useRef, useEffect } from "react";
import { useActiveElementContext } from "../../state/active-element/active-element-context";
import { Description } from "./components/description/description";
import { Title } from "./components/title/title";
import { Form } from "./components/form/form";

export const Contact = () => {
  const sectionRef = useRef(null);
  const { register } = useActiveElementContext();
  const visible = "visible"; // activeId === "Skills" ? "visible" : "invisible";

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister;
  }, [register]);

  return (
    <div id="Contact" className={`Contact ${visible} section`} ref={sectionRef}>
      <Title />
      <Description />
      <Form />
    </div>
  );
};
