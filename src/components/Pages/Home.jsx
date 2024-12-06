import { useState, useEffect } from 'react';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import slider4 from '../../assets/slider4.jpg';

import OurProgress from './subpages/OurProgress';
import CourseHome from '../CourseHome';
import UpcomingEvents from '../UpcomingEvents';
import Testimonials from '../Testimonials';
import GalleryCarousel from '../GalleryCarousel';
import HomeCarousel from '../HomeCarousel';
import AboutInsi from './subpages/Aboutinsi';




const Home = () => {
  const slides = [slider1, slider2, slider3, slider4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* <div className="relative w-full h-[200px] md:h-[500px] sm:h-[330px] mx-auto overflow-hidden">
        
        <div
          className="flex items-center transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="flex-shrink-0 w-full h-full object-cover"
            />
          ))}
        </div>

        
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition duration-300 z-20 hidden sm:block"
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>

       
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition duration-300 z-20 hidden sm:block"
          onClick={handleNext}
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>

       
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

       
        <div className="absolute bottom-0  flex flex-col sm:flex-row  sm:space-y-0 w-full">
          <div className="bg-blue-500 text-white h-[30px] sm:h-[50px] sm:w-[150px] w-full flex justify-center items-center hover:bg-blue-700 transition duration-300">
            <Link to="/admissions" className="flex items-center justify-center">
              <LuGraduationCap /> Admissions
            </Link>
          </div>
          <div className="bg-green-500 text-white h-[30px] sm:h-[50px] sm:w-[150px] w-full flex justify-center items-center hover:bg-green-700 transition duration-300">
            <Link to="/courses" className="flex items-center justify-center">
              Courses
            </Link>
          </div>
          <div className="bg-red-500 text-white h-[30px] sm:h-[50px] sm:w-[150px] w-full flex justify-center items-center hover:bg-red-700 transition duration-300">
            <Link to="/infrastructure" className="flex items-center justify-center">
              <BsBuildings /> Infrastructure
            </Link>
          </div>
        </div>


      </div> */}
     <HomeCarousel/>
      <div>
        <AboutInsi />
        <CourseHome />
        {/* <Newsevent /> */}
        {/* <Facility /> */}
        {/* <StudentSpeak /> */}
        <OurProgress />
        <UpcomingEvents/>
        <GalleryCarousel/>
        <Testimonials/>
        
      </div>


    </>

  );
};

export default Home;
