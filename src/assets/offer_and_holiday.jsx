// import { useState } from "react";
import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";

import "../../../components/css/home_components/offer_and_holiday.css";

import img_1 from '../../../assets/offers_pictures/1.webp';
import img_2 from '../../../assets/offers_pictures/2.webp';
import img_3 from '../../../assets/offers_pictures/3.webp';

import holiday_img_1 from '../../../assets/holiday_picture/1.webp';
import holiday_img_2 from '../../../assets/holiday_picture/2.webp';
import holiday_img_3 from '../../../assets/holiday_picture/3.webp';

import plane_arrow from '../../../assets/ticket_like/1.webp';


import { MdLocalOffer } from "react-icons/md";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { IoGift } from "react-icons/io5";



import { HomePage_Offer_title_1 } from '../description/description'
import { HomePage_Offer_description_1 } from '../description/description'

import { HomePage_Offer_title_2 } from '../description/description'
import { HomePage_Offer_description_2 } from '../description/description'

import { HomePage_Offer_title_3 } from '../description/description'
import { HomePage_Offer_description_3 } from '../description/description'


import { HomePage_Holiday_title_1 } from '../description/description'
import { HomePage_Holiday_description_1 } from '../description/description'

import { HomePage_Holiday_title_2 } from '../description/description'
import { HomePage_Holiday_description_2 } from '../description/description'

import { HomePage_Holiday_title_3 } from '../description/description'
import { HomePage_Holiday_description_3 } from '../description/description'



