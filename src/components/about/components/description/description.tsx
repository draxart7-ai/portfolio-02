import "./description.css";
import { Card } from "../../../card/card";

export const Description = () => {
  return (
    <div className="Description">
      <Card>
        <div className="container">
          <div className="mission">
            <p className="title">Mission </p>
            <p>
              Empower people through creating intuitive frictionless software
            </p>
            <hr></hr>
          </div>
          <div className="achievements">
            <p className="title">Senior Software Developer</p>
            <p>
              Over 17 years in Software Development, Video Games, Virtual
              Reality
            </p>
            <ul className="list">
              <li>
                Inventor of the Ai Image Reviewer to analyze images and give
                feedback based off brand guidelines (featured twice at Adobe
                Summit)
              </li>
              <li>
                Used pythagoras theorem to determine if rotated object fits
                inside a bounding box
              </li>
              <li>
                Created pipeline tool saving company over $150,000 a year by
                reducing time to import assets into the game
              </li>
              <li>
                Built Virtual Reality experiences that were launched at Disney
                theme parks
              </li>
            </ul>
          </div>
          <div className="wrap-up">
            <p>
              I will identify bottlenecks and make the best experience for the
              customers
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
