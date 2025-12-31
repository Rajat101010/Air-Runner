import "../../../components/css/home_components/our_experties.css";
import { Link } from "react-router-dom";

import { OurExpertise_Description } from '../description/description'

import { AiFillSafetyCertificate } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";

import our_experties_image_1 from '../../../assets/our_expertise_pictures/1.webp'
import our_experties_image_2 from '../../../assets/our_expertise_pictures/2.webp'
import our_experties_image_3 from '../../../assets/our_expertise_pictures/3.webp'

function OurExpertise() {
    return (
        <main>
            <div className='our_expertise_parent'>
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
                <div className="our_expertise_content">
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
                        <div className="our_expertise_content_individual no-highlight our_expertise_content_no_show_on_mobile">
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
                <div className="explore_all_div">
                    <Link to="/our-experties" className="no-highlight">
                        <font className='explore_all_font'>
                            <div className="explore_all_div_after_font">
                                <div>
                                    Explore More Areas of Expertise
                                </div>
                                <div className="explore_all_arrow_class">
                                    <HiArrowUpRight />
                                </div>
                            </div>
                        </font>
                    </Link>
                </div>
            </div>
        </main >
    );
}

export default OurExpertise;