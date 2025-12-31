import '../../../css/header/header.css'
import '../../../css/header/menu_panel.css'
import { useState } from "react";
import { Link } from "react-router-dom";

import { FaSuitcaseRolling } from "react-icons/fa6";
import { RiVipCrown2Fill } from "react-icons/ri";

import InstallAppButton from "./app_install_button";
import { IoIosArrowForward } from "react-icons/io";

import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdAssistantNavigation } from "react-icons/md";
import { TbInfoHexagonFilled } from "react-icons/tb";
import { FaMicroblog } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { RiFilePaper2Fill } from "react-icons/ri";
import { MdPolicy } from "react-icons/md";
import { IoGift } from "react-icons/io5";

function MenuPannel() {

    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };

    return (
        <main>
            <div className='menu_panel_separate_main'>
                <div className='account_and_close_icon'>
                    <div>
                        <font className='font_for_icons_active'>
                            Action Bar
                        </font>
                    </div>
                </div>
                <div className='login_and_signup_ui'>
                    <Link to="/log-in" className="no-highlight">
                        <div className='login'>
                            <font className='font_for_login'>
                                Log in
                            </font>
                        </div>
                    </Link>
                    <Link to="/sign-up" className="no-highlight">
                        <div className='signup'>
                            <font className='font_for_signup'>
                                Sign up
                            </font>
                        </div>
                    </Link>
                </div>
                <div className='action_bar_icons_and_name'>
                    <div className='link_fix_no_laptop'>
                        <Link to="/holiday" className="no-highlight">
                            <div className='action_bar_icons_and_name_individual action_bar_icons_and_name_individual_no_display action_bar_font no-highlight'>
                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                    <div className='header_icons_individual'>
                                        <FaSuitcaseRolling />
                                    </div>
                                    <div>
                                        &nbsp;Holiday
                                    </div>
                                </div>
                                <div className='arrow_to_go'>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='link_fix_no_laptop'>
                        <Link to="/elite-card" className="no-highlight">
                            <div className='action_bar_icons_and_name_individual action_bar_icons_and_name_individual_no_display action_bar_font no-highlight'>
                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                    <div className='header_icons_individual'>
                                        <RiVipCrown2Fill />
                                    </div>
                                    <div>
                                        &nbsp;Elite Card
                                    </div>
                                </div>
                                <div className='arrow_to_go'>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='action_bar_icons_and_name_individual action_bar_font no-highlight' onClick={handleClick}>
                        <div className='action_bar_icons_and_name_individual_no_arrow'>
                            <div className='header_icons_individual'>
                                <IoGift />
                            </div>
                            <div>
                                &nbsp;Gifts
                            </div>
                        </div>
                        <div className='arrow_to_go'>
                            <IoIosArrowForward />
                        </div>
                    </div>
                    {showPopup && (
                        <div className="gift_popup">
                            There are no gifts at the moment
                        </div>
                    )}
                    <div className='link_fix'>
                        <Link to="/our-experties" className="no-highlight">
                            <div className='action_bar_icons_and_name_individual action_bar_font no-highlight'>
                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                    <div className='header_icons_individual'>
                                        <AiFillSafetyCertificate />
                                    </div>
                                    <div>
                                        &nbsp;Our Expertise
                                    </div>
                                </div>
                                <div className='arrow_to_go'>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='link_fix'>
                        <Link to="/travel-assistance" className="no-highlight">
                            <div className='action_bar_icons_and_name_individual action_bar_font no-highlight'>
                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                    <div className='header_icons_individual'>
                                        <MdAssistantNavigation />
                                    </div>
                                    <div>
                                        &nbsp;Travel Assistance
                                    </div>
                                </div>
                                <div className='arrow_to_go'>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='link_fix'>
                        <Link to="/about-us" className="no-highlight">
                            <div className='action_bar_icons_and_name_individual action_bar_font no-highlight'>
                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                    <div className='header_icons_individual'>
                                        <TbInfoHexagonFilled />
                                    </div>
                                    <div>
                                        &nbsp;About Us
                                    </div>
                                </div>
                                <div className='arrow_to_go'>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='link_fix'>
                        <Link to="/blogs" className="no-highlight">
                            <div className='action_bar_icons_and_name_individual action_bar_font no-highlight'>
                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                    <div className='header_icons_individual'>
                                        <FaMicroblog />
                                    </div>
                                    <div>
                                        &nbsp;Blogs
                                    </div>
                                </div>
                                <div className='arrow_to_go'>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='link_fix'>
                        <Link to="/support" className="no-highlight">
                            <div className='action_bar_icons_and_name_individual action_bar_font no-highlight'>
                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                    <div className='header_icons_individual'>
                                        <MdSupportAgent />
                                    </div>
                                    <div>
                                        &nbsp;Support
                                    </div>
                                </div>
                                <div className='arrow_to_go'>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='link_fix_no_mobile'>
                        <Link to="/t-&-c" className="no-highlight">
                            <div className='action_bar_icons_and_name_individual action_bar_icons_and_name_individual_no_display_in_mobile action_bar_font no-highlight'>
                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                    <div className='header_icons_individual'>
                                        <RiFilePaper2Fill />
                                    </div>
                                    <div>
                                        &nbsp;Terms and Conditions
                                    </div>
                                </div>
                                <div className='arrow_to_go'>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='link_fix'>
                        <Link to="/policy" className="no-highlight">
                            <div className='action_bar_icons_and_name_individual action_bar_font no-highlight'>
                                <div className='action_bar_icons_and_name_individual_no_arrow'>
                                    <div className='header_icons_individual'>
                                        <MdPolicy />
                                    </div>
                                    <div>
                                        &nbsp;Policy
                                    </div>
                                </div>
                                <div className='arrow_to_go'>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='install_the_app'>
                    <InstallAppButton />
                </div>
            </div>
        </main>
    );
}

export default MenuPannel;