import "./app-main.css";
import { AppHeader } from "./components/app-header/app-header";
import { Preview } from "./components/preview/preview";
import { Intro } from "./components/intro/intro";
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Skills } from "./components/skills/skills";
import { Separator } from "./components/separator/separator";

import { SkillsProvider } from "./state/skills/skills-provider";
import { useAppContext } from "./state/app/app-context";
export const AppMain = () => {
  const previewMode = false;
  const { isScrollEnabled } = useAppContext();
  if (previewMode) {
    return <Preview />;
  }

  return (
    <div className={`AppMain ${!isScrollEnabled ? "no-scroll" : ""} `}>
      <AppHeader />
      <div className="section-container">
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
      </div>
    </div>
  );
};
