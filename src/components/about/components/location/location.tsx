import "./location.css";
import { Card } from "../../../card/card";

export const Location = () => {
  return (
    <div className="Location">
      <Card>
        <div className="container">
          <div className="address">
            <div className="city">Salt Lake City, Utah</div>
            <div className="country">United States of America</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