function OfferAndHoliday() {
    const [active, setActive] = useState("offer");



    const [offer_1, setoffer_1] = useState(false);
    const screenRef_offer_1 = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_offer_1.current && !screenRef_offer_1.current.contains(e.target)) {
                setoffer_1(false);
            }
        }

        if (offer_1) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [offer_1]);



    const [offer_2, setoffer_2] = useState(false);
    const screenRef_offer_2 = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_offer_2.current && !screenRef_offer_2.current.contains(e.target)) {
                setoffer_2(false);
            }
        }

        if (offer_2) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [offer_2]);



    const [offer_3, setoffer_3] = useState(false);
    const screenRef_offer_3 = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_offer_3.current && !screenRef_offer_3.current.contains(e.target)) {
                setoffer_3(false);
            }
        }

        if (offer_3) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [offer_3]);



    const [holiday_1, setholiday_1] = useState(false);
    const screenRef_holiday_1 = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_holiday_1.current && !screenRef_holiday_1.current.contains(e.target)) {
                setholiday_1(false);
            }
        }

        if (holiday_1) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [holiday_1]);








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
                                <div className="home_page_offer_shortcut_individual no-highlight" onClick={() => setoffer_1(true)}>
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
                                            {HomePage_Offer_title_1}
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                {HomePage_Offer_description_1}
                                            </p>
                                        </font>
                                    </div>
                                </div>



                                <div className="home_page_offer_shortcut_individual no-highlight" onClick={() => setoffer_2(true)}>
                                    <div>
                                        <img
                                            src={img_2}
                                            alt="offer"
                                            className='home_page_offer_shortcut_pic'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="home_page_offer_shortcut_description">
                                        <font className='home_page_offer_title_font'>
                                            {HomePage_Offer_title_2}
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                {HomePage_Offer_description_2}
                                            </p>
                                        </font>
                                    </div>
                                </div>



                                <div className="home_page_offer_shortcut_individual no-highlight" onClick={() => setoffer_3(true)}>
                                    <div>
                                        <img
                                            src={img_3}
                                            alt="offer"
                                            className='home_page_offer_shortcut_pic'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="home_page_offer_shortcut_description">
                                        <font className='home_page_offer_title_font'>
                                            {HomePage_Offer_title_3}
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                {HomePage_Offer_description_3}
                                            </p>
                                        </font>
                                    </div>
                                </div>
                            </div>



                            <div className="home_page_offer_shortcut_view_more">
                                <Link to="/offers" className="no-highlight">
                                    <font className='home_page_offer_shortcut_view_more_font home_page_offer_shortcut_view_more'>
                                        <div>
                                            Explore More Offers&nbsp;
                                        </div>
                                        <div>
                                            <MdLocalOffer />
                                        </div>
                                    </font>
                                </Link>
                            </div>
                        </div>


                        {offer_1 && (
                            <div className="overlay">
                                <div className="mini_screen" ref={screenRef_offer_1}>
                                    <div className="offer_mini_screen_parent">
                                        <div>
                                            <img
                                                src={img_1}
                                                alt="offer"
                                                className='home_page_offer_shortcut_pic_mini_page'
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="offer_mini_screen_description">
                                            <div className="offer_mini_screen_location_info bg_container">
                                                <div className="offer_mini_screen_location_info_from_to">
                                                    <font className='offer_mini_screen_location_info_from_to_font'>
                                                        From:
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_code_font'>
                                                        BOM
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_font'>
                                                        MUMBAI
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        Feb 14, 2026
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        11:30 AM
                                                    </font>
                                                </div>
                                                <div className="offer_mini_screen_location_info_plane_image">
                                                    <img
                                                        src={plane_arrow}
                                                        alt="offer"
                                                        className='ticket_like_plane_arrow'
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="offer_mini_screen_location_info_from_to">
                                                    <font className='offer_mini_screen_location_info_from_to_font'>
                                                        To:
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_code_font'>
                                                        GOI
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_font'>
                                                        GOA
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        Feb 14, 2026
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        12:40 PM
                                                    </font>
                                                </div>
                                            </div>
                                            <div>
                                                <font className='home_page_offer_title_font'>
                                                    {HomePage_Offer_title_1}
                                                </font>
                                                <font className='home_page_offer_description_font'>
                                                    <p class="truncate-2">
                                                        {HomePage_Offer_description_1}
                                                    </p>
                                                </font>
                                            </div>
                                            <div className="offer_mini_screen_buttons">
                                                <div className="offer_mini_screen_buttons_individual" onClick={() => setoffer_1(false)}>
                                                    Not Now
                                                </div>
                                                <div className="offer_mini_screen_buttons_individual">
                                                    Unlock Deal
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                        {offer_2 && (
                            <div className="overlay">
                                <div className="mini_screen" ref={screenRef_offer_2}>
                                    <div className="offer_mini_screen_parent">
                                        <div>
                                            <img
                                                src={img_2}
                                                alt="offer"
                                                className='home_page_offer_shortcut_pic_mini_page'
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="offer_mini_screen_description">
                                            <div className="offer_mini_screen_location_info bg_container">
                                                <div className="offer_mini_screen_location_info_from_to">
                                                    <font className='offer_mini_screen_location_info_from_to_font'>
                                                        From:
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_code_font'>
                                                        DEL
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_font'>
                                                        DELHI
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        Jan 01, 2026
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        10:30 AM
                                                    </font>
                                                </div>
                                                <div className="offer_mini_screen_location_info_plane_image">
                                                    <img
                                                        src={plane_arrow}
                                                        alt="offer"
                                                        className='ticket_like_plane_arrow'
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="offer_mini_screen_location_info_from_to">
                                                    <font className='offer_mini_screen_location_info_from_to_font'>
                                                        To:
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_code_font'>
                                                        JFK
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_font'>
                                                        NEW YORK
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        Jan 02, 2026
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        04:30 AM
                                                    </font>
                                                </div>
                                            </div>
                                            <div>
                                                <font className='home_page_offer_title_font'>
                                                    {HomePage_Offer_title_2}
                                                </font>
                                                <font className='home_page_offer_description_font'>
                                                    <p class="truncate-2">
                                                        {HomePage_Offer_description_2}
                                                    </p>
                                                </font>
                                            </div>
                                            <div className="offer_mini_screen_buttons">
                                                <div className="offer_mini_screen_buttons_individual" onClick={() => setoffer_2(false)}>
                                                    Not Now
                                                </div>
                                                <div className="offer_mini_screen_buttons_individual">
                                                    Unlock Deal
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                        {offer_3 && (
                            <div className="overlay">
                                <div className="mini_screen" ref={screenRef_offer_3}>
                                    <div className="offer_mini_screen_parent">
                                        <div>
                                            <img
                                                src={img_3}
                                                alt="offer"
                                                className='home_page_offer_shortcut_pic_mini_page'
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="offer_mini_screen_description">
                                            <div className="offer_mini_screen_location_info bg_container">
                                                <div className="offer_mini_screen_location_info_from_to">
                                                    <font className='offer_mini_screen_location_info_from_to_font'>
                                                        From:
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_code_font'>
                                                        PNQ
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_font'>
                                                        PUNE
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        Dec 25, 2026
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        06:10 PM
                                                    </font>
                                                </div>
                                                <div className="offer_mini_screen_location_info_plane_image">
                                                    <img
                                                        src={plane_arrow}
                                                        alt="offer"
                                                        className='ticket_like_plane_arrow'
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="offer_mini_screen_location_info_from_to">
                                                    <font className='offer_mini_screen_location_info_from_to_font'>
                                                        To:
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_code_font'>
                                                        DXB
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_place_font'>
                                                        DUBAI
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        Dec 25, 2026
                                                    </font>
                                                    <font className='offer_mini_screen_location_info_from_to_date_and_time_font'>
                                                        09:40 PM
                                                    </font>
                                                </div>
                                            </div>
                                            <div>
                                                <font className='home_page_offer_title_font'>
                                                    {HomePage_Offer_title_3}
                                                </font>
                                                <font className='home_page_offer_description_font'>
                                                    <p class="truncate-2">
                                                        {HomePage_Offer_description_3}
                                                    </p>
                                                </font>
                                            </div>
                                            <div className="offer_mini_screen_buttons">
                                                <div className="offer_mini_screen_buttons_individual" onClick={() => setoffer_3(false)}>
                                                    Not Now
                                                </div>
                                                <div className="offer_mini_screen_buttons_individual">
                                                    Unlock Deal
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}



                {active === "holiday" && (
                    <div className="offer_and_holiday_content">
                        <div>
                            <div className="home_page_offer_shortcut">


                                <div className="home_page_offer_shortcut_individual" onClick={() => setholiday_1(true)}>
                                    <div>
                                        <img
                                            src={holiday_img_1}
                                            alt="holiday"
                                            className='home_page_offer_shortcut_pic'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="home_page_offer_shortcut_description">
                                        <font className='home_page_offer_title_font'>
                                            {HomePage_Holiday_title_1}
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                {HomePage_Holiday_description_1}
                                            </p>
                                        </font>
                                    </div>
                                </div>
                                <div className="home_page_offer_shortcut_individual">
                                    <div>
                                        <img
                                            src={holiday_img_2}
                                            alt="holiday"
                                            className='home_page_offer_shortcut_pic'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="home_page_offer_shortcut_description">
                                        <font className='home_page_offer_title_font'>
                                            {HomePage_Holiday_title_2}
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                {HomePage_Holiday_description_2}
                                            </p>
                                        </font>
                                    </div>
                                </div>
                                <div className="home_page_offer_shortcut_individual">
                                    <div>
                                        <img
                                            src={holiday_img_3}
                                            alt="holiday"
                                            className='home_page_offer_shortcut_pic'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="home_page_offer_shortcut_description">
                                        <font className='home_page_offer_title_font'>
                                            {HomePage_Holiday_title_3}
                                        </font>
                                        <font className='home_page_offer_description_font'>
                                            <p class="truncate-2">
                                                {HomePage_Holiday_description_3}
                                            </p>
                                        </font>
                                    </div>
                                </div>
                            </div>
                            <div className="home_page_offer_shortcut_view_more">
                                <Link to="/holiday" className="no-highlight">
                                    <font className='home_page_offer_shortcut_view_more_font home_page_offer_shortcut_view_more'>
                                        <div>
                                            Explore More Holiday Plans&nbsp;
                                        </div>
                                        <div>
                                            <FaSuitcaseRolling />
                                        </div>
                                    </font>
                                </Link>
                            </div>
                        </div>
                        {holiday_1 && (
                            <div className="overlay">
                                <div className="mini_screen" ref={screenRef_holiday_1}>
                                    <div className="offer_mini_screen_parent">
                                        <div>
                                            <img
                                                src={holiday_img_1}
                                                alt="offer"
                                                className='home_page_offer_shortcut_pic_mini_page'
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="offer_mini_screen_description">
                                            <div>
                                                <font className='home_page_offer_title_font'>
                                                    {HomePage_Offer_title_3}
                                                </font>
                                                <font className='home_page_offer_description_font'>
                                                    <p class="truncate-2">
                                                        {HomePage_Offer_description_3}
                                                    </p>
                                                </font>
                                            </div>
                                            <div className="holiday_mini_screen_discount_code bg_container">
                                                <div className="holiday_mini_screen_discount_code_individual">
                                                    <font className='holiday_mini_screen_discount_code_upto_font'>
                                                        Upto
                                                    </font>
                                                    <font className='holiday_mini_screen_discount_code_percentage_font'>
                                                        10%
                                                    </font>
                                                    <font className='holiday_mini_screen_discount_code_discount_font'>
                                                        Discount
                                                    </font>
                                                </div>
                                                <div className="holiday_mini_screen_discount_code_individual">
                                                    <font className='holiday_mini_screen_discount_code_upto_font'>
                                                        Use Code
                                                    </font>
                                                    <font className='holiday_mini_screen_discount_code_code_font'>
                                                        @FA20M
                                                    </font>
                                                </div>
                                            </div>
                                            <div className="offer_mini_screen_buttons">
                                                <div className="offer_mini_screen_buttons_individual" onClick={() => setholiday_1(false)}>
                                                    Not Now
                                                </div>
                                                <div className="offer_mini_screen_buttons_individual">
                                                    Unlock Deal
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
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