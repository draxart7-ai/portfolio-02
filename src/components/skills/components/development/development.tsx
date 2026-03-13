import "./development.css";
import { Card } from "../../../card/card";
import { CardInner } from "../../../card-inner/card-inner";

export const Development = () => {
  return (
    <div className="Development">
      <div className="container">
        <Card>
          <div className="content">
            <div className="title"> Development</div>
            <div className="tags">
              <CardInner> Javascript</CardInner>
              <CardInner> Typescript</CardInner>
              <CardInner> React</CardInner>
              <CardInner> Nodejs</CardInner>
              <CardInner> MongoDB</CardInner>
              <CardInner> SQL</CardInner>
              <CardInner> HTML</CardInner>
              <CardInner> CSS</CardInner>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
