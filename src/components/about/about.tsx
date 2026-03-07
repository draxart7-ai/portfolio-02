import "./about.css";
import { useRef, useEffect } from "react";
import { useActiveElementContext } from "../../state/active-element/active-element-context";
import { Card } from "../card/card";

export const About = () => {
  const sectionRef = useRef(null);
  const { activeId, register } = useActiveElementContext();
  const visible = activeId === "About" ? "visible" : "invisible";

  useEffect(() => {
    const unregister = register(sectionRef.current);
    return unregister; // Cleanup on unmount
  }, [register]);

  return (
    <div id="About" className={`About ${visible} section`} ref={sectionRef}>
      <div className="title">
        <Card>
          <div className="header">
            <p>About Me</p>
          </div>
        </Card>
      </div>
      <div className="desc">
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
                Over 17 years in Software Developement, Video Games, Virtual
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
                  Built Virtual Reality experiences that were lauched at Disney
                  theme parks
                </li>
              </ul>
            </div>
            <div className="wrap-up">
              <p>
                I will identify bottlenecks and make the best experiece for the
                customers
              </p>
            </div>
          </div>
        </Card>
      </div>
      <div className="picture">
        <Card>
          <div className="container">
            <img src="/images/misc/alan-01.jpg" alt="profile" />
          </div>
        </Card>
      </div>
      <div
        className="bar"
        style={{
          position: "relative",
        }}
      >
        <Card>
          <div className="timeline">
            <div className="connector"></div>
            <div className="entries">
              <div className="entry">
                <img
                  src="/images/companies/art-institute-logo.png"
                  alt="art institute"
                />
              </div>
              <div className="entry">
                <img
                  src="/images/companies/electronic-arts-logo.png"
                  alt="electronic arts logo"
                />
              </div>
              <div className="entry">
                <img src="/images/companies/void-logo.png" alt="void logo" />
              </div>
              <div className="entry">
                <img src="/images/companies/adobe-logo.png" alt="adobe logo" />
              </div>
              <div className="entry">
                <img
                  src="/images/companies/future-logo.png"
                  alt="future logo"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="info">
        <Card>
          <div className="container">
            <div className="address">
              <div className="city">Salt Lake City, Utah</div>
              <div className="country">United States of America</div>
            </div>
          </div>
        </Card>
      </div>
      <div className="more">
        <Card>
          <div className="container">
            <div className="title">Me in 3</div>
            <div className="cards">
              <div className="trait-card">
                <div className="title">Determined</div>
              </div>
              <div className="trait-card">
                <div className="title">Adaptable</div>
              </div>
              <div className="trait-card">
                <div className="title">Creative</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
