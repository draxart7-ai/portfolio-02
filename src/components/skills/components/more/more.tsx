import "./more.css";
import { Card } from "../../../card/card";
import { ArrowLeftSvg } from "../../../../assets/svgs/arrow-left-svg";
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
              <ArrowLeftSvg fill="white" size="24" />
            </div>
            <div className="text">More Skills</div>
          </div>
          <div className="filters"> Filters</div>
          <div className="search">Search</div>
        </div>
      </Card>
      <div className={`slide-out ${isOpenStyle}`}>
        <Card>
          <div>more skills</div>
        </Card>
      </div>
    </div>
  );
};
