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






const AboutOverview = () => {
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
        < >

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
                        <DoubleUnderline className="my-8"><h1 className='alfa-slab text-3xl text-center my-2 text-[#89216b]'>About Us - Overview</h1></DoubleUnderline>
                        <img src={slider1} alt="" className="w-80 border-4 border-[#f8841e] float-right ml-4 mb-4" /> <div className=" text-justify"> <p> Florence Group of Institutions is run by Devanahalli Rural Education Trust (Regd.), which was established in the year 1984. The theme of the Trust is good education with strict discipline. Positive work culture is a must to maintain standard & reputation of an institution. Our institution has maintained a good track record for the past several years. </p> <p className="mt-4"> Our institution prepares students to become ‘A grade’ professionals. We are proud to say that most of our former students are successfully placed in various parts of the world. Founder Mr. C. Mallikarjuna is the force behind Devanahalli Rural Education Trust. He is highly qualified and experienced person with the intention of developing quality institutions to provide excellent coaching to the students. </p>
                        </div>
                        <DoubleUnderline className="my-8"><h1 className='alfa-slab text-3xl text-center my-2 text-[#89216b]'>why florence group of institution ?</h1></DoubleUnderline>

                        <div className=" text-justify">
                            {florenceData.map((item,index) => (<div key={item.id} className="mb-4 flex gap-3 justify-start">
                                <h1 className="text-xl font-bold">{index+1}. </h1>
                                <h2 className="text-lg font-bold">{item.title}:<span className='text-md text-gray-700 font-normal'> {item.description}</span></h2>
                                </div>))}
                        </div>
                    </div>

                    <div
                        className="w-full lg:w-[25%] rounded-md sticky top-[100px] z-0 h-[400px] flex flex-col space-y-3 bg-[#89216b] justify-center items-center"
                       
                    >
                        <Link to='/about-overview'
                            className="backdrop-blur-lg bg-white bg-opacity-40 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center  border border-[#89216b]"
                        >
                            About Overview
                        </Link>
                        <Link to='/about-campus'
                            className="backdrop-blur-lg bg-white bg-opacity-10 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center"
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

        </>
    )
}

export default AboutOverview