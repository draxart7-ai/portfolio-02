import { ArrowLeftSvg } from "../../assets/svgs/arrow-left-svg";
import { ArrowRightSvg } from "../../assets/svgs/arrow-right-svg";
import { Button } from "../button/button";

import "./carousel.css";

interface CarouselProps {
  media: string[];
}
export const Carousel = ({ media }: CarouselProps) => {
  console.log("Carousel media:", media);

  const mediaElements = media.map((src, index) => {
    console.log(`Creating media element for: ${src}`);
    return <img key={index} src={src} alt={`Carousel item ${index + 1}`} />;
  });

  const handleNext = () => {
    console.log("Next button clicked");
  };

  const handleBack = () => {
    console.log("Back button clicked");
  };

  return (
    <div className="Carousel">
      {/* {mediaElements} */}
      <div className="arrow left">
        <button className="Button" onClick={handleBack}>
          <ArrowLeftSvg />
        </button>
      </div>
      <div className="arrow right">
        <button className="Button" onClick={handleNext}>
          <ArrowRightSvg />
        </button>
      </div>
    </div>
  );
};
