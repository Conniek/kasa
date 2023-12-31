import './Gallery.scss';
import React, { useState } from 'react';

function Gallery(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = props.images;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };
    return(
        <>
        {(images.length > 1) && (
            <div className="Gallery">
                <button className='previous' onClick={prevSlide} disabled={currentSlide === 0}>
                    Previous
                </button>

                <div className='Gallery-pictures'>
                    {images.map((image, index) => (
                        <div className="Gallery-image"  key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
                            <img
                                key={index}
                                src={image}
                                alt={`slide ${index}`}
                            />
                        </div>
                    ))}
                </div>

                <button className='next' onClick={nextSlide} disabled={currentSlide === images.length - 1}>
                    Next
                </button>

                <div className='SlideNumbers'>
                    {currentSlide + 1} / {images.length}
                </div>
            </div>
        )}
        </>
    )   
} 

export default Gallery;