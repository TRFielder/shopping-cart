import { useEffect } from "react";
import "../styles/carousel.css"

const Carousel = () => {

    useEffect(() => {
        const buttons = document.querySelectorAll("[data-carousel-button]");
        
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const offset = button.dataset.carouselButton === "next" ? 1 : -1;
                const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

                const activeSlide = slides.querySelector("[data-active]");
                let newIndex = [...slides.children].indexOf(activeSlide) + offset;
                if(newIndex < 0) newIndex = slides.children.length -1;
                if(newIndex >= slides.children.length) newIndex = 0;
                
                slides.children[newIndex].dataset.active=true;
                delete activeSlide.dataset.active;
            })
        });
    })

    useEffect(() => {
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
        window.setInterval(autoSlides(), 4);
    },[])


    
    

    return(
        <section aria-label="Newest Photos">
            <div className="carousel" data-carousel>
                <button className="carousel-button prev" data-carousel-button><span>&#8678;</span> </button>
                <button className="carousel-button next" data-carousel-button><span>&#8680;</span></button>
                <ul data-slides>
                    <li className="slide" data-active>
                        <img src={require("../images/anton-nazaretian2.jpg")} alt="Ramen #1"></img>
                    </li>
                    <li className="slide">
                        <img src={require("../images/david-hunter2.jpg")} alt="Ramen #2"></img>
                    </li>
                    <li className="slide">
                        <img src={require("../images/8-low-ural2.jpg")} alt="Ramen #3"></img>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Carousel