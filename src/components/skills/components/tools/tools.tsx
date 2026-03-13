import "./tools.css";
import { Card } from "../../../card/card";
import { CardInner } from "../../../card-inner/card-inner";

export const Tools = () => {
  return (
    <div className="Tools">
      <div className="container">
        <Card>
          <div className="content">
            <div className="title"> Tools | Testing</div>
            <div className="tags">
              <CardInner> Git</CardInner>
              <CardInner> Playwright</CardInner>
              <CardInner> Postman</CardInner>
              <CardInner> Sonarqube</CardInner>
              <CardInner> VSCode</CardInner>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
