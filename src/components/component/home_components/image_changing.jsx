import { useEffect, useRef } from "react";
import "../../../components/css/home_components/image_changing.css";

import image_1 from "../../../assets/changing_image_in_home/1.webp";
import image_2 from "../../../assets/changing_image_in_home/2.webp";
import image_3 from "../../../assets/changing_image_in_home/3.webp";
import image_4 from "../../../assets/changing_image_in_home/4.webp";
import image_5 from "../../../assets/changing_image_in_home/5.webp";

const images = [image_1, image_2, image_3, image_4, image_5];

export default function ImageSlider() {
    const sliderRef = useRef(null);
    const indexRef = useRef(1); // start from first real slide
    const transitionDuration = 1000; // ms
    const displayDuration = 3000; // ms

    // Add clones for seamless infinite effect
    const extendedImages = [images[images.length - 1], ...images, images[0]];

    useEffect(() => {
    const slider = sliderRef.current;

    slider.style.transform = `translateX(-100vw)`;

    const interval = setInterval(() => {
        indexRef.current += 1;
        slider.style.transition = `transform ${transitionDuration}ms ease-in-out`;
        slider.style.transform = `translateX(-${indexRef.current * 100}vw)`;

        setTimeout(() => {
            if (indexRef.current === extendedImages.length - 1) {
                slider.style.transition = "none";
                indexRef.current = 1;
                slider.style.transform = `translateX(-100vw)`;
            }
        }, transitionDuration);
    }, displayDuration);

    return () => clearInterval(interval);
}, [extendedImages.length]);


    return (
        <div className="fullscreen_slider">
            <div className="slider_track" ref={sliderRef}>
                {extendedImages.map((img, i) => (
                    <div className="slide" key={i}>
                        <img src={img} alt={`slide-${i}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
