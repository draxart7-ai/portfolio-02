import "./more.css";
import { Card } from "../../../card/card";
import { ArrowRightSvg } from "../../../../assets/svgs/arrow-right-svg";
import { useSkills } from "../../../../state/skills/skills-context";

export const More = () => {
  const { isOpen, setIsOpen, isOpenStyle } = useSkills();
  return (
    <div className="More">
      <Card>
        <div className="container">
          <div
            className="title"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div className={`arrow ${isOpenStyle}`}>
              <ArrowRightSvg fill="white" size="24" />
            </div>
            <div className="text">More Skills</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
