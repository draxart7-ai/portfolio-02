import "./more.css";
import { Card } from "../../../card/card";

export const More = () => {
  return (
    <div className="More">
      <Card>
        <div className="container">
          <div className="title">I am</div>
          <div className="cards">
            <div className="title">Determined</div>
            <div className="title">Adaptable</div>
            <div className="title">Creative</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
