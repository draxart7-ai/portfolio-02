import "./app-main.css";
import { AppProvider } from "./state/app/app-provider";
import { AppHeader } from "./components/app-header/app-header";
import { Preview } from "./components/preview/preview";
import { Intro } from "./components/intro/intro";

export const AppMain = () => {
  const previewMode = false;
  if (previewMode) {
    return <Preview />;
  }
  return (
    <AppProvider>
      <div className="AppMain">
        <AppHeader />
        <Intro>{"<Intro />"}</Intro>
        <Intro>{"<Intro />"}</Intro>
        <Intro>{"<Intro />"}</Intro>
        <Intro>{"<Intro />"}</Intro>
        <Intro>{"<Intro />"}</Intro>
        {/* <div className="About">{"<About />"}</div>
        <div className="Skills">{"<Skills />"}</div>
        <div className="Gallery">{"<Gallery />"}</div>
        <div className="Contact">{"<Contact />"}</div> */}
      </div>
    </AppProvider>
  );
};
