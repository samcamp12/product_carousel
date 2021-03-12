import React, { useState } from 'react';
import Picture from '../Component/picture';

import Draggable from 'react-draggable';

import './carousel.css';

// load 14 sample images
const imgList = [
    process.env.PUBLIC_URL + '/img/bottle01.jpg',
    process.env.PUBLIC_URL + '/img/bottle02.jpg',
    process.env.PUBLIC_URL + '/img/bottle03.jpg',
    process.env.PUBLIC_URL + '/img/bottle04.jpg',
    process.env.PUBLIC_URL + '/img/bottle05.jpg',
    process.env.PUBLIC_URL + '/img/bottle06.jpg',
    process.env.PUBLIC_URL + '/img/bottle07.jpg',
    process.env.PUBLIC_URL + '/img/bottle08.jpg',
    process.env.PUBLIC_URL + '/img/bottle09.jpg',
    process.env.PUBLIC_URL + '/img/bottle10.jpg',
    process.env.PUBLIC_URL + '/img/bottle11.jpg',
    process.env.PUBLIC_URL + '/img/bottle12.jpg',
    process.env.PUBLIC_URL + '/img/bottle13.jpg',
    process.env.PUBLIC_URL + '/img/bottle14.jpg'
]

// create an array for 4 clickable dots
const dots = [0, 1, 2, 3];

const Carousel = () => {

    const [slideIndex, setSlideIndex] = useState(0); 

    const [pictureRight, setPictureRight] = useState(0);

    const slideRightHandler = (index) => { // attached with next button

        if(index < imgList.length/4 - 1){
             setPictureRight(pictureRight + 976); // move the entire gallery to left
             setSlideIndex(slideIndex + 1);         
        }
    }

    const slideLeftHandler = (index) => { // attach with prev button

        if(index > 0){
             setPictureRight(pictureRight - 976);
             setSlideIndex(slideIndex - 1);
        }
    }

    const currentSlideHandler = (currentIndex) => {
        setSlideIndex(currentIndex);
        setPictureRight(976*(currentIndex));
    }

    const listView = imgList.map(img =>  
        <Picture
            key={img} 
            imgURL={img}
            title={img.replace(/^.*[\\/]/, '').split('.').slice(0, -1).join('.')}/>
    )
    
    // set up the clickable dots and make the dots active when clicked
    const dotsView = dots.map(dot => 
        <span 
            key={dot}
            className={dot === slideIndex ? "active" : ''} 
            onClick={() => currentSlideHandler(dot)}
        ></span>
    )
            
    return (
        <section className="section-box">
             <h1>Product Carousel</h1>
            <div className="img-window">
                <div className="container" style={{right: pictureRight}}>
                    {listView}
                </div>
                <div className="prev" onClick={() => slideLeftHandler(slideIndex)}>&#10094;</div>
                <div className="next" onClick={() => slideRightHandler(slideIndex)}>&#10095;</div>
            </div>
            {dotsView}
        </section>
        
    )
}

export default Carousel;