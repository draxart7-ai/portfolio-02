import "./description.css";
import { Card } from "../../../card/card";

export const Description = () => {
  return (
    <div className="Description">
      <Card>
        <div className="container">
          <div className="achievements">
            <p className="title">Senior Software Developer</p>
            <p>
              Over 17 years in Software Development, Video Games, Virtual
              Reality
            </p>
            <ul className="list">
              <li>
                Inventor of the AI Image Reviewer to analyze images and give
                feedback based on brand guidelines (featured twice at Adobe
                Summit)
              </li>
              <li>
                Used the Pythagorean theorem to determine if rotated object fits
                inside a bounding box for image manipulation
              </li>
              <li>
                Created pipeline tool saving the company over $150,000 a year by
                reducing time to import assets into the game
              </li>
              <li>
                Built virtual reality experiences that were launched at Disney
                theme parks
              </li>
            </ul>
          </div>
          <div className="wrap-up">
            <p>
              Skilled at identifying bottlenecks and delivering the best
              possible experience for customers
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
