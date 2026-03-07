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
            <p className="title">Mission </p>
            <p>
              Empower people through creating intuitive frictionless software
            </p>
            <p className="title">Senior Software Developer</p>
            <p>
              Over 9 years as Software Developer and 8 years as Technical Artist
              my main achievemtns have been:
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
                Created pipeline tool saving company over $150,000 by reducing
                time to import assets into the game
              </li>
            </ul>
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
            <a
              href="https://www.google.com/maps/place/Salt+Lake+City,+UT/"
              className="address"
              target="_blank"
            >
              <div className="city">Salt Lake City, Utah</div>
              <div className="country">United States of America</div>
            </a>
          </div>
        </Card>
      </div>
      <div className="more">
        <Card>
          <div className="container">
            <div className="trait-card">
              <div className="title">Curious</div>
              <div className="content">Continuously exploring and learning</div>
            </div>
            <div className="trait-card">
              <div className="title">Adaptable</div>
              {/* <div className="content">
                Softare, VR, to video games each a differnt ecosystem
              </div> */}
            </div>
            <div className="trait-card">
              <div className="title">Artistic</div>
              {/* <div className="content">
                I have a keen eye to spot the littlest details
              </div> */}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
