import "./timeline.css";
import { useEffect, useRef } from "react";
import { timelineData } from "./timeline-data";
import { TimelineCard } from "./components/timeline-card/timeline-card";
import { Title } from "./components/title/title";
import { Card } from "../card/card";
import { useActiveElementContext } from "../../state/active-element/active-element-context";

export const Timeline = () => {
  const sectionRef = useRef(null);
  const { register } = useActiveElementContext();
  const visible = "visible"; // activeId === "Projects" ? "visible" : "invisible";

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister; // Cleanup on unmount
  }, [register]);

  const TimelineCards = timelineData.map((project) => (
    <TimelineCard key={project.id} {...project} />
  ));

  return (
    <div
      id="Timeline"
      className={`Timeline-Section ${visible} section`}
      ref={sectionRef}
    >
      <Title />
      <div className="description-container">
        <Card>
          <div className="intro-container">
            <div> blank</div>
          </div>
        </Card>
      </div>
      <div className="timeline-container">
        <div className="inner">{TimelineCards}</div>
      </div>
    </div>
  );
};
