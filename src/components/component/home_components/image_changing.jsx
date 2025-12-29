import { useEffect, useState, useRef } from "react";
import "../../../components/css/home_components/image_changing.css";

import image_1 from "../../../assets/changing_image_in_home/1.webp";
import image_2 from "../../../assets/changing_image_in_home/2.webp";
import image_3 from "../../../assets/changing_image_in_home/3.webp";
import image_4 from "../../../assets/changing_image_in_home/4.webp";
import image_5 from "../../../assets/changing_image_in_home/5.webp";

const images = [image_1, image_2, image_3, image_4, image_5];

export default function ImageSlider() {
    const [index, setIndex] = useState(0);
    const trackRef = useRef(null);

    // Clone first image at the end for seamless loop
    const slides = [...images, images[0]];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!trackRef.current) return;

        const track = trackRef.current;

        // Animate slide
        track.style.transition = "transform 0.9s ease-in-out";
        track.style.transform = `translateX(-${index * 100}vw)`;

        // When reaching the cloned slide, jump back to first slide instantly
        if (index === slides.length - 1) {
            setTimeout(() => {
                track.style.transition = "none";
                track.style.transform = "translateX(0)";
                setIndex(0);
            }, 900); // match transition duration
        }
    }, [index, slides.length]);

    return (
        <div className="fullscreen_slider">
            <div className="slider_track" ref={trackRef} style={{ display: "flex", width: `${slides.length * 100}vw` }}>
                {slides.map((img, i) => (
                    <div className="slide" key={i}>
                        <img src={img} alt={`slide-${i}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
