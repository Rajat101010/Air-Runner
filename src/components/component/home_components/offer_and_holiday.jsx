import { useState } from "react";
import { Link } from "react-router-dom";

import "../../../components/css/home_components/offer_and_holiday.css";

import img_1 from '../../../assets/offers_pictures/1.jpeg';

import { MdLocalOffer } from "react-icons/md";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { IoGift } from "react-icons/io5";


function OfferAndHoliday() {
    const [active, setActive] = useState("offer");

    return (
        <main>
            <div className="offer_and_holiday_parent">
                <div className="offer_and_holiday_title no-highlight">
                    <div
                        onClick={() => setActive("offer")}
                        className={active === "offer" ? "active_tab" : "no-highlight"}
                    >
                        <font className='offer_and_holiday_title_individual'>
                            <div className='offer_and_holiday_icons_individual'>
                                <MdLocalOffer />
                            </div>
                            <div>
                                &nbsp;Offers
                            </div>
                        </font>
                    </div>

                    <div
                        onClick={() => setActive("holiday")}
                        className={active === "holiday" ? "active_tab" : "no-highlight"}
                    >
                        <font className='offer_and_holiday_title_individual'>
                            <div className='offer_and_holiday_icons_individual'>
                                <FaSuitcaseRolling />
                            </div>
                            <div>
                                &nbsp;Holiday
                            </div>
                        </font>
                    </div>

                    <div
                        onClick={() => setActive("gifts")}
                        className={active === "gifts" ? "active_tab" : "no-highlight"}
                    >
                        <font className='offer_and_holiday_title_individual'>
                            <div className='offer_and_holiday_icons_individual'>
                                <IoGift />
                            </div>
                            <div>
                                &nbsp;Gifts
                            </div>
                        </font>
                    </div>
                </div>


                {/* Content toggle */}
                {active === "offer" && (
                    <div className="offer_and_holiday_content">
                        <div>
                            <div className="home_page_offer_shortcut">
                                <div className="home_page_offer_shortcut_individual">
                                    <div>
                                        <img
                                            src={img_1}
                                            alt="offer"
                                            className='home_page_offer_shortcut_pic'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="home_page_offer_shortcut_description">
                                        <font className='home_page_offer_title_font'>
                                            Offer Title
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                            </p>
                                        </font>
                                    </div>
                                </div>
                                <div className="home_page_offer_shortcut_individual">
                                    <div>
                                        <img
                                            src={img_1}
                                            alt="offer"
                                            className='home_page_offer_shortcut_pic'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="home_page_offer_shortcut_description">
                                        <font className='home_page_offer_title_font'>
                                            Offer Title
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                            </p>
                                        </font>
                                    </div>
                                </div>
                                <div className="home_page_offer_shortcut_individual">
                                    <div>
                                        <img
                                            src={img_1}
                                            alt="offer"
                                            className='home_page_offer_shortcut_pic'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="home_page_offer_shortcut_description">
                                        <font className='home_page_offer_title_font'>
                                            Offer Title
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                            </p>
                                        </font>
                                    </div>
                                </div>
                            </div>
                            <Link to="/offers" className="no-highlight">
                                <font className='home_page_offer_shortcut_view_more_font'>
                                    <div className="home_page_offer_shortcut_view_more">
                                        <div>
                                            Explore More Offers&nbsp;
                                        </div>
                                        <div>
                                            <MdLocalOffer />
                                        </div>
                                    </div>
                                </font>
                            </Link>
                        </div>
                    </div>
                )}

                {active === "holiday" && (
                    <div className="offer_and_holiday_content">
                        <div>
                            <div className="home_page_offer_shortcut">
                                <div className="home_page_offer_shortcut_individual">
                                    <div>
                                        <img
                                            src={img_1}
                                            alt="holiday"
                                            className='home_page_offer_shortcut_pic'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="home_page_offer_shortcut_description">
                                        <font className='home_page_offer_title_font'>
                                            Offer Title
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                            </p>
                                        </font>
                                    </div>
                                </div>
                                <div className="home_page_offer_shortcut_individual">
                                    <div>
                                        <img
                                            src={img_1}
                                            alt="holiday"
                                            className='home_page_offer_shortcut_pic'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="home_page_offer_shortcut_description">
                                        <font className='home_page_offer_title_font'>
                                            Offer Title
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                            </p>
                                        </font>
                                    </div>
                                </div>
                                <div className="home_page_offer_shortcut_individual">
                                    <div>
                                        <img
                                            src={img_1}
                                            alt="holiday"
                                            className='home_page_offer_shortcut_pic'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="home_page_offer_shortcut_description">
                                        <font className='home_page_offer_title_font'>
                                            Offer Title
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                                This is a long paragraph. If the content exceeds two lines,
                                                it will automatically show an ellipsis at the end.
                                            </p>
                                        </font>
                                    </div>
                                </div>
                            </div>
                            <Link to="/holiday" className="no-highlight">
                                <font className='home_page_offer_shortcut_view_more_font'>
                                    <div className="home_page_offer_shortcut_view_more">
                                        <div>
                                            Explore More Holiday Plans&nbsp;
                                        </div>
                                        <div>
                                            <FaSuitcaseRolling />
                                        </div>
                                    </div>
                                </font>
                            </Link>
                        </div>
                    </div>
                )}

                {active === "gifts" && (
                    <div className="offer_and_holiday_content">
                        <font className='no_gift_font'>
                            There are no gifts at the moment!
                        </font>
                    </div>
                )}
            </div>
        </main>
    );
}

export default OfferAndHoliday;