import "./about.css";
import { useRef, useEffect } from "react";
import { useActiveElementContext } from "../../state/active-element/active-element-context";
import { Card } from "../card/card";
import { Description } from "./components/description/description";
import { Timeline } from "./components/timeline/timeline";

export const About = () => {
  const sectionRef = useRef(null);
  const { activeId, register } = useActiveElementContext();
  const visible = activeId === "About" ? "visible" : "invisible";

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister;
  }, [register]);

  return (
    <div id="About" className={`About ${visible} section`} ref={sectionRef}>
      <div className="title">
        <Card>
          <div className="header">
            <p>About Me</p>
          </div>
        </Card>
      </div>
      <Description />
      <div className="picture">
        <Card>
          <div className="container">
            <img src="/images/misc/alan-01.jpg" alt="profile" />
          </div>
        </Card>
      </div>
      <Timeline />
      <div className="info">
        <Card>
          <div className="container">
            <div className="address">
              <div className="city">Salt Lake City, Utah</div>
              <div className="country">United States of America</div>
            </div>
          </div>
        </Card>
      </div>
      <div className="more">
        <Card>
          <div className="container">
            <div className="title">I am</div>
            <div className="cards">
              <div className="trait-card">
                <div className="title">Determined</div>
              </div>
              <div className="trait-card">
                <div className="title">Adaptable</div>
              </div>
              <div className="trait-card">
                <div className="title">Creative</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
