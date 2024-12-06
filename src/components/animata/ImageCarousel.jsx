

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ensure this icon library is available

const ImageCarousel = ({ items: initialItems }) => {
  const [currentIndex, setCurrentIndex] = useState(3);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + initialItems.length) % initialItems.length);
  };

  const visibleIndices = [
    (currentIndex - 3 + initialItems.length) % initialItems.length,
    (currentIndex - 2 + initialItems.length) % initialItems.length,
    (currentIndex - 1 + initialItems.length) % initialItems.length,
    currentIndex,
    (currentIndex + 1) % initialItems.length,
    (currentIndex + 2) % initialItems.length,
    (currentIndex + 3) % initialItems.length,
  ];

  const visibleItems = visibleIndices.map((index) => initialItems[index]);

  return (
    <div className="carousel-container relative h-[350px] w-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-2">
      <div
        onClick={handlePrev}
        className="navigation-item-left absolute left-0 top-[50%] z-20 flex h-10 w-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-lg bg-gray-400 bg-opacity-40 bg-clip-padding backdrop-blur-sm backdrop-filter"
      >
        <ChevronLeft className="text-gray-800" />
      </div>
      <div
        onClick={handleNext}
        className="navigation-item-right absolute right-0 top-[50%] z-20 flex h-10 w-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-lg bg-gray-300 bg-opacity-40 bg-clip-padding backdrop-blur-sm backdrop-filter"
      >
        <ChevronRight className="text-gray-800" />
      </div>
      {visibleItems.map((item, index) => (
        <div
          key={item.id}
          className="absolute left-[50%] top-[20%] z-10 h-[250px] w-[200px] animate-fadeIn rounded-xl bg-gray-500"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            transform:
              index === 3
                ? "translateX(-50%) scale(1.1)"
                : index === 2
                ? "translateX(-170%) rotate(-20deg)"
                : index === 1
                ? "translateX(-240%) rotate(-30deg)"
                : index === 0
                ? "translateX(-310%) rotate(-40deg)"
                : index === 4
                ? "translateX(70%) rotate(20deg)"
                : index === 5
                ? "translateX(150%) rotate(30deg)"
                : "translateX(220%) rotate(40deg)",
            transition: "transform 0.5s ease, filter 0.5s ease",
            filter: index === 3 ? "none" : "blur(4px)",
            zIndex: index === 3 ? 3 : 1,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ImageCarousel;
