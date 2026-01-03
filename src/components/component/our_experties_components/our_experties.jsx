import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/our_experties_components/our_experties.css";
import { Link } from "react-router-dom";

import { OurExpertise_Description } from '../description/description'

import { AiFillSafetyCertificate } from "react-icons/ai";

import our_experties_image_1 from '../../../assets/our_expertise_pictures/1.webp'
import our_experties_image_2 from '../../../assets/our_expertise_pictures/2.webp'
import our_experties_image_3 from '../../../assets/our_expertise_pictures/3.webp'

function OurExpertise() {
    return (
        <main>
            <div className='our_expertise__page_parent'>
                <div className="our_expertise_title">
                    <font className='home_title_font'>
                        <div className="our_expertise_title_title">
                            <div>
                                <AiFillSafetyCertificate />
                            </div>
                            <div>
                                &nbsp;Our Expertise
                            </div>
                        </div>
                    </font>
                    <font className='home_description_font'>
                        <p className="truncate-2 our_expertise_description_paragraph">
                            {OurExpertise_Description}
                        </p>
                    </font>
                </div>
                <div className="our_expertise__page_content">
                    <Link to="/" className="no-highlight">
                        <div className="our_expertise_content_individual no-highlight">
                            <img
                                src={our_experties_image_1}
                                alt="our experties"
                                className='our_experties_image'
                                loading="lazy"
                            />
                            <font className='our_expertise_individual_title_font'>
                                At the airport
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="our_expertise_content_individual no-highlight">
                            <img
                                src={our_experties_image_2}
                                alt="our experties"
                                className='our_experties_image'
                                loading="lazy"
                            />
                            <font className='our_expertise_individual_title_font'>
                                In the air
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="our_expertise_content_individual no-highlight">
                            <img
                                src={our_experties_image_3}
                                alt="our experties"
                                className='our_experties_image'
                                loading="lazy"
                            />
                            <font className='our_expertise_individual_title_font'>
                                After-Flight Care
                            </font>
                        </div>
                    </Link>
                </div>
            </div>
        </main >
    );
}

export default OurExpertise;