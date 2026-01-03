import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/our_experties_components/our_experties.css";
import "../../../components/css/travel_assistance_components/travel_assistance.css";
import "../../../components/css/destination_discovery_components/destination_discovery.css";
import "../../../components/css/elite_card_components/elite_card.css";

import { Link } from "react-router-dom";

import { EliteCard_Description } from '../description/description'

import { RiVipCrown2Fill } from "react-icons/ri";

import { GoDotFill } from "react-icons/go";
import { BsFillDiamondFill } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

import { FaUsers } from "react-icons/fa6";


import elite_card_card from '../../../assets/elite_card_pictures/1.webp'

import { Description_1 } from './elite_card_description'
import { Description_2 } from './elite_card_description'
import { Description_3 } from './elite_card_description'
import { Description_4 } from './elite_card_description'


function EliteCard() {
    return (
        <main>
            <div className='our_expertise__page_parent'>
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
                <div className="elite_card_page_content">
                    <div className="elite_card_page_content_description">
                        <div className="elite_card_page_content_description_link">
                            <Link to="/" className="no-highlight">
                                <div className="elite_card_page_content_button">
                                    Become an Elite Member
                                </div>
                            </Link>
                        </div>
                        <div>
                            <font className='home_page_offer_title_font'>
                                Designed for Frequent Flyers
                            </font>
                            <font className='home_page_offer_description_font'>
                                <p class="truncate-all home_page_offer_paragraph_home">
                                    {Description_1}
                                </p>
                            </font>
                        </div>
                        <div>
                            <font className='home_page_offer_title_font'>
                                Additional Discounts
                            </font>
                            <font className='home_page_offer_description_font'>
                                <p class="truncate-all home_page_offer_paragraph_home">
                                    {Description_2}
                                </p>
                            </font>
                        </div>
                        <div>
                            <font className='home_page_offer_title_font'>
                                Tier-Based Membership Levels
                            </font>
                            <font className='home_page_offer_description_font'>
                                <p class="truncate-all home_page_offer_paragraph_home">
                                    <ul className="elite_card_page_content_description_ul">
                                        <li>Explorer – Entry-tier access with essential benefits, useful discounts, and early rewards</li>
                                        <li>Navigator – Stronger privileges, expanded benefits, and noticeably enhanced rewards on every trip</li>
                                        <li>Aviator – Top-tier status offering maximum perks, premium services, and elite-level recognition</li>
                                        <li>Elite – Ultimate level unlocking all rewards, VIP services, priority treatment, and exclusive access</li>
                                    </ul>
                                </p>
                            </font>
                        </div>
                        <div>
                            <font className='home_page_offer_title_font'>
                                Upgrade Criteria
                            </font>
                            <font className='home_page_offer_description_font'>
                                <p class="truncate-all home_page_offer_paragraph_home">
                                    {Description_3}
                                </p>
                            </font>
                        </div>
                        <div>
                            <font className='home_page_offer_title_font'>
                                Premium Travel Experience
                            </font>
                            <font className='home_page_offer_description_font'>
                                <p class="truncate-all home_page_offer_paragraph_home">
                                    {Description_4}
                                </p>
                            </font>
                        </div>
                    </div>
                    <div className="elite_card_page_content_image_and_description">
                        <div className="elite_card_page_image_container">
                            <img
                                src={elite_card_card}
                                alt="elite card"
                                className='elite_card_page_image'
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <font className='elite_card_info_title_font'>
                                Membership Overview
                            </font>
                            <font className='elite_card_info_description_font'>
                                <div className="elite_card_page_content_member_count_parent">
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
                    </div>
                </div>
            </div>
        </main >
    );
}

export default EliteCard;