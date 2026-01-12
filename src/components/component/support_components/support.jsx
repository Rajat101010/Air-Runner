import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/our_experties_components/our_experties.css";
import "../../../components/css/travel_assistance_components/travel_assistance.css";
import "../../../components/css/destination_discovery_components/destination_discovery.css";
import "../../../components/css/support_components/support.css";

// import { Link } from "react-router-dom";
// import { useState } from "react";
import { useState, useEffect } from "react";

import ReactCountryFlag from "react-country-flag";


import { Support_Description } from '../description/description'

import { MdSupportAgent } from "react-icons/md";

function Support() {
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
                            hi
                        </div>
                    </div>
                )
            }
        </main >
    );
}

export default Support;