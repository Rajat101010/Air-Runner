import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/our_experties_components/our_experties.css";
import "../../../components/css/about_us_components/about_us.css";
import { Link } from "react-router-dom";

import { AboutUs_Description } from '../description/description'

import { TbInfoHexagonFilled } from "react-icons/tb";

import { PiAirplaneInFlightFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

import about_image_1 from '../../../assets/about_pictures/1.webp'
import about_image_2 from '../../../assets/about_pictures/2.webp'
import about_image_3 from '../../../assets/about_pictures/3.webp'
import about_image_4 from '../../../assets/about_pictures/4.webp'
import about_image_5 from '../../../assets/about_pictures/5.webp'
import about_image_6 from '../../../assets/about_pictures/6.webp'

function AboutUS() {
    return (
        <main>
            <div className='our_expertise__page_parent'>
                <div className="our_expertise_title">
                    <font className='home_title_font'>
                        <div className="our_expertise_title_title">
                            <div>
                                <TbInfoHexagonFilled />
                            </div>
                            <div>
                                &nbsp;About Us
                            </div>
                        </div>
                    </font>
                    <font className='home_description_font'>
                        <p className="truncate-2 our_expertise_description_paragraph">
                            {AboutUs_Description}
                        </p>
                    </font>
                </div>
                <div className="highlights">
                    <div className="highlights_divs">
                        <div className="highlights_icons_div">
                            <font className='highlights_icons'>
                                <PiAirplaneInFlightFill />
                            </font>
                        </div>
                        <div className="highlights_divs_mobile">
                            <div className="highlights_title_top">
                                <font className='highlights_title_font'>
                                    10M
                                </font>
                            </div>
                            <div>
                                <font className='highlights_description_font'>
                                    Total Flights
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="highlights_divs">
                        <div className="highlights_icons_div">
                            <font className='highlights_icons'>
                                <FaUsers />
                            </font>
                        </div>
                        <div className="highlights_divs_mobile">
                            <div className="highlights_title_top">
                                <font className='highlights_title_font'>
                                    50M
                                </font>
                            </div>
                            <div>
                                <font className='highlights_description_font'>
                                    Happy Passenger
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="highlights_divs">
                        <div className="highlights_icons_div">
                            <font className='highlights_icons'>
                                <FaAward />
                            </font>
                        </div>
                        <div className="highlights_divs_mobile">
                            <div className="highlights_title_top">
                                <font className='highlights_title_font'>
                                    80%
                                </font>
                            </div>
                            <div>
                                <font className='highlights_description_font'>
                                    Market Share
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="highlights_divs">
                        <div className="highlights_icons_div">
                            <font className='highlights_icons'>
                                <FaPlane />
                            </font>
                        </div>
                        <div className="highlights_divs_mobile">
                            <div className="highlights_title_top">
                                <font className='highlights_title_font'>
                                    800
                                </font>
                            </div>
                            <div>
                                <font className='highlights_description_font'>
                                    Total Aircrafts
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="highlights_divs">
                        <div className="highlights_icons_div">
                            <font className='highlights_icons'>
                                <FaUserTie />
                            </font>
                        </div>
                        <div className="highlights_divs_mobile">
                            <div className="highlights_title_top">
                                <font className='highlights_title_font'>
                                    78 K
                                </font>
                            </div>
                            <div>
                                <font className='highlights_description_font'>
                                    Crew Members
                                </font>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our_expertise__page_content">
                    <Link to="/" className="no-highlight">
                        <div className="our_expertise_content_individual no-highlight">
                            <img
                                src={about_image_1}
                                alt="about"
                                className='our_experties_image'
                                loading="lazy"
                            />
                            <font className='our_expertise_individual_title_font'>
                                Company Overview
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="our_expertise_content_individual no-highlight">
                            <img
                                src={about_image_2}
                                alt="about"
                                className='our_experties_image'
                                loading="lazy"
                            />
                            <font className='our_expertise_individual_title_font'>
                                Fleet Information
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="our_expertise_content_individual no-highlight">
                            <img
                                src={about_image_3}
                                alt="about"
                                className='our_experties_image'
                                loading="lazy"
                            />
                            <font className='our_expertise_individual_title_font'>
                                Cargo Information
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="our_expertise_content_individual no-highlight">
                            <img
                                src={about_image_4}
                                alt="about"
                                className='our_experties_image'
                                loading="lazy"
                            />
                            <font className='our_expertise_individual_title_font'>
                                Crew Member
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="our_expertise_content_individual no-highlight">
                            <img
                                src={about_image_5}
                                alt="about"
                                className='our_experties_image'
                                loading="lazy"
                            />
                            <font className='our_expertise_individual_title_font'>
                                Safety standards
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="our_expertise_content_individual no-highlight">
                            <img
                                src={about_image_6}
                                alt="about"
                                className='our_experties_image'
                                loading="lazy"
                            />
                            <font className='our_expertise_individual_title_font'>
                                Recognitions
                            </font>
                        </div>
                    </Link>
                </div>
            </div>
        </main >
    );
}

export default AboutUS;