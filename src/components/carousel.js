import React, { useEffect, useState } from 'react'
import "../styles/carousel.css"
import useInterval from 'use-interval';

const Carousel = ({ images }) => {

    const [currentImg, setCurrentImg] = useState(0);

    const nextImage = () => {
        setCurrentImg(currentImg === images.length-1 ? 0 : currentImg+1)
    }

    useInterval(() => {
        nextImage();
    }, 3000)


  return (
    <div className="carousel">
        {images.map((item, index) => {
            return(
                <div className = { index === currentImg ? "slide active" : "slide"}
                    key = { index }>
                        {index === currentImg && (<img className="carousel-image" src={item.image} alt={item.alt}/>)} 
                </div>
            )
        })}
    </div>
  )
}

export default Carousel