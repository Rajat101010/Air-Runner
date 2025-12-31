import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/home_components/destination_discovery.css";
import "../../../components/css/home_components/destination_discovery.css";

import { Link } from "react-router-dom";

import { DestinationDiscovery_Description } from '../description/description'

import { MdMyLocation } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";

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
            <div className='our_expertise_parent'>
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
                <div className="destination_discovery_content">
                    <Link to="/" className="no-highlight">
                        <div className="destination_discovery_content_individual destination_discovery_content_no_show_on_mobile">
                            <img
                                src={destination_discovery_image_1}
                                alt="destination discovery"
                                className='destination_discovery_image'
                                loading="lazy"
                            />
                            <font className='destination_discovery_individual_title_font'>
                                Bali
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_discovery_content_individual">
                            <img
                                src={destination_discovery_image_2}
                                alt="destination discovery"
                                className='destination_discovery_image'
                                loading="lazy"
                            />
                            <font className='destination_discovery_individual_title_font'>
                                Paris
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_discovery_content_individual destination_discovery_content_no_show_on_mobile">
                            <img
                                src={destination_discovery_image_3}
                                alt="destination discovery"
                                className='destination_discovery_image'
                                loading="lazy"
                            />
                            <font className='destination_discovery_individual_title_font'>
                                Rome
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_discovery_content_individual">
                            <img
                                src={destination_discovery_image_4}
                                alt="destination discovery"
                                className='destination_discovery_image'
                                loading="lazy"
                            />
                            <font className='destination_discovery_individual_title_font'>
                                Bangkok
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_discovery_content_individual destination_discovery_content_no_show_on_mobile">
                            <img
                                src={destination_discovery_image_5}
                                alt="destination discovery"
                                className='destination_discovery_image'
                                loading="lazy"
                            />
                            <font className='destination_discovery_individual_title_font'>
                                Dubai
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_discovery_content_individual">
                            <img
                                src={destination_discovery_image_6}
                                alt="destination discovery"
                                className='destination_discovery_image'
                                loading="lazy"
                            />
                            <font className='destination_discovery_individual_title_font'>
                                Kyoto
                            </font>
                        </div>
                    </Link>
                    <Link to="/" className="no-highlight">
                        <div className="destination_discovery_content_individual destination_discovery_content_no_show_on_mobile">
                            <img
                                src={destination_discovery_image_7}
                                alt="destination discovery"
                                className='destination_discovery_image'
                                loading="lazy"
                            />
                            <font className='destination_discovery_individual_title_font'>
                                London
                            </font>
                        </div>
                    </Link>
                </div>
                <div className="explore_all_div">
                    <Link to="/destination" className="no-highlight">
                        <font className='explore_all_font'>
                            <div className="explore_all_div_after_font">
                                <div>
                                    Explore More Destination
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

export default DestinationDiscovery;