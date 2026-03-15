import "./skill-card.css";
import { CardInner } from "../../../../../card-inner/card-inner";

export const SkillCard = () => {
  return (
    <div className="SkillCard">
      <CardInner>
        <div className="container">
          <img src="/images/tools/substance-designer-icon.png" alt="profile" />
          <div className="text">Substance Designer</div>
        </div>
      </CardInner>
    </div>
  );
};
