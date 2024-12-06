import React, { useEffect, useState } from 'react'
import slider1 from './../assets/slider1.jpg';
import slider2 from './../assets/slider2.jpg';
import slider3 from './../assets/slider3.jpg';
import slider4 from './../assets/slider4.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { BsBuildings } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FlipCard from './animata/card/Flip-card';
import GithubCardSkew from './animata/card/GithubCardSkew';
import DoubleUnderline from './animata/card/DoubleUnderline';
import florenceData from './data/WhyFlorenceData';
import { Button } from './ui/button';
import physical from './data/PhysicalData.jsx';
import clinical from './data/ClinicalData';
import curricular from './data/CurricularData';
import banner from './../assets/background.svg';



export const AboutCampus = () => {
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


    const [campus, setCampus] = useState("Physical");
    const { title, description, facilities } = physical;
    const { title1, description1, facilities1 } = clinical;
    const { title2, description2, activities } = curricular;

    return (
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

            <div className="px-[3vw] my-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-[70%]">
                        <DoubleUnderline className="my-8"><h1 className='alfa-slab text-3xl text-center my-2 text-[#89216b]'>About Campus</h1></DoubleUnderline>
                        <div className='flex justify-start items-center gap-3 my-3'>
                            <Button className={`bg-white border border-[#f8841e] text-[#f8841e] hover:bg-[#f8841e] hover:text-white ${campus === 'Physical' ? "bg-[#f8841e] text-white" : ""}`} onClick={() => setCampus("Physical")} >Physical</Button>
                            <Button className={`bg-white border border-[#f8841e] text-[#f8841e] hover:bg-[#f8841e] hover:text-white  ${campus === 'Clinical' ? "bg-[#f8841e] text-white" : ""}`} onClick={() => setCampus("Clinical")}>Clinical</Button>
                            <Button className={`bg-white border border-[#f8841e] text-[#f8841e] hover:bg-[#f8841e] hover:text-white ${campus === 'Curricular' ? "bg-[#f8841e] text-white" : ""}`} onClick={() => setCampus("Curricular")}>Co-Curricular & Extra Curricular Activities</Button>
                        </div>
                        <div>
                            {

                                campus === "Physical" ?
                                    <div>
                                        <h1 className='text-2xl alfa-slab my-3'>{title}</h1>
                                        <p>{description}</p>
                                        {Object.entries(facilities).map(([key, value]) => (<div key={key} className="my-4"> <h3 className="text-xl my-2">{key.charAt(0).toUpperCase() + key.slice(1)}</h3> <img src={value.imageUrl} alt={`${key} image`} className="w-full h-auto my-2" /> <p>{value.description}</p> </div>))}
                                    </div> : ""
                            }
                            {
                                campus === "Clinical" ?
                                    <div>
                                        <h1 className='text-2xl alfa-slab my-3'>{title1}</h1>
                                        <p>{description1}</p>
                                        {Object.entries(facilities1).map(([key, value]) => (<div key={key} className="my-4"> <h3 className="text-xl my-2">{key.charAt(0).toUpperCase() + key.slice(1)}</h3> <img src={value.imageUrl} alt={`${key} image`} className="w-full h-auto my-2" /> <p>{value.description}</p> </div>))}
                                    </div> : ""
                            }
                            {
                                campus === "Curricular" ?
                                    <div>
                                        <h1 className='text-2xl alfa-slab my-3'>{title2}</h1>
                                        <p>{description2}</p>
                                        {Object.entries(activities).map(([key, value]) => (<div key={key} className="my-4 font-bold"> <h3 className="text-xl my-2">{key.charAt(0).toUpperCase() + key.slice(1)}</h3> <img src={value.imageUrl} alt={`${key} image`} className="w-full h-auto my-2" /> <p>{value.description}</p> </div>))}
                                    </div> : ""
                            }
                        </div>
                    </div>


                    <div
                        className="w-full lg:w-[25%] rounded-md sticky top-[100px] z-0 h-[400px] flex flex-col space-y-3 bg-[#89216b] justify-center items-center"

                    >
                        <Link to='/about-overview'
                            className="backdrop-blur-lg bg-white bg-opacity-10 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center"
                        >
                            About Overview
                        </Link>
                        <Link to='/about-campus'
                            className="backdrop-blur-lg bg-white bg-opacity-40 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center   border border-[#89216b]"
                        >
                            About Campus
                        </Link>
                        <Link to='/mission&values'
                            className="backdrop-blur-lg bg-white bg-opacity-10 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center"
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
