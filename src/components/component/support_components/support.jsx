import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/our_experties_components/our_experties.css";
import "../../../components/css/travel_assistance_components/travel_assistance.css";
import "../../../components/css/destination_discovery_components/destination_discovery.css";
import "../../../components/css/support_components/support.css";

// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useState, useEffect } from "react";
import { useEffect, useRef, useState } from "react";


import ReactCountryFlag from "react-country-flag";


import { Support_Description } from '../description/description'

import { MdSupportAgent } from "react-icons/md";


import { MdAirplaneTicket } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { RiSuitcase3Fill } from "react-icons/ri";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { TbStatusChange } from "react-icons/tb";
import { FaPlaneSlash } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import { FaPassport } from "react-icons/fa6";
import { LuTicketsPlane } from "react-icons/lu";
import { MdAssistantDirection } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaPlaneCircleExclamation } from "react-icons/fa6";
import { FaPlaneDeparture } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPets } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";



import { faq_1_Description } from './description'
import { faq_2_Description } from './description'
import { faq_3_Description } from './description'
import { faq_4_Description } from './description'
import { faq_5_Description } from './description'
import { faq_6_Description } from './description'
import { faq_7_Description } from './description'
import { faq_8_Description } from './description'
import { faq_9_Description } from './description'
import { faq_10_Description } from './description'
import { faq_11_Description } from './description'
import { faq_12_Description } from './description'
import { faq_13_Description } from './description'
import { faq_14_Description } from './description'
import { faq_15_Description } from './description'
import { faq_16_Description } from './description'
import { faq_17_Description } from './description'
import { faq_18_Description } from './description'
import { faq_19_Description } from './description'
import { faq_20_Description } from './description'


import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";



