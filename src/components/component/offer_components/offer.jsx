import '../../css/offer_components/offer.css'
import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/home_components/offer_and_holiday.css";


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import plane_arrow from '../../../assets/ticket_like/1.webp';

import { Offer_Description } from '../description/description'
import { MdLocalOffer } from "react-icons/md";

import offer_img_1 from '../../../assets/offers_pictures/1.webp';
import offer_img_2 from '../../../assets/offers_pictures/2.webp';
import offer_img_3 from '../../../assets/offers_pictures/3.webp';

import { HomePage_Offer_title_1 } from '../description/description'
import { HomePage_Offer_description_1 } from '../description/description'

import { HomePage_Offer_title_2 } from '../description/description'
import { HomePage_Offer_description_2 } from '../description/description'

import { HomePage_Offer_title_3 } from '../description/description'
import { HomePage_Offer_description_3 } from '../description/description'


import { FaArrowRightLong } from "react-icons/fa6";


function Offer() {



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





    return (
        <main>
            <div className='offer_parent'>
                <div className='our_expertise_title'>
                    <font className='home_title_font'>
                        <div className="our_expertise_title_title">
                            <div>
                                <MdLocalOffer />
                            </div>
                            <div>
                                &nbsp;Exclusive Offers
                            </div>
                        </div>
                    </font>
                    <font className='home_description_font'>
                        <p className="truncate-2 our_expertise_description_paragraph">
                            {Offer_Description}
                        </p>
                    </font>
                </div>
                <div>
                    <div className='offer_div_lines'>
                        <div className='offer_div_individual no-highlight' onClick={() => setoffer_1(true)}>
                            <div>
                                <img
                                    src={offer_img_1}
                                    alt="offer"
                                    className='offer_pic'
                                    loading="lazy"
                                />
                            </div>
                            <div className='offer_location_and_description'>
                                <div className='offer_location'>
                                    <div className='offer_location_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            From:
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            MUMBAI
                                        </font>
                                    </div>
                                    <div>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            <FaArrowRightLong />
                                        </font>
                                    </div>
                                    <div className='offer_location_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            To:
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            GOA
                                        </font>
                                    </div>
                                </div>
                                <div>
                                    <font className='home_page_offer_title_font'>
                                        {HomePage_Offer_title_1}
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {HomePage_Offer_description_1}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                        <div className='offer_div_individual no-highlight' onClick={() => setoffer_2(true)}>
                            <div>
                                <img
                                    src={offer_img_2}
                                    alt="offer"
                                    className='offer_pic'
                                    loading="lazy"
                                />
                            </div>
                            <div className='offer_location_and_description'>
                                <div className='offer_location'>
                                    <div className='offer_location_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            From:
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            DELHI
                                        </font>
                                    </div>
                                    <div>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            <FaArrowRightLong />
                                        </font>
                                    </div>
                                    <div className='offer_location_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            To:
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            NEW YORK
                                        </font>
                                    </div>
                                </div>
                                <div>
                                    <font className='home_page_offer_title_font'>
                                        {HomePage_Offer_title_2}
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {HomePage_Offer_description_2}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                        <div className='offer_div_individual no-highlight' onClick={() => setoffer_3(true)}>
                            <div>
                                <img
                                    src={offer_img_3}
                                    alt="offer"
                                    className='offer_pic'
                                    loading="lazy"
                                />
                            </div>
                            <div className='offer_location_and_description'>
                                <div className='offer_location'>
                                    <div className='offer_location_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            From:
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            PUNE
                                        </font>
                                    </div>
                                    <div>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            <FaArrowRightLong />
                                        </font>
                                    </div>
                                    <div className='offer_location_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            To:
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            DUBAI
                                        </font>
                                    </div>
                                </div>
                                <div>
                                    <font className='home_page_offer_title_font'>
                                        {HomePage_Offer_title_3}
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {HomePage_Offer_description_3}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            {offer_1 && (
                <div className="overlay">
                    <div className="mini_screen" ref={screenRef_offer_1}>
                        <div className="offer_mini_screen_parent">
                            <div>
                                <img
                                    src={offer_img_1}
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
                                            alt="arrow"
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
                                        <p class="truncate-2 home_page_offer_paragraph">
                                            {HomePage_Offer_description_1}
                                        </p>
                                    </font>
                                </div>
                                <div className="offer_mini_screen_buttons">
                                    <div className="offer_mini_screen_buttons_individual" onClick={() => setoffer_1(false)}>
                                        Not Now
                                    </div>
                                    <Link to="/" className="no-highlight">
                                        <div className="offer_mini_screen_buttons_individual">
                                            Unlock Deal
                                        </div>
                                    </Link>
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
                                    src={offer_img_2}
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
                                            alt="arrow"
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
                                        <p class="truncate-2 home_page_offer_paragraph">
                                            {HomePage_Offer_description_2}
                                        </p>
                                    </font>
                                </div>
                                <div className="offer_mini_screen_buttons">
                                    <div className="offer_mini_screen_buttons_individual" onClick={() => setoffer_2(false)}>
                                        Not Now
                                    </div>
                                    <Link to="/" className="no-highlight">
                                        <div className="offer_mini_screen_buttons_individual">
                                            Unlock Deal
                                        </div>
                                    </Link>
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
                                    src={offer_img_3}
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
                                            alt="arrow"
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
                                        <p class="truncate-2 home_page_offer_paragraph">
                                            {HomePage_Offer_description_3}
                                        </p>
                                    </font>
                                </div>
                                <div className="offer_mini_screen_buttons">
                                    <div className="offer_mini_screen_buttons_individual" onClick={() => setoffer_3(false)}>
                                        Not Now
                                    </div>
                                    <Link to="/" className="no-highlight">
                                        <div className="offer_mini_screen_buttons_individual">
                                            Unlock Deal
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Offer;