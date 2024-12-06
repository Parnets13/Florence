// <div className='px-[3vw]'>
//     <h1>Nursing</h1>
//     <div className='flex gap-10'>
//         <img src={data.principal.image} alt="" className='float left h-60' />
//         <div className='space-y-3'>
//             <div>
//                 <p>Name: {data.principal.name}</p>
//                 <p>Qualification: {data.principal.qualification}</p>
//                 <p>Designation: {data.principal.designation}</p>
//                 <p>Experience: {data.principal.experienceYears} Years</p>
//                 <p>Contact No.: {data.principal.contactNo}</p>
//             </div>
//             <p className='font-serif'>{data.principal.message}</p>
//         </div>
//     </div>
//     <div className='space-y-2 mt-3'>
//         <blockquote>{data.principal.quote}</blockquote>
//         <p>{data.principal.additionalMessage}</p>
//     </div>
//     <h2 className='text-2xl my-3'>Academics</h2>
//     <ul> {data.academics.map((item, index) => (
//         <li key={index}>{item}</li>))}
//     </ul>
//     <h2 className='text-2xl my-3'>Training Classes</h2>
//     <ul> {data.trainingClasses.map((item, index) => (<li key={index}>{item}</li>))}
//     </ul>
//     <h2 className='text-2xl my-3'>Courses</h2>


//     <Table className='lg:w-[60%] w-full rounded-md'> <TableCaption>A list of the offered courses and their details.</TableCaption> <TableHeader> <TableRow className='bg-[#89216b] '> <TableHead className="w-[100px] text-white">Sl.No.</TableHead> <TableHead className='text-white'>Courses</TableHead> <TableHead className='text-white'>Duration</TableHead> </TableRow> </TableHeader> <TableBody> {data.courses.details.map((course, index) => (<React.Fragment key={index}> <TableRow> <TableCell>{course.slNo}</TableCell> <TableCell>{course.course}</TableCell> <TableCell>{course.duration}</TableCell> </TableRow> {course.specialties && (<TableRow> <TableCell colSpan="3">Specialties Offered:</TableCell> </TableRow>)} {course.specialties && course.specialties.map((specialty, idx) => (<TableRow key={idx}> <TableCell></TableCell> <TableCell>{idx + 1}) {specialty}</TableCell> <TableCell></TableCell> </TableRow>))} </React.Fragment>))} </TableBody> </Table>

// </div>

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
import principalData from './data/PrincipalData.jsx';


const Principal = () => {
   const slides = [slider1, slider2, slider3, slider4];
   const [currentIndex, setCurrentIndex] = useState(0);
   const { principal } = principalData;
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
                  {/* <DoubleUnderline><h1 className='text-3xl alfa-slab text-[#89216b] text-center my-2'>Principal</h1></DoubleUnderline> */}
                  <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md"> <div className="flex flex-col items-center"> <img src={principal.image} alt={principal.name} className="w-48 h-48 object-cover rounded-full mb-4" /> <h2 className="text-2xl font-bold text-gray-800">{principal.name}</h2> <p className="text-sm text-gray-600">{principal.qualification}</p> <p className="text-lg text-gray-700">{principal.designation}</p> <p className="text-sm text-gray-600">Experience: {principal.experienceYears} years</p> <p className="text-sm text-gray-600">Contact: {principal.contactNo}</p> </div> <div className="mt-6"> <p className="text-lg text-gray-700 italic">"{principal.message}"</p> <p className="mt-4 text-gray-800 font-semibold">Quote:</p> <p className="text-gray-700 italic">{principal.quote}</p> </div> <div className="mt-6"> <p className="text-gray-800 font-semibold">Additional Message:</p> <p className="text-gray-700">{principal.additionalMessage}</p> </div> </div>
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
                     className="backdrop-blur-lg bg-white bg-opacity-40 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center"
                  >
                     Principal
                  </Link>
                  <Link to='/message'
                     className="backdrop-blur-lg bg-white bg-opacity-20 p-3 rounded text-white hover:bg-opacity-20 transition w-3/4 text-center   border border-[#89216b]"
                  >
                     Message
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Principal