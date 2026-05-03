import "./projects.css";
import { useRef, useEffect, useState } from "react";
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
  const dropdownRef = useRef<HTMLInputElement>(null);
  const { register } = useActiveElementContext();
  const visible = "visible"; // activeId === "Projects" ? "visible" : "invisible";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["Top 5"]);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) =>
          selectedFilters.some((filter) => project.tags.includes(filter)),
        ),
      );
    }
  }, [selectedFilters]);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister; // Cleanup on unmount
  }, [register]);

  const projectCards = filteredProjects.map((project) => (
    <ProjectCard key={project.id} {...project} />
  ));

  const handleRemoveFilter = (filter: string) => {
    setSelectedFilters((prev) => prev.filter((f) => f !== filter));
  };

  const badgeElements = selectedFilters.map((filter) => (
    <Badge
      key={filter}
      value={filter}
      onClick={() => handleRemoveFilter(filter)}
    />
  ));

  const filterOptions = filtersData.map((filter) => {
    if (!selectedFilters.includes(filter)) {
      return (
        <li key={filter} role="menuitem">
          {filter}
        </li>
      );
    }
  });

  const handleFilterItemSelected = (filter: string) => {
    if (filter === "Clear All Filters") {
      setIsOpen(false);
      setTimeout(() => {
        setSelectedFilters([]);
      }, 200);
      return;
    }
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

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
            <div className="total-count">
              <div>Showing</div>
              <div>
                {filteredProjects.length} of {projectsData.length}
              </div>
            </div>
            <div className="filter-button" ref={dropdownRef}>
              <ButtonIcon
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls="dropdown-menu"
                isActive={selectedFilters.length > 0}
              >
                <FilterSvg size="32px" />
              </ButtonIcon>
              <ul
                id="dropdown-menu"
                role="menu"
                aria-labelledby="dropdown-button"
                className={`dropdown-menu ${isOpen && "open"}`}
                onClick={(x) =>
                  handleFilterItemSelected(
                    (x.target as HTMLElement).textContent || "",
                  )
                }
              >
                {filterOptions}
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <div className="projects-container">
        <div className="inner">{projectCards}</div>
      </div>
    </div>
  );
};
