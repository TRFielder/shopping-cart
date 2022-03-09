import { useEffect } from "react";
import "../styles/carousel.css"

const Carousel = () => {

    useEffect(() => {
        const interval = setInterval(() => {
            autoSlides()
        }, 6000);
        return () => clearInterval(interval);
    },[])

    const autoSlides = () => {
        const offset = 1;
        const slides = document.querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if(newIndex < 0) newIndex = slides.children.length -1;
        if(newIndex >= slides.children.length) newIndex = 0;
        
        slides.children[newIndex].dataset.active=true;
        delete activeSlide.dataset.active;
    }
    
    return(
        <section aria-label="Newest Photos">
            <div className="carousel" data-carousel>
                <ul data-slides>
                    <li className="slide" data-active>
                        <img title="Image from Anton Nazaretian on Unsplash" src={require("../images/anton-nazaretian2.jpg")} alt="Ramen #1"></img>
                    </li>
                    <li className="slide">
                        <img title="Image from David Hunter on Unsplash"src={require("../images/david-hunter2.jpg")} alt="Ramen #2"></img>
                    </li>
                    <li className="slide">
                        <img title="Image from 8-Low-Ural on Unsplash"src={require("../images/8-low-ural2.jpg")} alt="Ramen #3"></img>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Carousel