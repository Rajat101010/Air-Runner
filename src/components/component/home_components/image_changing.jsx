import { useEffect, useState } from "react";
import "../../../components/css/home_components/image_changing.css";

import image_1 from "../../../assets/changing_image_in_home/1.webp";
import image_2 from "../../../assets/changing_image_in_home/2.webp";
import image_3 from "../../../assets/changing_image_in_home/3.webp";
import image_4 from "../../../assets/changing_image_in_home/4.webp";
import image_5 from "../../../assets/changing_image_in_home/5.webp";

const images = [image_1, image_2, image_3, image_4, image_5];

export default function ImageSlider() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        let timeout;

        const interval = setInterval(() => {
            setFade(false);

            timeout = setTimeout(() => {
                setIndex(prev => (prev + 1) % images.length);
                setFade(true);
            }, 300);
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []); // ✅ correct



    return (
        <div className="slider_container">
            <img
                src={images[index]}
                alt="Travel"
                className={`slider_image ${fade ? "" : "fade-out"}`}
            />
        </div>
    );
}