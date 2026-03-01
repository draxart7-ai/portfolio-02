import "./app-main.css";
import { AppProvider } from "./state/app/app-provider";
import { AppHeader } from "./components/app-header/app-header";
import { Preview } from "./components/preview/preview";
import { Intro } from "./components/intro/intro";
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Skills } from "./components/skills/skills";
import { ActiveElementProvider } from "./state/active-element/active-element-provider";

export const AppMain = () => {
  const previewMode = false;
  if (previewMode) {
    return <Preview />;
  }
  return (
    <AppProvider>
      <ActiveElementProvider>
        <div className="AppMain">
          <AppHeader />
          <Intro />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </ActiveElementProvider>
    </AppProvider>
  );
};
