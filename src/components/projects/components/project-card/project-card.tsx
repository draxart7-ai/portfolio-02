import "./project-card.css";
import { Card } from "../../../card/card";
import { CardInner } from "../../../card-inner/card-inner";

interface Media {
  content: string;
  title: string;
  note: string;
}
interface ProjectCardProps {
  title: string;
  directory: string;
  cover: string;
  description: string;
  tags: string[];
  achievements: string[];
  media: Media[];
}

export const ProjectCard = ({
  title,
  media,
  directory,
  cover,
  tags,
  description,
  achievements,
}: ProjectCardProps) => {
  const tech = tags.map((tag) => <CardInner>{tag}</CardInner>);
  const bulletPoints = achievements.map((bulletPoint) => (
    <li>{bulletPoint}</li>
  ));
  return (
    <div id="ProjectCard" className="ProjectCard">
      <Card>
        <div className="title">{title}</div>
        <div className="carousel">
          <img
            src={`images/projects/${directory}/${cover}`}
            alt={media[0].title}
          />
        </div>
        <div className="tech">{tech}</div>
        <div className="description">
          <p>{description}</p>
          <ul>{bulletPoints}</ul>
        </div>
        <div className="actions">action buttons</div>
      </Card>
    </div>
  );
};
