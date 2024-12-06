import chairman from './../assets/DSC_6817-449x300.jpg';
import president from './../assets/dire-1.png';
import director from './../assets/Mr_Chandan-2.jpg';
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
import DoubleUnderline from './animata/card/DoubleUnderline';

const Message = () => {
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
                        <DoubleUnderline><h1 className='text-3xl alfa-slab text-[#89216b] text-center my-2'>Message</h1></DoubleUnderline>
                        <div className='pt-4'>
                            <h3 className='alfa-slab text-lg my-3'>Chairman</h3>
                            <div className='flex lg:items-center gap-10 flex-col lg:flex-row'>
                                <img src={chairman} alt="" className='w-96 rounded-md' />
                                <div className='space-y-3'>
                                    <p className='open-sans  text-sm'>Our vision is to develop young minds in a learning environment of high academic ambience by synergizing spiritual values and technological competence. Our teaching team comprises of specialists in the different fields and those who are involved in significant research.</p>
                                    <p className='open-sans  text-sm'>It is indeed a matter of privilege to us that we have commenced post graduate programmes in Nursing & Physiotherapy.</p>
                                    <p className='open-sans  text-sm'>We hope to have many more paramedical courses in near future.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='alfa-slab text-lg my-3'>President</h3>
                            <div className='flex lg:items-center gap-10 flex-col lg:flex-row order-2 lg:order-1'>
                                <div className='space-y-3'>
                                    <p className='open-sans  text-sm'>Florence Group of Institution was started with a view to promote general  and professional education for needy rural community..</p>
                                    <p className='open-sans  text-sm'>We believe in true  service and education and bring out qualified students.</p>
                                    <p className='open-sans  text-sm'>We have got adequate infrastructure and other modern facilities for quality education of our students.</p>
                                </div>
                                <img src={president} alt="" className='w-96 rounded-md order-1 lg:order-2' />
                            </div>
                        </div>
                        <div>
                            <h3 className='alfa-slab text-lg my-3'>Director</h3>
                            <div className='flex lg:items-center gap-10 flex-col lg:flex-row'>
                                <img src={director} alt="" className='w-96 rounded-md' />
                                <div className='space-y-3'>
                                    <p className='open-sans  text-sm'>Our institution prepares young generation for first level positions in community and institutional service. Furthermore we have the foundation for continuing professional development and post graduate study. Our team focuses on providing knowledge to the students about the basic concepts and recent happenings in the nursing & physiotherapy professions..</p>
                                </div>
                            </div>
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
                            className="backdrop-blur-lg bg-white bg-opacity-10 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center "
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
                            className="backdrop-blur-lg bg-white bg-opacity-40 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center   border border-[#89216b]"
                        >
                            Message
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message