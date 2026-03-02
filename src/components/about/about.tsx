import "./about.css";
import { useRef, useEffect } from "react";
import { useActiveElementContext } from "../../state/active-element/active-element-context";
import { Card } from "../card/card";

export const About = () => {
  const sectionRef = useRef(null);
  const { activeId, register } = useActiveElementContext();
  const visible = activeId === "About" ? "visible" : "invisible";

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister; // Cleanup on unmount
  }, [register]);

  return (
    <div id="About" className={`About ${visible} section`} ref={sectionRef}>
      <div className="title" style={{ fontSize: "28px", fontWeight: "bold" }}>
        <Card>
          <p>About Me</p>
        </Card>
      </div>
      <div className="desc">
        <Card>
          <p style={{ padding: "0px 20px", fontSize: "32px" }}>
            Software Developer | Technical Artist{" "}
          </p>
          <p style={{ padding: "0px 20px" }}>
            Placeholder! I approach my work and personal growth through the lens
            of internal composure and steady, repetitive practice. I view myself
            as an explorer of systems, driven by a curiosity to understand how
            diverse pieces connect and function together.
          </p>
          <p style={{ padding: "10px 20px" }}>
            Placeholder! chasing milestones, I focus on the daily discipline of
            the process, prioritizing efficiency and objective logic in every
            challenge. My commitment lies in maintaining a grounded perspective
            and a quiet, consistent drive to refine my craft.
          </p>
          <p style={{ padding: "0px 20px" }}>
            Placeholder! in focused work, where efficiency is the only real
            measure of progress. I seek the clarity of a well ordered mind and a
            task executed with precision.
          </p>
        </Card>
      </div>
      <div className="picture">
        <Card>
          <img src="/images/misc/alan-01.jpg" alt="profile" height="300px" />
        </Card>
      </div>
      <div className="bar">
        <Card>
          <p>
            this ------ to this -------- to this -------- to this ------- end
          </p>
        </Card>
      </div>
      <div className="info">
        <Card>
          <p>Info</p>
        </Card>
      </div>
      <div className="more">
        <Card>
          <p>More</p>
        </Card>
      </div>
    </div>
  );
};
