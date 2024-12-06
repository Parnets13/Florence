import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import NursingCourse from './data/NursingData.jsx';
import PhysiotherapyCourse from './data/PhysiotherapyCourses.jsx';
import GithubCardSkew from './animata/card/GithubCardSkew.jsx';
import DoubleUnderline from './animata/card/DoubleUnderline.jsx';



const CourseHome = () => {
    return (
        <div className='px-[3vw]'>
            <div>
                <DoubleUnderline className="my-8"><h1 className='alfa-slab text-3xl text-center my-2 text-[#89216b]'>Nursing Programs at Florence Group of Institution</h1></DoubleUnderline>
                <p className='open-sans'>The Nursing Programs at the Florence Group of Institutions aim to develop skilled and compassionate nursing professionals ready to excel in the healthcare sector. These programs focus on patient care, health education, and disease prevention, with a curriculum that blends theoretical knowledge with hands-on clinical training in areas such as anatomy, pharmacology, medical-surgical nursing, and community health.</p>
                <p>Graduates are equipped to work in hospitals, clinics, community health centers, and specialized care units. The institution emphasizes ethical practice, critical thinking, and holistic patient care, preparing students for diverse roles in the nursing profession.</p>
                <div className=''>
                    <Carousel>
                        <CarouselContent>
                            {NursingCourse.map((course, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <GithubCardSkew name={course.name} image={course.image} description={course.description} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className=' top-0 left-[92%] text-[#f8841e] bg-white border border-[#f8841e]' />
                        <CarouselNext className=' top-0 right-5 text-[#f8841e] bg-white border border-[#f8841e]' />
                    </Carousel>
                </div>
            </div>

            <div>
                <DoubleUnderline className="my-8"><h1 className='alfa-slab text-3xl text-center my-2 text-[#89216b]'>Physiotherapy Programs at Florence Group of Institution</h1></DoubleUnderline>
                <p>The Physiotherapy Programs at the Florence Group of Institutions are designed to train students in the science of movement and rehabilitation. These programs focus on diagnosing and treating physical impairments, improving mobility, and enhancing quality of life through therapeutic techniques. The curriculum combines classroom learning with extensive clinical practice in areas such as anatomy, biomechanics, exercise therapy, and electrotherapy.</p>
                <p>Graduates are prepared for careers in hospitals, sports rehabilitation centers, private clinics, and wellness industries. The institution emphasizes practical skills, research, and holistic patient care, fostering competent and compassionate physiotherapy professionals.</p>
                <div>
                    <Carousel>
                        <CarouselContent>
                            {PhysiotherapyCourse.map((course, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <GithubCardSkew name={course.name} image={course.image} description={course.description} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className=' top-0 left-[92%] text-[#f8841e] bg-white border border-[#f8841e]' />
                        <CarouselNext className=' top-0 right-5 text-[#f8841e] bg-white border border-[#f8841e]' />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default CourseHome