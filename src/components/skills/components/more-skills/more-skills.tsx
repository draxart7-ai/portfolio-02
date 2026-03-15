import "./more-skills.css";
import { Card } from "../../../card/card";
import { useSkills } from "../../../../state/skills/skills-context";

export const MoreSkills = () => {
  const { isOpenStyle } = useSkills();
  return (
    <div className={`MoreSkills ${isOpenStyle}`}>
      <Card>
        <div className="container">MoreSkills skills</div>
      </Card>
    </div>
  );
};
