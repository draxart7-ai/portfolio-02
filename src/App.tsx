import "./App.css";
import { AppProvider } from "./state/app/app-provider";

function App() {
  return (
    <AppProvider>
      <div>
        <div className="header">{"<Header />"}</div>
        <div className="intro">{"<Intro />"}</div>
        <div className="about">{"<About />"}</div>
        <div className="skills">{"<Skills />"}</div>
        <div className="gallery">{"<Gallery />"}</div>
        <div className="contact">{"<Contact />"}</div>
      </div>
    </AppProvider>
  );
}

export default App;
