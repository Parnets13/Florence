import React from 'react'
import DoubleUnderline from './animata/card/DoubleUnderline'
import arrow from './../assets/icons8-advance.gif';
import { Link } from 'react-router-dom';




const GovtOrders = () => {
    return (
        <div className='px-[3vw] my-10'>
            <DoubleUnderline><h1 className='text-3xl alfa-slab text-[#89216b] text-center my-2'>Govt Order Details</h1></DoubleUnderline>
            <p className='my-2'>Florence Group of Institutions has always strived to provide quality education to the society. We take utmost care to consider all the aspects which makes up the learning of the students. Parents can believe in us that their wards are in safe hands at our institutions.</p>
            <DoubleUnderline><h1 className='text-3xl alfa-slab text-[#89216b] text-center my-2'>Government Order Nos. For Nursing</h1></DoubleUnderline>
            <div>
                <h3 className='alfa-slab text-lg my-3'>B.Sc Nursing</h3>
                <div>
                    <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>Govt. Order No. HFW 568 MPS 93 Bangalore, Dated: 06/08/1993 (50 seats)</Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>Govt. Order No. HFW 166 MPS 95 Bangalore, Dated: 12/04/1996 (60 seats)</Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>Govt. Order No. HFW 200 MPS 2003 Bangalore, Dated: 16/12/2003 (75 seats)</Link>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='alfa-slab text-lg my-3'>PC B.Sc Nursing</h3>
                <div>
                    <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>Order No. HFW 110 MPS 2010 Bangalore, Dated: 27/03/2010 (60 seats)</Link>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='alfa-slab text-lg my-3'>M.Sc Nursing</h3>
                <div>
                    <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>Govt. Order No. HFW 452 MPS 2004 Bangalore, Dated: 22/12/2004.</Link>
                    </div>
                  <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>Govt. Order No. HFW 196 MPS 2008 Bangalore, Dated: 28/06/2008.</Link>
                  </div>
                    <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>Govt. Order No. HFW 478 MPS 2006 Bangalore, Dated: 23/05/2006.</Link>
                    </div>
                </div>
            </div>
            <DoubleUnderline><h1 className='text-3xl alfa-slab text-[#89216b] text-center my-2'>Government Order Nos. For Physiotherphy</h1></DoubleUnderline>
            <div>
                <h3 className='alfa-slab text-lg my-3'>MPT</h3>
                <div>
                    <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>Govt. order No. AKK 43 MPS 2004 Bangalore Dated 12.05.2004</Link>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='alfa-slab text-lg my-3'>BPT</h3>
                <div>
                    <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>Govt. order No. HWF/111/ MPS 95,  Bangalore Dated 14.03.1996</Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>Rajiv Gandhi University of Health Sciences, Bangalore</Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>Affiliation Order for all the Physiotherapy Courses</Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={arrow} alt="" className='size-8' />
                        <Link className='hover:underline'>No. ACA/AFF/PT-12/2015-16, dated: 19/11/2015</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GovtOrders