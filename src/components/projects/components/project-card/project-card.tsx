import "./project-card.css";
import { Card } from "../../../card/card";
import { CardInner } from "../../../card-inner/card-inner";
import { Carousel } from "../../../carousel/carousel";
import { useState } from "react";
import { ButtonAction } from "../../../button-action/button-action";
import { LogoGithubSvg } from "../../../../assets/svgs/logo-github-svg";
import { LeaveSvg } from "../../../../assets/svgs/leave-svg";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  achievements: string[];
  media: string[];
  links: { type: string; url: string }[];
}

export const ProjectCard = ({
  title,
  media,
  tags,
  description,
  achievements,
  links,
}: ProjectCardProps) => {
  const tech = tags.map((tag) => {
    if (tag !== "Top 5") {
      return <CardInner key={tag}>{tag}</CardInner>;
    }
    return null;
  });
  const bulletPoints = achievements.map((bulletPoint) => (
    <li key={bulletPoint}>{bulletPoint}</li>
  ));
  const [isFullScreen, setIsFullScreen] = useState(false);

  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "github":
        return <LogoGithubSvg size="20" />;
      case "site":
        return <LeaveSvg size="20" />;
      default:
        return null;
    }
  };

  const actionButtons = links.map((link) => (
    <ButtonAction key={link.type} link={link} icon={getIcon(link.type)} />
  ));

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
          <hr />
          <ul>{bulletPoints}</ul>
        </div>
        <div className="actions">{actionButtons}</div>
      </Card>
    </div>
  );
};
