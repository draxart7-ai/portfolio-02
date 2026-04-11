import "./app-main.css";
import { AppProvider } from "./state/app/app-provider";
import { AppHeader } from "./components/app-header/app-header";
import { Preview } from "./components/preview/preview";
import { Intro } from "./components/intro/intro";
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Skills } from "./components/skills/skills";
import { Separator } from "./components/separator/separator";
import { Carousel } from "./components/carousel/carousel";

import { ActiveElementProvider } from "./state/active-element/active-element-provider";
import { SkillsProvider } from "./state/skills/skills-provider";
export const AppMain = () => {
  const previewMode = false;
  if (previewMode) {
    return <Preview />;
  }

  const carouselMedia = [
    "/images/projects/paint-your-picture/paint-your-picture-cover.jpg",
    "/images/projects/paint-your-picture/paint-your-picture-01.jpg",
    "/images/projects/paint-your-picture/paint-your-picture-02.jpg",
    "/images/projects/paint-your-picture/paint-your-picture-03.jpg",
    "/images/projects/paint-your-picture/paint-your-picture-04.jpg",
  ];

  return (
    <AppProvider>
      <ActiveElementProvider>
        <div className="AppMain">
          <AppHeader />
          <div
            className="container"
            style={{
              height: "500px",
              backgroundColor: "#73917a",
              margin: "20px",
              // overflow: "hidden",
            }}
          >
            <Carousel media={carouselMedia}></Carousel>
          </div>
          {/* <div className="section-container">
            <Intro />
            <Separator />
            <About />
            <Separator />
            <SkillsProvider>
              <Skills />
            </SkillsProvider>
            <Separator />
            <Projects />
            <Separator />
            <Contact />
          </div> */}
        </div>
      </ActiveElementProvider>
    </AppProvider>
  );
};
