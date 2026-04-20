import "./project-card.css";
import { Card } from "../../../card/card";
import { CardInner } from "../../../card-inner/card-inner";
import { Carousel } from "../../../carousel/carousel";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  achievements: string[];
  media: string[];
}

export const ProjectCard = ({
  title,
  media,
  tags,
  description,
  achievements,
}: ProjectCardProps) => {
  const tech = tags.map((tag) => <CardInner key={tag}>{tag}</CardInner>);
  const bulletPoints = achievements.map((bulletPoint) => (
    <li key={bulletPoint}>{bulletPoint}</li>
  ));
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div id="ProjectCard" className="ProjectCard">
      <Card>
        <div className="title">{title}</div>
        <div
          className={`carousel-container ${isFullScreen ? "fullscreen" : ""}`}
        >
          <Carousel
            media={media}
            setIsFullScreen={setIsFullScreen}
            isFullScreen={isFullScreen}
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
