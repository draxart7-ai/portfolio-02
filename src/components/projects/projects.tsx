import "./projects.css";
import { useRef, useEffect } from "react";
import { useActiveElementContext } from "../../state/active-element/active-element-context";
import { projectsData } from "./projects-data";
import { ProjectCard } from "./components/project-card/project-card";
import { Title } from "./components/title/title";
import { Card } from "../card/card";
import { FilterSvg } from "../../assets/svgs/filter-svg";
import { ButtonIcon } from "../button-icon/button-icon";
import { Badge } from "../badge/badge";
import { filtersData } from "./filters-data";

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

  const badgeElements = filtersData.map((filter) => (
    <Badge key={filter}>{filter}</Badge>
  ));

  return (
    <div
      id="Projects"
      className={`Projects ${visible} section`}
      ref={sectionRef}
    >
      <Title />
      <div className="search-container">
        <Card>
          <div className="filter-container">
            <div className="badge-container">{badgeElements}</div>
            <div className="filter-button">
              <ButtonIcon onClick={() => console.log("Filter button clicked")}>
                <FilterSvg size="32px" />
              </ButtonIcon>
            </div>
          </div>
        </Card>
      </div>
      <div className="projects-container">{projectCards}</div>
    </div>
  );
};
