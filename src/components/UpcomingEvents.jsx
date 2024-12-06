import React from 'react'
import UpcomingEvent from './data/Events.jsx';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { CalendarPlus } from 'lucide-react';
import DoubleUnderline from './animata/card/DoubleUnderline.jsx';


const UpcomingEvents = () => {
    return (
        <div className='px-[3vw]'>
            <DoubleUnderline className="my-10">
                <h1 className='alfa-slab text-3xl text-center my-2  text-[#89216b]'>Upcoming Events</h1>
            </DoubleUnderline>
            <div className=''>
                <Carousel>
                    <CarouselContent>
                        {UpcomingEvent.map((event, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex p-2 flex-col space-y-3">
                                            <span className='text-[#89216b] bg-[#f1e8ee] p-1 rounded-md w-20 text-sm text-center'>{event.tag}</span>
                                            <h1 className='font-bold'>{event.title}</h1>
                                            <img src={event.image} alt="" className='h-[250px]' />
                                            <p className='text-justify text-sm '>{event.description}</p>
                                            <p className='flex items-center gap-3'><CalendarPlus className='text-[#89216b]' />{event.date}</p>
                                            {/* <div className='flex justify-end'><button className='text-[#89216b] text-[16px]'>Read More</button></div> */}
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

export default UpcomingEvents