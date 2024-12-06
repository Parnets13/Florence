import React from 'react'
import download from './../assets/download.png';
import DoubleUnderline from './animata/card/DoubleUnderline';

const Application = () => {
  return (
    <div className='px-[3vw] my-4'>
      <DoubleUnderline className="my-8"><h1 className='alfa-slab text-3xl text-center my-2 text-[#89216b]'>Application</h1></DoubleUnderline>
     <div className='flex items-center'>
        <h1 className='text-2xl alfa-slab w-60'>1.Nursing Course</h1>
        <img src={download} alt="" />
     </div>
     <div className='flex items-center'>
        <h1 className='text-2xl alfa-slab w-60'>2.Physiotherapy</h1>
        <img src={download} alt="" />
     </div>
    </div>
  )
}

export default Application