import { useState, useEffect } from "react";

export const Carousel = () => {
  const slides = [
    "/src/assets/sw-home.jpeg",
    "/src/assets/sw-home1.jpeg",
    "/src/assets/sw-home2.jpeg",
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex"
        style={{
          transition: "transform 1s ease-in-out",
          transform: `translateX(-${currentSlideIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className="w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};
