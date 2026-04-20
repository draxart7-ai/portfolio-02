import "./projects.css";
import { useRef, useEffect } from "react";
import { useActiveElementContext } from "../../state/active-element/active-element-context";
import { projectsData } from "./projects-data";
import { ProjectCard } from "./components/project-card/project-card";
import { Card } from "../card/card";
export const Projects = () => {
  const sectionRef = useRef(null);
  const { register } = useActiveElementContext();
  const visible = "visible"; // activeId === "Projects" ? "visible" : "invisible";

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister; // Cleanup on unmount
  }, [register]);

  const projectCards = projectsData.map((project) => (
    <ProjectCard key={project.id} {...project} />
  ));

  return (
    <div
      id="Projects"
      className={`Projects ${visible} section`}
      ref={sectionRef}
    >
      <Card>
        <div className="title">Projects</div>
      </Card>
      {projectCards}
    </div>
  );
};
