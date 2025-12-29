import { useEffect, useState } from "react";
import "../../../components/css/home_components/image_changing.css";

import image_1 from "../../../assets/changing_image_in_home/1.jpg";
import image_2 from "../../../assets/changing_image_in_home/2.jpg";
import image_3 from "../../../assets/changing_image_in_home/3.jpg";
import image_4 from "../../../assets/changing_image_in_home/4.jpg";
import image_5 from "../../../assets/changing_image_in_home/5.jpg";

const images = [image_1, image_2, image_3, image_4, image_5];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 200); // fade duration
    }, 3000); //image duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider_container">
      <img
        src={images[index]}
        alt="Travel"
        className={`slider_image ${fade ? "fade-in" : "fade-out"}`}
      />
    </div>
  );
}