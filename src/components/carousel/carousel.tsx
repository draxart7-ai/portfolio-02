import { SetStateAction, useState } from "react";
import { ArrowLeftSvg } from "../../assets/svgs/arrow-left-svg";
import { ArrowRightSvg } from "../../assets/svgs/arrow-right-svg";

import "./carousel.css";

interface CarouselProps {
  media: string[];
}
export const Carousel = ({ media }: CarouselProps) => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const mediaElements = media.map((src, index) => {
    return (
      <img
        className={index === selectedSlide ? "slide" : "slide inactive"}
        key={index}
        src={src}
        alt={`Carousel item ${index + 1}`}
      />
    );
  });

  const handleIndicatorSelect = (index: SetStateAction<number>) => {
    setSelectedSlide(index);
  };
  const indicatorElements = media.map((_, index) => {
    return (
      <div
        onClick={() => handleIndicatorSelect(index)}
        className={index === selectedSlide ? "indicator" : "indicator inactive"}
      />
    );
  });

  const handleNext = () => {
    setSelectedSlide(
      selectedSlide === media.length - 1 ? 0 : selectedSlide + 1,
    );
  };

  const handleBack = () => {
    setSelectedSlide(
      selectedSlide === 0 ? media.length - 1 : selectedSlide - 1,
    );
  };

  return (
    <div className="Carousel">
      {mediaElements}
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
      <div className="indicators">{indicatorElements}</div>
    </div>
  );
};
