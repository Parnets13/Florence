import React from 'react'
import DoubleUnderline from './animata/card/DoubleUnderline'
import upcomingEvents from './data/Events.jsx';
import { CalendarPlus } from 'lucide-react';
import { Card } from './ui/card';


const Calendar = () => {
  return (
    <div className='px-[3vw]'>
      <DoubleUnderline className="my-8"><h1 className='alfa-slab text-3xl text-center my-2 text-[#89216b]'>Join Our Exciting Event</h1></DoubleUnderline>
     <div className="p-1  flex flex-wrap w-full lg:gap-7 gap-5">
        {upcomingEvents.map((event, index) => (
          <div className='w-full lg:w-[30%]'>
            <Card className='p-3'>
              <span className='text-[#89216b] bg-[#f1e8ee] p-1 rounded-md w-20 text-sm text-center'>{event.tag}</span>
              <h1 className='font-bold'>{event.title}</h1>
              <img src={event.image} alt="" className='h-[250px]' />
              <p className='text-justify text-sm '>{event.description}</p>
              <p className='flex items-center gap-3'><CalendarPlus className='text-[#89216b]' />{event.date}</p>
              {/* <div className='flex justify-end'><button className='text-[#89216b] text-[16px]'>Read More</button></div> */}
            </Card>
          </div>
        ))}
     </div>
    </div>
  )
}

export default Calendar