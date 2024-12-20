import React, { useEffect, useState } from "react";
// import WaveReveal from "@/animata/text/wave-reveal";
import { cn } from "@/lib/utils";
import slider1 from './../../assets/slider1.jpg';
import slider2 from './../../assets/slider2.jpg';
import slider3 from './../../assets/slider3.jpg';



const List = ({ item, className, index, activeItem, ...props }) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className,
      )}
      {...props}
    >
      <img
        src={item.image}
        alt={item.title}
        className={cn("h-full w-full object-cover", {
          "blur-[2px]": index !== activeItem,
        })}
      />
      {index === activeItem && (
        <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
          {
            item.title
          }
        </div>
      )}
    </div>
  );
};

const items = [
  {
    image: slider1,
    title: "Admissions",
  },
  {
    image: slider2,
    title: "Courses",
  },
  {
    image: slider3,
    title: "Infrastructure",
  },
];

const Expandable = ({ list = items, autoPlay = true, className }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <div className={cn("flex h-96 w-full gap-1", className)}>
      {list.map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        />
      ))}
    </div>
  );
};

export default Expandable;