function Support() {






    const [activefaq, setActivefaq] = useState(null); // null | faq id
    const screenRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef.current && !screenRef.current.contains(e.target)) {
                setActivefaq(null);
            }
        }

        if (activefaq !== null) {
            document.body.style.overflow = "hidden";
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activefaq]);






    const [active, setActive] = useState("contact_us");




    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [userCaptcha, setUserCaptcha] = useState("");

    // Generate captcha
    const generateCaptcha = () => {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptcha(code);
        setUserCaptcha("");
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    // Validation
    const isCaptchaValid = userCaptcha.toUpperCase() === captcha;
    const isFormFilled = name && email && message;
    const canSubmit = isFormFilled && isCaptchaValid;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!canSubmit) return;
        // alert("Form submitted successfully!");

        e.preventDefault();
        if (!canSubmit) return;

        setShowPopup(true);

        // Auto close popup
        setTimeout(() => {
            setShowPopup(false);
        }, 2500);
    };




    const [showPopup, setShowPopup] = useState(false);



    const TOTAL_FAQS = 20; // change this to your total count

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (activefaq > 0) {
                if (e.key === "ArrowRight") {
                    setActivefaq((prev) =>
                        prev === TOTAL_FAQS ? 1 : prev + 1
                    );
                }

                if (e.key === "ArrowLeft") {
                    setActivefaq((prev) =>
                        prev === 1 ? TOTAL_FAQS : prev - 1
                    );
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activefaq]);









    const touchStartX = useRef(0);
    const touchEndX = useRef(0);


    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;

        if (Math.abs(diff) < 50) return; // ignore tiny swipes

        // swipe right → left (NEXT)
        if (diff > 0) {
            setActivefaq((prev) =>
                prev === TOTAL_FAQS ? 1 : prev + 1
            );
        }

        // swipe left → right (PREV)
        if (diff < 0) {
            setActivefaq((prev) =>
                prev === 1 ? TOTAL_FAQS : prev - 1
            );
        }
    };






    return (
        <main>
            <div className='our_expertise__page_parent'>
                <div className="our_expertise_title">
                    <font className='home_title_font'>
                        <div className="our_expertise_title_title">
                            <div>
                                <MdSupportAgent />
                            </div>
                            <div>
                                &nbsp;Support
                            </div>
                        </div>
                    </font>
                    <font className='home_description_font'>
                        <p className="truncate-2 our_expertise_description_paragraph">
                            {Support_Description}
                        </p>
                    </font>
                </div>
            </div>
            <div className="support_page_content no-highlight">
                <div className="support_title no-highlight">
                    <div
                        onClick={() => setActive("contact_us")}
                        className={active === "contact_us" ? "active_tab" : "no-highlight"}
                    >
                        <font className='offer_and_holiday_title_individual'>
                            <div>
                                Contact Us
                            </div>
                        </font>
                    </div>

                    <div
                        onClick={() => setActive("faqs")}
                        className={active === "faqs" ? "active_tab" : "no-highlight"}
                    >
                        <font className='offer_and_holiday_title_individual'>
                            <div>
                                FAQs
                            </div>
                        </font>
                    </div>
                </div>
            </div>


            {active === "contact_us" && (
                <div>
                    <div className="support_content_main_parent">
                        <div className="contact_us_parent">
                            <div className="contact_us_form">
                                <font className='contact_us_form_title_font'>
                                    Send Us a Message
                                </font>
                                <form className="form-container" onSubmit={handleSubmit}>
                                    <div className="form-container">
                                        <div className="input-group">
                                            <input
                                                type="name"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <label>Full Name *</label>
                                        </div>

                                        <div className="input-group">
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <label>Email Address*</label>
                                        </div>

                                        <div className="input-group">
                                            <input
                                                type="text"
                                                required
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                            />
                                            <label>Subject *</label>
                                        </div>

                                        <div className="input-group">
                                            <input
                                                type="tel"
                                                required
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                            <label>Phone No *</label>
                                        </div>

                                        <div className="input-group">
                                            <textarea
                                                required
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                rows="4"
                                            />
                                            <label>Message *</label>
                                        </div>
                                    </div>


                                    {/* CAPTCHA Display */}
                                    <div className="captcha-box">
                                        <span className="captcha-text">{captcha}</span>
                                        <button type="button" onClick={generateCaptcha} className="refresh-btn no-highlight">
                                            ↻
                                        </button>
                                    </div>

                                    {/* CAPTCHA Input */}
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            required
                                            value={userCaptcha}
                                            onChange={(e) => setUserCaptcha(e.target.value)}
                                        />
                                        <label>Captcha *</label>
                                    </div>

                                    <button type="submit" disabled={!canSubmit} className="submit-btn no-highlight">
                                        Submit
                                    </button>
                                </form>

                            </div>

                            {showPopup && (
                                <div className="popup-overlay">
                                    <div className="popup">
                                        <div className="popup-icon">✓</div>
                                        <h4>Message Sent</h4>
                                        <p>We’ll get back to you shortly.</p>
                                    </div>
                                </div>
                            )}







                            <div className="contact_us_other_information">
                                <div className="contact_us_customer_support">
                                    <font className='contact_us_form_title_font'>
                                        Customer Support - India
                                    </font>
                                    <div className="contact_us_customer_support_individual_parent">
                                        <div className="contact_us_customer_support_individual">
                                            <div className="contact_us_customer_support_individual_title">
                                                <font className='contact_us_customer_support_individual_title_font'>
                                                    Flight Enquiries
                                                </font>
                                            </div>
                                            <div className="contact_us_customer_support_individual_description">
                                                <font className='contact_us_customer_support_individual_description_font'>
                                                    Phone: +91 98765 43210
                                                </font>
                                                <font className='contact_us_customer_support_individual_description_font'>
                                                    E-mail: flightenquiries@airrunner.com
                                                </font>
                                            </div>
                                        </div>
                                        <div className="contact_us_customer_support_individual">
                                            <div className="contact_us_customer_support_individual_title">
                                                <font className='contact_us_customer_support_individual_title_font'>
                                                    Baggage Support
                                                </font>
                                            </div>
                                            <div className="contact_us_customer_support_individual_description">
                                                <font className='contact_us_customer_support_individual_description_font'>
                                                    Phone: +91 98765 43210
                                                </font>
                                                <font className='contact_us_customer_support_individual_description_font'>
                                                    E-mail: baggagesupport@airrunner.com
                                                </font>
                                            </div>
                                        </div>
                                        <div className="contact_us_customer_support_individual">
                                            <div className="contact_us_customer_support_individual_title">
                                                <font className='contact_us_customer_support_individual_title_font'>
                                                    Refunds & Cancellations
                                                </font>
                                            </div>
                                            <div className="contact_us_customer_support_individual_description">
                                                <font className='contact_us_customer_support_individual_description_font'>
                                                    Phone: +91 98765 43210
                                                </font>
                                                <font className='contact_us_customer_support_individual_description_font'>
                                                    E-mail: resolutions@airrunner.com
                                                </font>
                                            </div>
                                        </div>
                                        <div className="contact_us_customer_support_individual">
                                            <div className="contact_us_customer_support_individual_title">
                                                <font className='contact_us_customer_support_individual_title_font'>
                                                    Medical Support
                                                </font>
                                            </div>
                                            <div className="contact_us_customer_support_individual_description">
                                                <font className='contact_us_customer_support_individual_description_font'>
                                                    Phone: +91 98765 43210
                                                </font>
                                                <font className='contact_us_customer_support_individual_description_font'>
                                                    E-mail: medical@airrunner.com
                                                </font>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_us_customer_support">
                                    <font className='contact_us_form_title_font'>
                                        Global Contact Centres
                                    </font>
                                    <div className="contact_us_customer_support_individual_parent_2">
                                        <div className="contact_us_customer_support_individual_2">
                                            <div>
                                                <ReactCountryFlag
                                                    countryCode="US"
                                                    svg
                                                    style={{
                                                        width: "2em",
                                                        height: "1.5em",
                                                    }}
                                                    title="flag"
                                                    className="country_flag"
                                                />
                                            </div>
                                            <div className="contact_us_country_and_number">
                                                <div>
                                                    <font className='contact_us_country_name'>
                                                        USA
                                                    </font>
                                                </div>
                                                <div>
                                                    <font className='contact_us_country_number'>
                                                        Phone: +1 987 654 3210
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact_us_customer_support_individual_2">
                                            <div>
                                                <ReactCountryFlag
                                                    countryCode="GB"
                                                    svg
                                                    style={{
                                                        width: "2em",
                                                        height: "1.5em",
                                                    }}
                                                    title="flag"
                                                    className="country_flag"
                                                />
                                            </div>
                                            <div className="contact_us_country_and_number">
                                                <div>
                                                    <font className='contact_us_country_name'>
                                                        UK
                                                    </font>
                                                </div>
                                                <div>
                                                    <font className='contact_us_country_number'>
                                                        Phone: +44 987 654 3210
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact_us_customer_support_individual_2">
                                            <div>
                                                <ReactCountryFlag
                                                    countryCode="CA"
                                                    svg
                                                    style={{
                                                        width: "2em",
                                                        height: "1.5em",
                                                    }}
                                                    title="flag"
                                                    className="country_flag"
                                                />
                                            </div>
                                            <div className="contact_us_country_and_number">
                                                <div>
                                                    <font className='contact_us_country_name'>
                                                        Canada
                                                    </font>
                                                </div>
                                                <div>
                                                    <font className='contact_us_country_number'>
                                                        Phone: +1 987 654 3210
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact_us_customer_support_individual_2">
                                            <div>
                                                <ReactCountryFlag
                                                    countryCode="DE"
                                                    svg
                                                    style={{
                                                        width: "2em",
                                                        height: "1.5em",
                                                    }}
                                                    title="flag"
                                                    className="country_flag"
                                                />
                                            </div>
                                            <div className="contact_us_country_and_number">
                                                <div>
                                                    <font className='contact_us_country_name'>
                                                        Germany
                                                    </font>
                                                </div>
                                                <div>
                                                    <font className='contact_us_country_number'>
                                                        Phone: +49 987 6543210
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact_us_customer_support_individual_2">
                                            <div>
                                                <ReactCountryFlag
                                                    countryCode="FR"
                                                    svg
                                                    style={{
                                                        width: "2em",
                                                        height: "1.5em",
                                                    }}
                                                    title="flag"
                                                    className="country_flag"
                                                />
                                            </div>
                                            <div className="contact_us_country_and_number">
                                                <div>
                                                    <font className='contact_us_country_name'>
                                                        France
                                                    </font>
                                                </div>
                                                <div>
                                                    <font className='contact_us_country_number'>
                                                        Phone: +33 9 87 65 43 21
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact_us_customer_support_individual_2">
                                            <div>
                                                <ReactCountryFlag
                                                    countryCode="RU"
                                                    svg
                                                    style={{
                                                        width: "2em",
                                                        height: "1.5em",
                                                    }}
                                                    title="flag"
                                                    className="country_flag"
                                                />
                                            </div>
                                            <div className="contact_us_country_and_number">
                                                <div>
                                                    <font className='contact_us_country_name'>
                                                        Russia
                                                    </font>
                                                </div>
                                                <div>
                                                    <font className='contact_us_country_number'>
                                                        Phone: +7 987 654 3210
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact_us_customer_support_individual_2">
                                            <div>
                                                <ReactCountryFlag
                                                    countryCode="SG"
                                                    svg
                                                    style={{
                                                        width: "2em",
                                                        height: "1.5em",
                                                    }}
                                                    title="flag"
                                                    className="country_flag"
                                                />
                                            </div>
                                            <div className="contact_us_country_and_number">
                                                <div>
                                                    <font className='contact_us_country_name'>
                                                        Singapore
                                                    </font>
                                                </div>
                                                <div>
                                                    <font className='contact_us_country_number'>
                                                        Phone: +65 9876 5432
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact_us_customer_support_individual_2">
                                            <div>
                                                <ReactCountryFlag
                                                    countryCode="AU"
                                                    svg
                                                    style={{
                                                        width: "2em",
                                                        height: "1.5em",
                                                    }}
                                                    title="flag"
                                                    className="country_flag"
                                                />
                                            </div>
                                            <div className="contact_us_country_and_number">
                                                <div>
                                                    <font className='contact_us_country_name'>
                                                        Australia
                                                    </font>
                                                </div>
                                                <div>
                                                    <font className='contact_us_country_number'>
                                                        Phone: +61 9 8765 4321
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact_us_customer_support_individual_2">
                                            <div>
                                                <ReactCountryFlag
                                                    countryCode="JP"
                                                    svg
                                                    style={{
                                                        width: "2em",
                                                        height: "1.5em",
                                                    }}
                                                    title="flag"
                                                    className="country_flag"
                                                />
                                            </div>
                                            <div className="contact_us_country_and_number">
                                                <div>
                                                    <font className='contact_us_country_name'>
                                                        Japan
                                                    </font>
                                                </div>
                                                <div>
                                                    <font className='contact_us_country_number'>
                                                        Phone: +81 9 8765 4321
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

            {
                active === "faqs" && (
                    <div>
                        <div className="support_content_main_parent">
                            <font className='faq_title_font_support_page'>
                                <div className="support_content_parent">
                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(1)}>
                                        <div>
                                            <MdAirplaneTicket size={20} />
                                        </div>
                                        <div>
                                            Flight Booking
                                        </div>
                                    </div>

                                    {activefaq === 1 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(20)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <MdAirplaneTicket size={22} />
                                                            </div>
                                                            <div>
                                                                Flight Booking
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_1_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(2)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}



                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(2)}>
                                        <div>
                                            <FaUserCheck size={20} />
                                        </div>
                                        <div>
                                            Online Check-In
                                        </div>
                                    </div>

                                    {activefaq === 2 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(1)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <FaUserCheck size={22} />
                                                            </div>
                                                            <div>
                                                                Online Check-In
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all faq_description_paragraph">
                                                                {faq_2_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(3)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}



                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(3)}>
                                        <div>
                                            <FaSuitcaseRolling size={20} />
                                        </div>
                                        <div>
                                            Baggage Policy
                                        </div>
                                    </div>

                                    {activefaq === 3 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(2)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <FaSuitcaseRolling size={22} />
                                                            </div>
                                                            <div>
                                                                Baggage Policy
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_3_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(4)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(4)}>
                                        <div>
                                            <FaBagShopping size={18} />
                                        </div>
                                        <div>
                                            Cabin Baggage
                                        </div>
                                    </div>

                                    {activefaq === 4 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(3)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <FaBagShopping size={20} />
                                                            </div>
                                                            <div>
                                                                Cabin Baggage
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_4_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(5)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(5)}>
                                        <div>
                                            <RiSuitcase3Fill size={20} />
                                        </div>
                                        <div>
                                            Excess Baggage
                                        </div>
                                    </div>

                                    {activefaq === 5 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(4)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <RiSuitcase3Fill size={22} />
                                                            </div>
                                                            <div>
                                                                Excess Baggage
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_5_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(6)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(6)}>
                                        <div>
                                            <MdAirlineSeatReclineExtra size={20} />
                                        </div>
                                        <div>
                                            Seat Selection
                                        </div>
                                    </div>

                                    {activefaq === 6 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(5)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <MdAirlineSeatReclineExtra size={22} />
                                                            </div>
                                                            <div>
                                                                Seat Selection
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_6_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(7)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(7)}>
                                        <div>
                                            <TbStatusChange size={20} />
                                        </div>
                                        <div>
                                            Flight Changes
                                        </div>
                                    </div>

                                    {activefaq === 7 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(6)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <TbStatusChange size={22} />
                                                            </div>
                                                            <div>
                                                                Flight Changes
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_7_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(8)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(8)}>
                                        <div>
                                            <FaPlaneSlash size={20} />
                                        </div>
                                        <div>
                                            Cancellations
                                        </div>
                                    </div>

                                    {activefaq === 8 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(7)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <FaPlaneSlash size={22} />
                                                            </div>
                                                            <div>
                                                                Cancellations
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_8_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(9)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(9)}>
                                        <div>
                                            <RiRefund2Fill size={20} />
                                        </div>
                                        <div>
                                            Refund Status
                                        </div>
                                    </div>

                                    {activefaq === 9 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(8)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <RiRefund2Fill size={22} />
                                                            </div>
                                                            <div>
                                                                Refund Status
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_9_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(10)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(10)}>
                                        <div>
                                            <FaPassport size={16} />
                                        </div>
                                        <div>
                                            Travel Documents
                                        </div>
                                    </div>

                                    {activefaq === 10 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(9)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <FaPassport size={18} />
                                                            </div>
                                                            <div>
                                                                Travel Documents
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_10_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(11)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(11)}>
                                        <div>
                                            <FaUserCheck size={20} />
                                        </div>
                                        <div>
                                            Web Check-In
                                        </div>
                                    </div>

                                    {activefaq === 11 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(10)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <FaUserCheck size={22} />
                                                            </div>
                                                            <div>
                                                                Web Check-In
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_11_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(12)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(12)}>
                                        <div>
                                            <LuTicketsPlane size={20} />
                                        </div>
                                        <div>
                                            Flight Status
                                        </div>
                                    </div>

                                    {activefaq === 12 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(11)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <LuTicketsPlane size={22} />
                                                            </div>
                                                            <div>
                                                                Flight Status
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_12_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(13)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(13)}>
                                        <div>
                                            <MdAssistantDirection size={20} />
                                        </div>
                                        <div>
                                            Special Assistance
                                        </div>
                                    </div>

                                    {activefaq === 13 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(12)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <MdAssistantDirection size={22} />
                                                            </div>
                                                            <div>
                                                                Special Assistance
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_13_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(14)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(14)}>
                                        <div>
                                            <FaBriefcaseMedical size={17} />
                                        </div>
                                        <div>
                                            Medical Travel
                                        </div>
                                    </div>

                                    {activefaq === 14 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(13)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <FaBriefcaseMedical size={20} />
                                                            </div>
                                                            <div>
                                                                Medical Travel
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_14_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(15)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(15)}>
                                        <div>
                                            <IoFastFoodSharp size={18} />
                                        </div>
                                        <div>
                                            In-Flight Meals
                                        </div>
                                    </div>

                                    {activefaq === 15 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(14)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <IoFastFoodSharp size={20} />
                                                            </div>
                                                            <div>
                                                                In-Flight Meals
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_15_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(16)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(16)}>
                                        <div>
                                            <FaPlaneCircleExclamation size={20} />
                                        </div>
                                        <div>
                                            Flight Delays
                                        </div>
                                    </div>

                                    {activefaq === 16 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(15)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <FaPlaneCircleExclamation size={22} />
                                                            </div>
                                                            <div>
                                                                Flight Delays
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_16_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(17)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(17)}>
                                        <div>
                                            <FaPlaneDeparture size={20} />
                                        </div>
                                        <div>
                                            Missed Flights
                                        </div>
                                    </div>

                                    {activefaq === 17 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(16)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <FaPlaneDeparture size={22} />
                                                            </div>
                                                            <div>
                                                                Missed Flights
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_17_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(18)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(18)}>
                                        <div>
                                            <FaPeopleGroup size={20} />
                                        </div>
                                        <div>
                                            Group Booking
                                        </div>
                                    </div>

                                    {activefaq === 18 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(17)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <FaPeopleGroup size={22} />
                                                            </div>
                                                            <div>
                                                                Group Booking
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_18_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(19)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(19)}>
                                        <div>
                                            <MdPets size={18} />
                                        </div>
                                        <div>
                                            Pet Travel
                                        </div>
                                    </div>

                                    {activefaq === 19 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(18)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <MdPets size={20} />
                                                            </div>
                                                            <div>
                                                                Pet Travel
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_19_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(20)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="support_content_parent_individual no-highlight" onClick={() => setActivefaq(20)}>
                                        <div>
                                            <RiCustomerService2Fill size={20} />
                                        </div>
                                        <div>
                                            Customer Support
                                        </div>
                                    </div>

                                    {activefaq === 20 && (
                                        <div className="overlay">
                                            <div
                                                className="mini_faq"
                                                ref={screenRef}
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <div className="faq_left_arrow no-highlight" onClick={() => setActivefaq(19)}>
                                                    <MdKeyboardDoubleArrowLeft size={20} />
                                                </div>
                                                <div className="faw_content_div">
                                                    <font className='faq_title_font_mini_faq'>
                                                        <div className="faq_information_content">
                                                            <div className="faq_icons">
                                                                <RiCustomerService2Fill size={22} />
                                                            </div>
                                                            <div>
                                                                Customer Support
                                                            </div>
                                                        </div>
                                                    </font>
                                                    <font className='faq_description_font_mini_faq'>
                                                        <div className="faq_paragraph_div">
                                                            <p className="truncate-all our_expertise_description_paragraph">
                                                                {faq_20_Description}
                                                            </p>
                                                        </div>
                                                    </font>
                                                </div>
                                                <div className="faq_left_right no-highlight" onClick={() => setActivefaq(1)}>
                                                    <MdKeyboardDoubleArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                </div>
                            </font>
                        </div>
                    </div>
                )
            }
        </main >
    );
}

export default Support;
