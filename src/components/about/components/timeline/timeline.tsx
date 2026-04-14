import "./timeline.css";
import { Card } from "../../../card/card";
import { useState, useEffect, useRef } from "react";
import { timelineData } from "./timeline-data.ts";

export const Timeline = () => {
  const [activeCard, setActiveCard] = useState<string | null>("");
  const timelineRef = useRef<HTMLInputElement>(null);

  interface handleCardSelectArgs {
    id: string | null;
  }

  const handleCardSelect = ({ id }: handleCardSelectArgs) => {
    if (id === activeCard) {
      setActiveCard("");
    } else {
      setActiveCard(id);
    }
  };

  // Close the entry card when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        timelineRef.current &&
        !timelineRef.current.contains(event.target as Node)
      ) {
        setActiveCard("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const entryCards = timelineData.map((entry) => (
    <div
      key={entry.id}
      className={`entry ${activeCard === entry.id ? "active" : ""}`}
      onClick={() => handleCardSelect({ id: entry.id })}
    >
      <div className="container">
        <div className="base">
          <img src={entry.logo} alt={entry.title} />
        </div>
        <div className="slide-out">
          <div className="header">
            <div className="title">{entry.title}</div>
          </div>
          <div className="desc">{entry.description}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="Timeline" ref={timelineRef}>
      <Card>
        <div className="timeline-container">
          <div className="connector"></div>
          <div className="entries">{entryCards}</div>
        </div>
      </Card>
    </div>
  );
};
