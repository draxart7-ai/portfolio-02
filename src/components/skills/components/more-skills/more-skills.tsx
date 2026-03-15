import "./more-skills.css";
import { Card } from "../../../card/card";
import { useSkills } from "../../../../state/skills/skills-context";
import { SkillCard } from "./components/skill-card/skill-card";

export const MoreSkills = () => {
  const { isOpenStyle } = useSkills();
  return (
    <div className={`MoreSkills ${isOpenStyle}`}>
      <div className="card-container">
        <Card>
          <div className="container">
            <SkillCard />
          </div>
        </Card>
      </div>
    </div>
  );
};
