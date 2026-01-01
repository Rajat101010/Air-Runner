import '../../css/offer_components/offer.css'
import '../../css/holiday_components/holiday.css'
import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/home_components/offer_and_holiday.css";


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Holiday_Description } from '../description/description'
import { FaSuitcaseRolling } from "react-icons/fa6";

import holiday_img_1 from '../../../assets/holiday_picture/1.webp';
import holiday_img_2 from '../../../assets/holiday_picture/2.webp';
import holiday_img_3 from '../../../assets/holiday_picture/3.webp';

import { HomePage_Holiday_title_1 } from '../description/description'
import { HomePage_Holiday_description_1 } from '../description/description'

import { HomePage_Holiday_title_2 } from '../description/description'
import { HomePage_Holiday_description_2 } from '../description/description'

import { HomePage_Holiday_title_3 } from '../description/description'
import { HomePage_Holiday_description_3 } from '../description/description'



function Holiday() {



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



    const [holiday_2, setholiday_2] = useState(false);
    const screenRef_holiday_2 = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_holiday_2.current && !screenRef_holiday_2.current.contains(e.target)) {
                setholiday_2(false);
            }
        }

        if (holiday_2) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [holiday_2]);



    const [holiday_3, setholiday_3] = useState(false);
    const screenRef_holiday_3 = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_holiday_3.current && !screenRef_holiday_3.current.contains(e.target)) {
                setholiday_3(false);
            }
        }

        if (holiday_3) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [holiday_3]);




    return (
        <main>
            <div className='offer_parent'>
                <div>
                    <font className='home_title_font'>
                        <div className="our_expertise_title_title">
                            <div>
                                <FaSuitcaseRolling />
                            </div>
                            <div>
                                &nbsp;Holiday Plans
                            </div>
                        </div>
                    </font>
                    <font className='home_description_font'>
                        <p className="truncate-2 our_expertise_description_paragraph">
                            {Holiday_Description}
                        </p>
                    </font>
                </div>
                <div>
                    <div className='offer_div_lines'>
                        <div className='offer_div_individual no-highlight' onClick={() => setholiday_1(true)}>
                            <div>
                                <img
                                    src={holiday_img_1}
                                    alt="offer"
                                    className='offer_pic'
                                    loading="lazy"
                                />
                            </div>
                            <div className='offer_location_and_description'>
                                <div className='holiday_discount_and_code_description'>
                                    <div className='holiday_discount_and_code_description_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            Discount
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            10%
                                        </font>
                                    </div>
                                    <div className='holiday_discount_and_code_description_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            Use Code
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            @FA20M
                                        </font>
                                    </div>
                                </div>
                                <div>
                                    <font className='home_page_offer_title_font'>
                                        {HomePage_Holiday_title_1}
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {HomePage_Holiday_description_1}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                        <div className='offer_div_individual no-highlight' onClick={() => setholiday_2(true)}>
                            <div>
                                <img
                                    src={holiday_img_2}
                                    alt="offer"
                                    className='offer_pic'
                                    loading="lazy"
                                />
                            </div>
                            <div className='offer_location_and_description'>
                                <div className='holiday_discount_and_code_description'>
                                    <div className='holiday_discount_and_code_description_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            Discount
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            10%
                                        </font>
                                    </div>
                                    <div className='holiday_discount_and_code_description_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            Use Code
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            @GR20P
                                        </font>
                                    </div>
                                </div>
                                <div>
                                    <font className='home_page_offer_title_font'>
                                        {HomePage_Holiday_title_2}
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {HomePage_Holiday_description_2}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='offer_div_lines'>
                        <div className='offer_div_individual no-highlight' onClick={() => setholiday_3(true)}>
                            <div>
                                <img
                                    src={holiday_img_3}
                                    alt="offer"
                                    className='offer_pic'
                                    loading="lazy"
                                />
                            </div>
                            <div className='offer_location_and_description'>
                                <div className='holiday_discount_and_code_description'>
                                    <div className='holiday_discount_and_code_description_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            Discount
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            5%
                                        </font>
                                    </div>
                                    <div className='holiday_discount_and_code_description_div1'>
                                        <font className='offer_mini_screen_location_info_from_to_font'>
                                            Use Code
                                        </font>
                                        <font className='offer_mini_screen_location_info_from_to_place_font'>
                                            @WI20N
                                        </font>
                                    </div>
                                </div>
                                <div>
                                    <font className='home_page_offer_title_font'>
                                        {HomePage_Holiday_title_3}
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph_home">
                                            {HomePage_Holiday_description_3}
                                        </p>
                                    </font>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {holiday_1 && (
                <div className="overlay">
                    <div className="mini_screen" ref={screenRef_holiday_1}>
                        <div className="offer_mini_screen_parent">
                            <div>
                                <img
                                    src={holiday_img_1}
                                    alt="holiday"
                                    className='home_page_offer_shortcut_pic_mini_page'
                                    loading="lazy"
                                />
                            </div>
                            <div className="offer_mini_screen_description">
                                <div>
                                    <font className='home_page_offer_title_font'>
                                        {HomePage_Holiday_title_1}
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph">
                                            {HomePage_Holiday_description_1}
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

            {holiday_2 && (
                <div className="overlay">
                    <div className="mini_screen" ref={screenRef_holiday_2}>
                        <div className="offer_mini_screen_parent">
                            <div>
                                <img
                                    src={holiday_img_2}
                                    alt="holiday"
                                    className='home_page_offer_shortcut_pic_mini_page'
                                    loading="lazy"
                                />
                            </div>
                            <div className="offer_mini_screen_description">
                                <div>
                                    <font className='home_page_offer_title_font'>
                                        {HomePage_Holiday_title_2}
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph">
                                            {HomePage_Holiday_description_2}
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
                                            @GR20P
                                        </font>
                                    </div>
                                </div>
                                <div className="offer_mini_screen_buttons">
                                    <div className="offer_mini_screen_buttons_individual" onClick={() => setholiday_2(false)}>
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

            {holiday_3 && (
                <div className="overlay">
                    <div className="mini_screen" ref={screenRef_holiday_3}>
                        <div className="offer_mini_screen_parent">
                            <div>
                                <img
                                    src={holiday_img_3}
                                    alt="holiday"
                                    className='home_page_offer_shortcut_pic_mini_page'
                                    loading="lazy"
                                />
                            </div>
                            <div className="offer_mini_screen_description">
                                <div>
                                    <font className='home_page_offer_title_font'>
                                        {HomePage_Holiday_title_3}
                                    </font>
                                    <font className='home_page_offer_description_font'>
                                        <p class="truncate-2 home_page_offer_paragraph">
                                            {HomePage_Holiday_description_3}
                                        </p>
                                    </font>
                                </div>
                                <div className="holiday_mini_screen_discount_code bg_container">
                                    <div className="holiday_mini_screen_discount_code_individual">
                                        <font className='holiday_mini_screen_discount_code_upto_font'>
                                            Upto
                                        </font>
                                        <font className='holiday_mini_screen_discount_code_percentage_font'>
                                            5%
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
                                            @WI20N
                                        </font>
                                    </div>
                                </div>
                                <div className="offer_mini_screen_buttons">
                                    <div className="offer_mini_screen_buttons_individual" onClick={() => setholiday_3(false)}>
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
        </main>
    );
}

export default Holiday;