import { SetStateAction, useState } from "react";
import { ArrowLeftSvg } from "../../assets/svgs/arrow-left-svg";
import { ArrowRightSvg } from "../../assets/svgs/arrow-right-svg";
import { FullScreenEnterSvg } from "../../assets/svgs/full-screen-enter-svg";
import { FullScreenExitSvg } from "../../assets/svgs/full-screen-exit-svg copy";

import "./carousel.css";
import { useAppContext } from "../../state/app/app-context";

interface CarouselProps {
  media: string[];
  setIsFullScreen?: React.Dispatch<React.SetStateAction<boolean>>;
  isFullScreen?: boolean;
}
export const Carousel = ({ media }: CarouselProps) => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { toggleScroll } = useAppContext();

  const mediaElements = media.map((src, index) => {
    console.log("media element", src);
    const fileExtension = src
      .split(".")
      .pop()
      ?.toLowerCase();

    if (fileExtension === "mp4") {
      return (
        <video
          key={index}
          controls
          className={index === selectedSlide ? "slide" : "slide inactive"}
        >
          <source src={src} type="video/mp4" />
        </video>
      );
    }

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
        key={index}
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
  const handleFullScreen = () => {
    console.log("handle full screen");
    toggleScroll();
    if (!document.fullscreenElement) {
      // If no element is in fullscreen, request it for the whole document
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message}`,
        );
      });
    } else {
      // Otherwise, exit fullscreen
      document.exitFullscreen().catch((err) => {
        console.error(
          `Error attempting to exit full-screen mode: ${err.message}`,
        );
      });
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`Carousel ${isFullscreen ? "fullscreen" : ""}`}>
      <div className={`slide-container`}>{mediaElements}</div>
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
      <div className="fullscreen-button" onClick={handleFullScreen}>
        {isFullscreen ? (
          <FullScreenExitSvg size="40px" />
        ) : (
          <FullScreenEnterSvg size="40px" />
        )}
      </div>
    </div>
  );
};

/* 

 const carouselMedia = [
    "/images/projects/paint-your-picture/paint-your-picture-cover.jpg",
    "/images/projects/paint-your-picture/paint-your-picture-01.jpg",
    "/images/projects/paint-your-picture/paint-your-picture-02.jpg",
    "/images/projects/paint-your-picture/paint-your-picture-03.jpg",
    "/images/projects/paint-your-picture/paint-your-picture-04.jpg",
  ];

  */
