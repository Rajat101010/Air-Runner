import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/our_experties_components/our_experties.css";
import "../../../components/css/travel_assistance_components/travel_assistance.css";
import "../../../components/css/destination_discovery_components/destination_discovery.css";

import { Link } from "react-router-dom";

import { DestinationDiscovery_Description } from '../description/description'

import { MdMyLocation } from "react-icons/md";

import { Bali_Description } from '../description/description'
import { Paris_Description } from '../description/description'
import { Rome_Description } from '../description/description'
import { Bangkok_Description } from '../description/description'
import { Dubai_Description } from '../description/description'
import { Kyoto_Description } from '../description/description'
import { London_Description } from '../description/description'

import destination_discovery_image_1 from '../../../assets/destination_discovery_pictures/1.webp';
import destination_discovery_image_2 from '../../../assets/destination_discovery_pictures/2.webp';
import destination_discovery_image_3 from '../../../assets/destination_discovery_pictures/3.webp';
import destination_discovery_image_4 from '../../../assets/destination_discovery_pictures/4.webp';
import destination_discovery_image_5 from '../../../assets/destination_discovery_pictures/5.webp';
import destination_discovery_image_6 from '../../../assets/destination_discovery_pictures/6.webp';
import destination_discovery_image_7 from '../../../assets/destination_discovery_pictures/7.webp';

function DestinationDiscovery() {
    return (
        <main>
            <div className='our_expertise__page_parent'>
                <div className="our_expertise_title">
                    <font className='home_title_font'>
                        <div className="our_expertise_title_title">
                            <div>
                                <MdMyLocation />
                            </div>
                            <div>
                                &nbsp;Destination Discovery
                            </div>
                        </div>
                    </font>
                    <font className='home_description_font'>
                        <p className="truncate-2 our_expertise_description_paragraph">
                            {DestinationDiscovery_Description}
                        </p>
                    </font>
                </div>
                <div className="destination_description_page_content">
                    <Link to="/" className="no-highlight">
                        <div className="destination_description_page_content_individual">
                            <div>
                                <img
                                    src={destination_discovery_image_1}
                                    alt="destination discovery"
                                    className='destination_discovery_page_image'
                                    loading="lazy"
                                />
                            </div>
                            <div className="destination_description_page_content_individual_border">
                                <div className="destination_description_page_content_individual_description">
                                    <font className='home_page_offer_title_font'>
                                        Bali
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {Bali_Description}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_description_page_content_individual">
                            <div>
                                <img
                                    src={destination_discovery_image_2}
                                    alt="destination discovery"
                                    className='destination_discovery_page_image'
                                    loading="lazy"
                                />
                            </div>
                            <div className="destination_description_page_content_individual_border">
                                <div className="destination_description_page_content_individual_description">
                                    <font className='home_page_offer_title_font'>
                                        Paris
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {Paris_Description}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_description_page_content_individual">
                            <div>
                                <img
                                    src={destination_discovery_image_3}
                                    alt="destination discovery"
                                    className='destination_discovery_page_image'
                                    loading="lazy"
                                />
                            </div>
                            <div className="destination_description_page_content_individual_border">
                                <div className="destination_description_page_content_individual_description">
                                    <font className='home_page_offer_title_font'>
                                        Rome
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {Rome_Description}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_description_page_content_individual">
                            <div>
                                <img
                                    src={destination_discovery_image_4}
                                    alt="destination discovery"
                                    className='destination_discovery_page_image'
                                    loading="lazy"
                                />
                            </div>
                            <div className="destination_description_page_content_individual_border">
                                <div className="destination_description_page_content_individual_description">
                                    <font className='home_page_offer_title_font'>
                                        Bangkok
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {Bangkok_Description}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_description_page_content_individual">
                            <div>
                                <img
                                    src={destination_discovery_image_5}
                                    alt="destination discovery"
                                    className='destination_discovery_page_image'
                                    loading="lazy"
                                />
                            </div>
                            <div className="destination_description_page_content_individual_border">
                                <div className="destination_description_page_content_individual_description">
                                    <font className='home_page_offer_title_font'>
                                        Dubai
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {Dubai_Description}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_description_page_content_individual">
                            <div>
                                <img
                                    src={destination_discovery_image_6}
                                    alt="destination discovery"
                                    className='destination_discovery_page_image'
                                    loading="lazy"
                                />
                            </div>
                            <div className="destination_description_page_content_individual_border">
                                <div className="destination_description_page_content_individual_description">
                                    <font className='home_page_offer_title_font'>
                                        Kyoto
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {Kyoto_Description}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_description_page_content_individual">
                            <div>
                                <img
                                    src={destination_discovery_image_7}
                                    alt="destination discovery"
                                    className='destination_discovery_page_image'
                                    loading="lazy"
                                />
                            </div>
                            <div className="destination_description_page_content_individual_border">
                                <div className="destination_description_page_content_individual_description">
                                    <font className='home_page_offer_title_font'>
                                        London
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {London_Description}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </main >
    );
}

export default DestinationDiscovery;