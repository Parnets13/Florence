import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Testimonial from './data/Testimonial.jsx';
import DoubleUnderline from './animata/card/DoubleUnderline.jsx';



const Testimonials = () => {
    return (
        <div className='px-[3vw] mb-10'>
           <DoubleUnderline className="my-10 "> <h1 className='alfa-slab text-3xl text-center my-2 text-[#89216b]'>Students talk about Florence Institute</h1></DoubleUnderline>
            <div className=''>
                <Carousel>
                    <CarouselContent>
                        {Testimonial.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex p-3 flex-col space-y-3">
                                           <h1 className='text-sm'>{item.feedback}</h1>
                                           <div className='flex gap-5 items-center'>
                                            <img src={item.avatar} alt="" className='rounded-full size-16'/>
                                            <div>
                                                <h3 className='font-bold'>{item.name}</h3>
                                                <p className='text-gray-500'>{item.course}</p>
                                            </div>
                                           </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className=' top-0 left-[92%] text-[#f8841e] bg-white border border-[#f8841e]' />
                    <CarouselNext className=' top-0 right-5 text-[#f8841e] bg-white border border-[#f8841e]' />
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials