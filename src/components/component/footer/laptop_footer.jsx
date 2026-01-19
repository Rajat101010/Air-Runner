import '../../css/footer/laptop_footer.css'

import { Link } from "react-router-dom";

import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaUserSecret } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function LaptopFooter() {
    return (
        <main>
            <div className='footer_laptop_grand_parent'>
                <div className='footer_laptop_parent'>
                    <div className='footer_laptop_individual'>
                        <div>
                            <font className='laptop_footer_title'>
                                About Us
                            </font>
                        </div>
                        <div className='footer_laptop_individual_description'>
                            <font className='laptop_footer_description'>
                                <Link to="/about-us/company-overview" className="no-highlight laptop_footer_description">
                                    Company Overview
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/about-us/fleet-information" className="no-highlight laptop_footer_description">
                                    Fleet Information
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/about-us/cargo-information" className="no-highlight laptop_footer_description">
                                    Cargo Information
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/about-us/crew-members" className="no-highlight laptop_footer_description">
                                    Crew Members
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/about-us/safety-standards" className="no-highlight laptop_footer_description">
                                    Safety Standards
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/about-us/recognization" className="no-highlight laptop_footer_description">
                                    Recognization
                                </Link>
                            </font>
                        </div>
                    </div>
                    <div className='footer_laptop_individual'>
                        <div>
                            <font className='laptop_footer_title'>
                                Our Expertise
                            </font>
                        </div>
                        <div className='footer_laptop_individual_description'>
                            <font className='laptop_footer_description'>
                                <Link to="/" className="no-highlight laptop_footer_description">
                                    At the airport
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/" className="no-highlight laptop_footer_description">
                                    In the air
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/" className="no-highlight laptop_footer_description">
                                    After-Flight Care
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/" className="no-highlight laptop_footer_description">
                                    Flight Planning
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/" className="no-highlight laptop_footer_description">
                                    Cabin Comfort
                                </Link>
                            </font>
                        </div>
                    </div>
                    <div className='footer_laptop_individual more_width_little'>
                        <div>
                            <font className='laptop_footer_title'>
                                Getaways
                            </font>
                        </div>
                        <div className='footer_laptop_individual_description'>
                            <font className='laptop_footer_description'>
                                <Link to="/destination" className="no-highlight laptop_footer_description">
                                    Destination Discovery
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/holiday" className="no-highlight laptop_footer_description">
                                    Holiday Plans
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/offers" className="no-highlight laptop_footer_description">
                                    Exclusive Offers
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/blogs" className="no-highlight laptop_footer_description">
                                    Blogs
                                </Link>
                            </font>
                        </div>
                    </div>
                    <div className='footer_laptop_individual more_width'>
                        <div>
                            <font className='laptop_footer_title'>
                                Travel Assistance
                            </font>
                        </div>
                        <div className='more_width_2col'>
                            <div className='footer_laptop_individual_description'>
                                <font className='laptop_footer_description'>
                                    <Link to="/" className="no-highlight laptop_footer_description">
                                        Baggage
                                    </Link>
                                </font>
                                <font className='laptop_footer_description'>
                                    <Link to="/" className="no-highlight laptop_footer_description">
                                        solo Child
                                    </Link>
                                </font>
                                <font className='laptop_footer_description'>
                                    <Link to="/" className="no-highlight laptop_footer_description">
                                        Medical Care
                                    </Link>
                                </font>
                                <font className='laptop_footer_description'>
                                    <Link to="/" className="no-highlight laptop_footer_description">
                                        First Time
                                    </Link>
                                </font>
                                <font className='laptop_footer_description'>
                                    <Link to="/" className="no-highlight laptop_footer_description">
                                        In-Cabin Pet
                                    </Link>
                                </font>
                            </div>
                            <div className='footer_laptop_individual_description'>
                                <font className='laptop_footer_description'>
                                    <Link to="/" className="no-highlight laptop_footer_description">
                                        Special Meals
                                    </Link>
                                </font>
                                <font className='laptop_footer_description'>
                                    <Link to="/" className="no-highlight laptop_footer_description">
                                        Elderly
                                    </Link>
                                </font>
                                <font className='laptop_footer_description'>
                                    <Link to="/" className="no-highlight laptop_footer_description">
                                        Visa Support
                                    </Link>
                                </font>
                                <font className='laptop_footer_description'>
                                    <Link to="/" className="no-highlight laptop_footer_description">
                                        Insurance
                                    </Link>
                                </font>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_laptop_parent'>
                    <div className='footer_laptop_individual'>
                        <div>
                            <font className='laptop_footer_title'>
                                Elite Card
                            </font>
                        </div>
                        <div className='footer_laptop_individual_description'>
                            <font className='laptop_footer_description'>
                                <Link to="/elite-card" className="no-highlight laptop_footer_description">
                                    About Elite Card
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/" className="no-highlight laptop_footer_description">
                                    Become an Elite Member
                                </Link>
                            </font>
                        </div>
                    </div>
                    <div className='footer_laptop_individual'>
                        <div>
                            <font className='laptop_footer_title'>
                                Help Center
                            </font>
                        </div>
                        <div className='footer_laptop_individual_description'>
                            <font className='laptop_footer_description'>
                                <Link to="/support" className="no-highlight laptop_footer_description">
                                    Support
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/t-&-c" className="no-highlight laptop_footer_description">
                                    Terms and Conditions
                                </Link>
                            </font>
                            <font className='laptop_footer_description'>
                                <Link to="/policy" className="no-highlight laptop_footer_description">
                                    Policy
                                </Link>
                            </font>
                        </div>
                    </div>
                    <div className='footer_laptop_individual more_width_little'>
                        <div>
                            <font className='laptop_footer_title'>
                                Online Support
                            </font>
                        </div>
                        <div className='footer_laptop_individual_description'>
                            <font className='laptop_footer_description_none'>
                                Phone: +91 9876543210
                            </font>
                            <font className='laptop_footer_description_none'>
                                Email: flightenquiries@airrunner.com
                            </font>
                            <font className='laptop_footer_description_none'>
                                Email: resolutions@airrunner.com
                            </font>
                        </div>
                    </div>
                    <div className='footer_laptop_individual more_width'>
                        <div>
                            <font className='laptop_footer_title'>
                                Connect with us
                            </font>
                        </div>
                        <font className='about_us_social_icon_font'>
                            <div className='social_links_for_mobile_footer'>
                                <Link to="https://www.linkedin.com/in/rajat-raj-shah" className="no-highlight">
                                    <div className="no-highlight about_us_social_icon_font">
                                        <FaLinkedinIn />
                                    </div>
                                </Link>
                                <Link to="https://github.com/Rajat101010" className="no-highlight">
                                    <div className="no-highlight about_us_social_icon_font">
                                        <LuGithub />
                                    </div>
                                </Link>
                                <Link to="https://www.rajatrajshah.com.np" className="no-highlight">
                                    <div className="no-highlight about_us_social_icon_font">
                                        <FaUserSecret />
                                    </div>
                                </Link>
                                <Link to="https://x.com/rajat_raj_shah" className="no-highlight">
                                    <div className="no-highlight about_us_social_icon_font">
                                        <FaXTwitter />
                                    </div>
                                </Link>
                                <Link to="mailto:rajatrajshah@gmail.com" className="no-highlight">
                                    <div className="no-highlight about_us_social_icon_font">
                                        <SiGmail />
                                    </div>
                                </Link>
                            </div>
                        </font>
                    </div>
                </div>
                <div className='copyright_message_footer'>
                    <font className='copyright_font'>
                        Copyright © 2026 Air Runner Ltd. All rights reserved
                    </font>
                    <font className='copyright_font_description'>
                        Use of this website is subject to our Privacy Notice, Conditions of Carriage, and Terms and Conditions.
                    </font>
                </div>
            </div>
        </main>
    );
}

export default LaptopFooter;