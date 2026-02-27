import "./app-main.css";
import { AppProvider } from "./state/app/app-provider";
import { AppHeader } from "./components/app-header/app-header";
import { Preview } from "./components/preview/preview";

export const AppMain = () => {
  const previewMode = true;
  if (previewMode) {
    return <Preview />;
  }
  return (
    <AppProvider>
      <div className="AppMain">
        <div className="Header">
          <AppHeader />
        </div>
        <div className="Intro">{"<Intro />"}</div>
        <div className="About">{"<About />"}</div>
        <div className="Skills">{"<Skills />"}</div>
        <div className="Gallery">{"<Gallery />"}</div>
        <div className="Contact">{"<Contact />"}</div>
      </div>
    </AppProvider>
  );
};
