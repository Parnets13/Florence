import React, { useState } from 'react'

import DoubleUnderline from './animata/card/DoubleUnderline';
import { CircleX, MoveLeft, MoveRight, X } from 'lucide-react';
import gallery1 from './../assets/gallery1.jpg';
import gallery2 from './../assets/gallery2.jpg';
import gallery3 from './../assets/gallery3.jpg';
import gallery4 from './../assets/gallery4.jpg';
import gallery5 from './../assets/gallery5.jpg';
import gallery6 from './../assets/gallery6.jpg';
import gallery7 from './../assets/gallery7.jpg';
import gallery8 from './../assets/gallery8.jpg';
import gallery9 from './../assets/gallery9.jpg';
import gallery10 from './../assets/gallery10.jpg';
import gallery11 from './../assets/gallery11.jpg';
import gallery12 from './../assets/gallery12.jpg';
import gallery13 from './../assets/gallery13.jpg';
import gallery14 from './../assets/gallery14.jpg';
import gallery15 from './../assets/gallery15.jpg';
import gallery16 from './../assets/gallery16.jpg';










const Gallery = () => {
    const images =
        [{ src: gallery1, alt: 'Image 1' },
        { src: gallery2, alt: 'Image 2' },
        { src: gallery3, alt: 'Image 3' },
        { src: gallery4, alt: 'Image 3' },
        { src: gallery5, alt: 'Image 3' },
        { src: gallery6, alt: 'Image 3' },
        { src: gallery7, alt: 'Image 3' },
        { src: gallery8, alt: 'Image 3' },
        { src: gallery9, alt: 'Image 3' },
        { src: gallery10, alt: 'Image 3' },
        { src: gallery11, alt: 'Image 3' },
        { src: gallery12, alt: 'Image 3' },
        { src: gallery13, alt: 'Image 3' },
        { src: gallery14, alt: 'Image 3' },
        { src: gallery15, alt: 'Image 3' },
        { src: gallery16, alt: 'Image 3' }]

    const [isOpen, setIsOpen] = useState(false); const [currentImage, setCurrentImage] = useState(null); const [currentIndex, setCurrentIndex] = useState(0); const openModal = (index) => { setCurrentIndex(index); setCurrentImage(images[index]); setIsOpen(true); }; const closeModal = () => { setIsOpen(false); }; const showPrevImage = (event) => { event.stopPropagation(); const index = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; setCurrentIndex(index); setCurrentImage(images[index]); };
    const showNextImage = (event) => { event.stopPropagation(); const index = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; setCurrentIndex(index); setCurrentImage(images[index]); };

    return (
        <div className='px-[3vw]'>
           
           <DoubleUnderline className="my-10 "> <h1 className='alfa-slab text-3xl text-center my-2 text-[#89216b]'>Gallery</h1></DoubleUnderline>

            <div className="bg-gray-100 p-8 ">
                <div id="gallery" className="grid grid-cols-3 gap-4">
                    {images.map((image, index) => (<img key={index} src={image.src} alt={image.alt} className="w-full h-auto cursor-pointer rounded-md" onClick={() => openModal(index)} />))}
                </div> {isOpen && (<div id="modal" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[10000]" onClick={closeModal}>
                    <button id="close" className="absolute top-4 right-4 text-white bg-[#89216b] rounded-full" onClick={closeModal}><X /></button>
                    <button id="prev" className="absolute left-4 text-white p-2" onClick={showPrevImage}><MoveLeft className='text-white bg-[#89216b] rounded-full' /></button>
                    <img id="modal-img" src={currentImage.src} alt={currentImage.alt} className="max-w-full max-h-full" />
                    <button id="next" className="absolute right-4 text-white p-2" onClick={showNextImage}><MoveRight className='text-white bg-[#89216b] rounded-full' /></button> </div>)}
            </div>


        </div>

    )
}

export default Gallery