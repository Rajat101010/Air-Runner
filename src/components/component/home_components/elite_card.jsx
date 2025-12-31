import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/home_components/elite_card.css";
import { Link } from "react-router-dom";

import { EliteCard_Description } from '../description/description'

import { RiVipCrown2Fill } from "react-icons/ri";

import { GoDotFill } from "react-icons/go";
import { BsFillDiamondFill } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

import { FaUsers } from "react-icons/fa6";


import elite_card_card from '../../../assets/elite_card_pictures/1.webp'

function OurExpertise() {
    return (
        <main>
            <div className='our_expertise_parent'>
                <div className="our_expertise_title">
                    <font className='home_title_font'>
                        <div className="our_expertise_title_title">
                            <div>
                                <RiVipCrown2Fill />
                            </div>
                            <div>
                                &nbsp;Elite Card
                            </div>
                        </div>
                    </font>
                    <font className='home_description_font'>
                        <p className="truncate-2 our_expertise_description_paragraph">
                            {EliteCard_Description}
                        </p>
                    </font>
                </div>
                <div className="elite_card_content">
                    <div className="image_container">
                        <img
                            src={elite_card_card}
                            alt="elite card"
                            className='elite_card_image'
                            loading="lazy"
                        />
                    </div>
                    <div className="elite_card_content_description">
                        <div>
                            <font className='elite_card_info_title_font'>
                                Membership Overview
                            </font>
                            <font className='elite_card_info_description_font'>
                                <div className="elite_card_content_member_count_parent">
                                    <div className="elite_card_content_member_count">
                                        <div className="elite_card_content_card_level">
                                            <div className="elite_card_content_card_level_level">
                                                <div>
                                                    <GoDotFill />
                                                </div>
                                                <div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;Explorer
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="elite_card_content_card_level_level">
                                                <div>
                                                    2.2 Million Users&nbsp;&nbsp;&nbsp;&nbsp;
                                                </div>
                                                <div>
                                                    <FaUsers />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="elite_card_content_member_count">
                                        <div className="elite_card_content_card_level">
                                            <div className="elite_card_content_card_level_level">
                                                <div>
                                                    <BsFillDiamondFill />
                                                </div>
                                                <div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;Navigator
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="elite_card_content_card_level_level">
                                                <div>
                                                    1.8 Million Users&nbsp;&nbsp;&nbsp;&nbsp;
                                                </div>
                                                <div>
                                                    <FaUsers />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="elite_card_content_member_count">
                                        <div className="elite_card_content_card_level">
                                            <div className="elite_card_content_card_level_level">
                                                <div>
                                                    <IoDiamond />
                                                </div>
                                                <div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;Aviator
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="elite_card_content_card_level_level">
                                                <div>
                                                    1.2 Million Users&nbsp;&nbsp;&nbsp;&nbsp;
                                                </div>
                                                <div>
                                                    <FaUsers />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="elite_card_content_member_count">
                                        <div className="elite_card_content_card_level">
                                            <div className="elite_card_content_card_level_level">
                                                <div>
                                                    <RiVipCrown2Fill />
                                                </div>
                                                <div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;Elite
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="elite_card_content_card_level_level">
                                                <div>
                                                    0.8 Million Users&nbsp;&nbsp;&nbsp;&nbsp;
                                                </div>
                                                <div>
                                                    <FaUsers />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </font>
                        </div>
                        <div>
                            <div className="offer_mini_screen_buttons">
                                <Link to="/" className="no-highlight">
                                    <div className="offer_mini_screen_buttons_individual">
                                        Explore
                                    </div>
                                </Link>
                                <Link to="/" className="no-highlight">
                                    <div className="offer_mini_screen_buttons_individual">
                                        Join
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default OurExpertise;