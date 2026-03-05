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
              Empower people through creating intuitive frictonless software
            </p>
            <p className="title">Software Developer</p>
            <p>
              I have been a software developer for the last 10years. Main
              achievements:
              <br />- Adobe: Inventor of the Ai Reviewer
              <br />- Developing Virtual Reality
              <br />- Developing Virtual Reality
            </p>
            <p className="title">Technical Artist </p>
            <p>
              Placeholder! in focused work, where efficiency is the only real
              measure of progress. I seek the clarity of a well ordered mind and
              a task executed with precision.
            </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",

              padding: "0 20px",
              gap: "8px",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "50px",
                width: "100%",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                EA
              </div>
              <div
                style={{
                  fontSize: "16px",
                }}
              >
                Games
              </div>
            </div>
            <div
              style={{
                height: "50px",
                width: "100%",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Adobe
              </div>
              <div
                style={{
                  fontSize: "16px",
                }}
              >
                Software
              </div>
            </div>
            <div
              style={{
                height: "50px",
                width: "100%",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Void
              </div>
              <div
                style={{
                  fontSize: "16px",
                }}
              >
                VR
              </div>
            </div>
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
