import "./devops.css";
import { Card } from "../../../card/card";
import { CardInner } from "../../../card-inner/card-inner";

export const Devops = () => {
  return (
    <div className="Devops">
      <div className="container">
        <Card>
          <div className="content">
            <div className="title"> Devops | Cloud</div>
            <div className="tags">
              <CardInner> AWS</CardInner>
              <CardInner> Kubernetes</CardInner>
              <CardInner> Docker</CardInner>
              <CardInner> Gitlab</CardInner>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
