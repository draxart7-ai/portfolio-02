import "./more-skills.css";
import { Card } from "../../../card/card";
import { useSkills } from "../../../../state/skills/skills-context";
import { SkillCard } from "./components/skill-card/skill-card";
import { moreSkillsData } from "./more-skills-data";

export const MoreSkills = () => {
  const { isOpenStyle } = useSkills();

  const skillCards = moreSkillsData.map((skill) => (
    <SkillCard key={skill.name} {...skill} />
  ));
  return (
    <div className={`MoreSkills ${isOpenStyle}`}>
      <div className="card-container">
        <Card>
          <div className="container">{skillCards}</div>
        </Card>
      </div>
    </div>
  );
};
