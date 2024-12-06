import React from 'react';
import img1 from './../../../assets/slider1.jpg';
import watermark from './../../../assets/Logo-removebg-preview.png';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DoubleUnderline from '@/components/animata/card/DoubleUnderline';



const AboutInsi = () => {
  return (
    <div className="container mx-auto py-12  shadow-lg hover:shadow-2xl transition-shadow duration-500 px-[3vw] flex flex-col lg:flex-row lg:items-center lg:gap-10 gap-5">
      <div className='w-full lg:w-1/2'>
        <img src={img1} alt="" />
      </div>
      <div className='w-full lg:w-1/2 space-y-3 relative'
      >
        <img src={watermark} alt="" className='absolute opacity-5 -z-10 top-0' />
        <DoubleUnderline><h1 className='text-3xl alfa-slab text-[#89216b] text-center my-2'>About Florence group of Institutions</h1></DoubleUnderline>
        <p className='alfa-slab  text-sm font-medium' >Study! Your Future Is Here!</p>
        <p className='text-sm font-medium open-sans'>Florence Group of Institutions is run by Devanahalli Rural Education Trust (Regd.), which was established in the year 1984. The theme of the Trust is good education with strict discipline. Positive work culture is a must to maintain standard & reputation of an institution. Our institution has maintained a good track record for the past several years.</p>
        <p className=' text-sm font-medium open-sans'>Our institution prepares students to become ‘A grade’ professionals. We are proud to say that most of our former students are successfully placed in various parts of the world. Founder Mr. C. Mallikarjuna is the force behind Devanahalli Rural Education Trust. He is highly qualified and experienced person with the intention of developing quality institutions to provide excellent coaching to the students.</p>
        <Link to='/aboutus/Introduction'><p className='flex gap-2 alfa-slab items-center text-[12px] group  cursor-pointer my-3'>More about us <FaLongArrowAltRight className='group-hover:mx-1 duration-300 ease-in-out' /></p></Link>
      </div>
    </div>
  );
};

export default AboutInsi;
