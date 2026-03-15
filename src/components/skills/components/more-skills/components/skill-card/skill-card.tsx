import "./skill-card.css";
import { CardInner } from "../../../../../card-inner/card-inner";

interface SkillCardProps {
  name: string;
  icon: string;
  tags: string[];
}

export const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="SkillCard">
      <CardInner>
        <div className="container">
          <img src={`/images/tools/${icon}`} alt="profile" />
          <div className="text">{name}</div>
        </div>
      </CardInner>
    </div>
  );
};
