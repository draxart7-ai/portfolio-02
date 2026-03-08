import "./picture.css";
import { Card } from "../../../card/card";

export const Picture = () => {
  return (
    <div className="Picture">
      <Card>
        <div className="container">
          <img src="/images/misc/alan-01.jpg" alt="profile" />
        </div>
      </Card>
    </div>
  );
};
