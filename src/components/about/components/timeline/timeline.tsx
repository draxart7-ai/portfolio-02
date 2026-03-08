import "./timeline.css";
import { Card } from "../../../card/card";

export const Timeline = () => {
  return (
    <div className="Timeline">
      <Card>
        <div className="timeline-container">
          <div className="connector"></div>
          <div className="entries">
            <div className="entry">
              <div className="container">
                <div className="base">
                  <img
                    src="/images/companies/art-institute-logo.png"
                    alt="art institute"
                  />
                </div>
                <div className="slide-out">
                  <div className="header">
                    <div className="title">Art Institute | Student</div>
                  </div>
                  <div className="desc">Studied BS in 3d art Animation</div>
                </div>
              </div>
            </div>
            <div className="entry">
              <div className="container">
                <div className="base">
                  <img
                    src="/images/companies/electronic-arts-logo.png"
                    alt="electronic arts logo"
                  />
                </div>
                <div className="slide-out">
                  <div className="header">
                    <div className="title">EA Games | Technical Artist</div>
                  </div>
                  <div className="desc">Worked on Sims 3,4 mobile games</div>
                </div>
              </div>
            </div>
            <div className="entry">
              <div className="container">
                <div className="base">
                  <img src="/images/companies/void-logo.png" alt="void logo" />
                </div>
                <div className="slide-out">
                  <div className="header">
                    <div className="title">The Void | Technical Artist</div>
                  </div>
                  <div className="desc">Built virtual reality experiences</div>
                </div>
              </div>
            </div>
            <div className="entry">
              <div className="container">
                <div className="base">
                  <img
                    src="/images/companies/adobe-logo.png"
                    alt="adobe logo"
                  />
                </div>
                <div className="slide-out">
                  <div className="header">
                    <div className="title">Adobe | Software Developer</div>
                  </div>
                  <div className="desc">Building enterprise level software</div>
                </div>
              </div>
            </div>
            <div className="entry">
              <div className="container">
                <div className="base">
                  <img
                    src="/images/companies/future-logo.png"
                    alt="future logo"
                  />
                </div>
                <div className="slide-out">
                  <div className="header">
                    <div className="title">Future</div>
                    <div className="role"></div>
                  </div>
                  <div className="desc">Who knows what the future holds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
