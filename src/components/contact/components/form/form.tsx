import "./form.css";
import { Card } from "../../../card/card";
import { EmailSvg } from "../../../../assets/svgs/email-svg";
import { LogoGithubSvg } from "../../../../assets/svgs/logo-github-svg";
import { LogoLinkedInSvg } from "../../../../assets/svgs/logo-linkedin-svg";
import { LogoArtStationSvg } from "../../../../assets/svgs/logo-art-station-svg";
import { ButtonAction } from "../../../button-action/button-action";

export const Form = () => {
  const email = {
    type: "Alancurtis31+dev@gmail.com",
    url: "mailto:alancurtis31+dev@gmail.com",
  };
  const github = {
    type: "",
    url: "https://github.com/draxart7-ai",
  };
  const linkedIn = {
    type: "",
    url: "https://www.linkedin.com/in/alan-curtis-7aa94bb/",
  };
  const artStation = {
    type: "",
    url: "https://www.artstation.com/alancurtis31",
  };

  return (
    <div className="Form">
      <Card>
        <div className="button-container">
          <ButtonAction key={email.type} link={email} icon={<EmailSvg />} />
          <div className="social-media">
            <ButtonAction
              key={github.type}
              link={github}
              icon={<LogoGithubSvg />}
            />
            <ButtonAction
              key={linkedIn.type}
              link={linkedIn}
              icon={<LogoLinkedInSvg />}
            />
            <ButtonAction
              key={artStation.type}
              link={artStation}
              icon={<LogoArtStationSvg />}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
