import React from 'react'
import DoubleUnderline from './animata/card/DoubleUnderline';
import ImageCarousel from './animata/ImageCarousel';
import slider1 from './../assets/slider1.jpg';
import slider2 from './../assets/slider2.jpg';
import slider3 from './../assets/slider3.jpg';
import SlideArrowButton from './animata/card/SlideArrowButton';
import { Link } from 'react-router-dom';

const GalleryCarousel = () => {
    const carouselItems = [
        { id: 1, title: 'Image 1', image: slider1 },
        { id: 2, title: 'Image 2', image: slider2 },
        { id: 3, title: 'Image 3', image: slider3 },
        { id: 4, title: 'Image 1', image: slider1 },
        { id: 5, title: 'Image 2', image: slider2 },
        { id: 6, title: 'Image 3', image: slider3 },
        // Add more items as needed
    ];

    return (
        <div className='px-[3vw] mb-10'>
            <div className='flex justify-between items-center'>
                <DoubleUnderline className="my-10 "> <h1 className='alfa-slab text-3xl text-center my-2 text-[#89216b]'>Gallery</h1></DoubleUnderline>
                <div className='flex justify-end'>
                   <Link to='/gallery'> <SlideArrowButton text="View All" primaryColor="#f8841e" className="mt-4" /></Link>
                </div>
            </div>
            <ImageCarousel items={carouselItems} />
        </div>
    )
}

export default GalleryCarousel