import "./button-action.css";
import { LogoGithubSvg } from "../../assets/svgs/logo-github-svg";
import { LeaveSvg } from "../../assets/svgs/leave-svg";
interface ButtonActionProps {
  link: { type: string; url: string };
}
export const ButtonAction = ({
  link = { type: "github", url: "https://github.com" },
}: ButtonActionProps) => {
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
  return (
    <a
      className={`ButtonAction `}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {getIcon(link.type)}
      {link.type}
    </a>
  );
};
