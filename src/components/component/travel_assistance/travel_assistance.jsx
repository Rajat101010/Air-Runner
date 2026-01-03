import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/our_experties_components/our_experties.css";
import "../../../components/css/travel_assistance_components/travel_assistance.css";

import { Link } from "react-router-dom";

import { TravelAssistance_Description } from '../description/description'

import { MdAssistantNavigation } from "react-icons/md";

import travel_assistance_image_1 from '../../../assets/travel_assistance_pictures/1.webp';
import travel_assistance_image_2 from '../../../assets/travel_assistance_pictures/2.webp';
import travel_assistance_image_3 from '../../../assets/travel_assistance_pictures/3.webp';
import travel_assistance_image_4 from '../../../assets/travel_assistance_pictures/4.webp';
import travel_assistance_image_5 from '../../../assets/travel_assistance_pictures/5.webp';

function TravelAssistance() {
    return (
        <main>
            <div className='our_expertise__page_parent'>
                <div className="our_expertise_title">
                    <font className='home_title_font'>
                        <div className="our_expertise_title_title">
                            <div>
                                <MdAssistantNavigation />
                            </div>
                            <div>
                                &nbsp;Travel Assistance
                            </div>
                        </div>
                    </font>
                    <font className='home_description_font'>
                        <p className="truncate-2 our_expertise_description_paragraph">
                            {TravelAssistance_Description}
                        </p>
                    </font>
                </div>
                <div className="travel_assistance_page_content">
                    <Link to="/" className="no-highlight">
                        <div className="travel_assistance_page_content_individual travel_assistance_content_individual">
                            <img
                                src={travel_assistance_image_1}
                                alt="travel assistance"
                                className='travel_assistance_image'
                                loading="lazy"
                            />
                            <font className='travel_assistance_individual_title_font'>
                                Baggage
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="travel_assistance_page_content_individual travel_assistance_content_individual">
                            <img
                                src={travel_assistance_image_2}
                                alt="travel assistance"
                                className='travel_assistance_image'
                                loading="lazy"
                            />
                            <font className='travel_assistance_individual_title_font'>
                                Solo Child Travel
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="travel_assistance_page_content_individual travel_assistance_content_individual">
                            <img
                                src={travel_assistance_image_3}
                                alt="travel assistance"
                                className='travel_assistance_image'
                                loading="lazy"
                            />
                            <font className='travel_assistance_individual_title_font'>
                                Medical Care
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="travel_assistance_page_content_individual travel_assistance_content_individual">
                            <img
                                src={travel_assistance_image_4}
                                alt="travel assistance"
                                className='travel_assistance_image'
                                loading="lazy"
                            />
                            <font className='travel_assistance_individual_title_font'>
                                First Time Travel
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="travel_assistance_page_content_individual travel_assistance_content_individual">
                            <img
                                src={travel_assistance_image_5}
                                alt="travel assistance"
                                className='travel_assistance_image'
                                loading="lazy"
                            />
                            <font className='travel_assistance_individual_title_font'>
                                In-Cabin Pet
                            </font>
                        </div>
                    </Link>
                </div>
            </div>
        </main >
    );
}

export default TravelAssistance;