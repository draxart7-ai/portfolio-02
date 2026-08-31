import "./experience-card.css";
import { Card } from "../../../card/card";
// import { CardInner } from "../../../card-inner/card-inner";
// import { ButtonAction } from "../../../button-action/button-action";
// import { LogoGithubSvg } from "../../../../assets/svgs/logo-github-svg";
// import { LeaveSvg } from "../../../../assets/svgs/leave-svg";

interface ExperienceCardProps {
  title: string;
  description: string;
  tags: string[];
  achievements: string[];
  media: string[];
  links: { type: string; url: string }[];
  date: string;
  role: string;
}

export const ExperienceCard = ({
  title,
  media,
  // tags,
  description,
  achievements,
  // links,
  date,
  role,
}: ExperienceCardProps) => {
  // const tech = tags.map((tag) => {
  //   if (tag !== "Top 5") {
  //     return <CardInner key={tag}>{tag}</CardInner>;
  //   }
  //   return null;
  // });
  const bulletPoints = achievements.map((bulletPoint) => (
    <li key={bulletPoint}>{bulletPoint}</li>
  ));

  // const getIcon = (type: string) => {
  //   switch (type.toLowerCase()) {
  //     case "github":
  //       return <LogoGithubSvg size="20" />;
  //     case "site":
  //       return <LeaveSvg size="20" />;
  //     default:
  //       return null;
  //   }
  // };

  // const actionButtons = links.map((link) => (
  //   <ButtonAction key={link.type} link={link} icon={getIcon(link.type)} />
  // ));

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        width: "100%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="date-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "calc(100% + 20px)",
          marginLeft: "12px",
          paddingRight: "12px",
        }}
      >
        <div
          className="date-line"
          style={{
            height: "calc(100% + 20px)",
            width: "8px",
            backgroundColor: "#0e5996",
            position: "absolute",
            borderRadius: "6px",
            marginTop: "10px",
          }}
        ></div>
        <div
          className="date-marker"
          style={{
            height: "12px",
            width: "24px",
            backgroundColor: "white",
            position: "absolute",
            top: "10px",
            borderRadius: "6px",
          }}
        ></div>
        <div
          className="date-label"
          style={{
            height: "12px",
            position: "absolute",
            top: "2px",
            left: "34px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {date}
        </div>
      </div>

      <div id="ExperienceCard" className="ExperienceCard">
        <Card>
          <div className="title">{title}</div>
          <div className={`image-container`}>
            <img src={media[0]} alt={`${title} media`} />
          </div>
          <hr className="divider-top" />
          <div className="description">
            <div className="description-header">
              <p>{role}</p>
            </div>
            <p>{description}</p>
          </div>
          <hr className="divider-bottom" />
          <div className="achievements">
            <div className="achievements-header">
              <p>Achievements</p>
            </div>
            <ul>{bulletPoints}</ul>
          </div>
          {/* <div className="tech">{tech}</div> */}

          {/* <div className="actions">{actionButtons}</div> */}
        </Card>
      </div>
    </div>
  );
};
