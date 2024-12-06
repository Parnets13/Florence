import React, { useEffect, useState } from 'react'
import slider1 from './../assets/slider1.jpg';
import slider2 from './../assets/slider2.jpg';
import slider3 from './../assets/slider3.jpg';
import slider4 from './../assets/slider4.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { BsBuildings } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import mottoData from './data/MottoData';





const MissionValues = () => {
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

    const { mission, values } = mottoData;

    return (

        <div>
            <div>
                <div className="relative w-full h-[200px] lg:h-[350px] sm:h-[330px] mx-auto overflow-hidden">
                    {/* Slider Images */}
                    <div
                        className="flex items-center transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className="flex-shrink-0 h-[350px] object-cover w-full"
                            />
                        ))}
                    </div>

                    {/* Prev Button */}
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition duration-300 z-20 hidden sm:block"
                        onClick={handlePrev}
                        aria-label="Previous Slide"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Next Button */}
                    <button
                        className="absolute top-[50%] transform -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition duration-300 z-20 hidden sm:block"
                        onClick={handleNext}
                        aria-label="Next Slide"
                    >
                        <FaChevronRight />
                    </button>

                    {/* Dots Navigation */}
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

                    {/* Buttons on Image */}
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


                </div>


            </div>

            <div className="px-[3vw] my-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-[70%]">
                        {/* <div>
                            <h1>Mission</h1>
                            <p>Florence Institution is dedicated to providing a holistic education that fosters intellectual growth, moral integrity, and social responsibility. Our mission is to empower students to become compassionate, knowledgeable, and skilled individuals who contribute positively to society.</p>
                            <h1>Values</h1>
                            <ul>
                                <li><strong>Excellence:</strong>We strive for excellence in all aspects of education and personal development.</li>
                                <li><strong>Integrity:</strong>We uphold honesty, transparency, and ethical behavior in all our endeavors.</li>
                                <li><strong>Respect:</strong>We foster an environment of mutual respect and understanding among students, staff, and the community.</li>
                                <li><strong>Innovation:</strong>We foster an environment of mutual respect and understanding among students, staff, and the community.</li>
                                <li><strong>Community:</strong>We emphasize the importance of community involvement and service to others.</li>
                                <li><strong>Diversity:</strong>We foster an environment of mutual respect and understanding among students, staff, and the community.</li>
                            </ul>
                        </div> */}
                        <h2 className="text-2xl my-4 alfa-slab">Mission</h2> <ul className="list-disc list-inside"> {mission.map((item, index) => (<li key={index} className="my-2">{item}</li>))} </ul> <h2 className="text-2xl my-4 alfa-slab">Values</h2> <ul className="list-disc list-inside"> {values.map((item, index) => (<li key={index} className="my-2">{item}</li>))} </ul>
                    </div>

                    <div
                        className="w-full lg:w-[25%] rounded-md sticky top-[100px] z-0 h-[400px] flex flex-col space-y-3 bg-[#89216b] justify-center items-center"
                       
                    >
                        <Link to='/about-overview'
                            className="backdrop-blur-lg bg-white bg-opacity-10 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center  "
                        >
                            About Overview
                        </Link>
                        <Link to='/about-campus'
                            className="backdrop-blur-lg bg-white bg-opacity-10 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center"
                        >
                            About Campus
                        </Link>
                        <Link to='/mission&values'
                            className="backdrop-blur-lg bg-white bg-opacity-40 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center border border-[#89216b]"
                        >
                            Mission & Values
                        </Link>
                        <Link to='/principal'
                            className="backdrop-blur-lg bg-white bg-opacity-10 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center"
                        >
                            Principal
                        </Link>
                        <Link to='/message'
                            className="backdrop-blur-lg bg-white bg-opacity-10 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center"
                        >
                            Message
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MissionValues