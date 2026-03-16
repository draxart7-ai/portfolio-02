import "./projects.css";
import { useRef, useEffect } from "react";
import { useActiveElementContext } from "../../state/active-element/active-element-context";
import { projectsData } from "./projects-data";
import { ProjectCard } from "./components/project-card/project-card";

export const Projects = () => {
  const sectionRef = useRef(null);
  const { activeId, register } = useActiveElementContext();
  const visible = activeId === "Projects" ? "visible" : "invisible";

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister; // Cleanup on unmount
  }, [register]);

  const projectCards = projectsData.map((project) => (
    <ProjectCard {...project} />
  ));

  return (
    <div
      id="Projects"
      className={`Projects ${visible} section`}
      ref={sectionRef}
    >
      {projectCards}
    </div>
  );
};
