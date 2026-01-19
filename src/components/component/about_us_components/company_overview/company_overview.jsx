// import "../../../components/css/home_components/our_experties.css";
import "../../../../components/css/our_experties_components/our_experties.css";
// import "../../../components/css/about_us_components/about_us.css";
// import { Link } from "react-router-dom";

import '../../../css/about_us_components/sub_pages.css'

import title_image from '../../../../assets/about_pictures/company_overview/title.webp'

import { HiDocumentMagnifyingGlass } from "react-icons/hi2";

// import { BsAirplaneFill } from "react-icons/bs";
// import { FaBoxesStacked } from "react-icons/fa6";
// import { FaUserTie } from "react-icons/fa";
// import { PiCertificateFill } from "react-icons/pi";


import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { LiaUsersSolid } from "react-icons/lia";
import { MdAutoGraph } from "react-icons/md";
import { TbPercentage10 } from "react-icons/tb";
import { LuClock } from "react-icons/lu";
import { RiUserFollowLine } from "react-icons/ri";
import { TbUserCancel } from "react-icons/tb";
import { LiaBoxesSolid } from "react-icons/lia";
import { PiAirplaneInFlight } from "react-icons/pi";



import { CompanyOverview_Description } from '../description'

import { FaUserClock } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { PiGraphBold } from "react-icons/pi";


function CompanyOverview() {
    return (
        <main>
            <div>
                <div className="title_image_wrapper">
                    <img
                        src={title_image}
                        alt="title_image"
                        className='title_image_company_overview'
                        loading="lazy"
                    />
                </div>
                <div className="company_overview_parent">
                    <div className="our_expertise_title">
                        <font className='home_title_font'>
                            <div className="our_expertise_title_title">
                                <div>
                                    <HiDocumentMagnifyingGlass />
                                </div>
                                <div>
                                    &nbsp;Company Overview
                                </div>
                            </div>
                        </font>
                        <font className='home_description_font'>
                            <p className="truncate-2 our_expertise_description_paragraph">
                                {CompanyOverview_Description}
                            </p>
                        </font>
                    </div>
                    <div className="company_bluff">
                        <div className="company_bluff_title_div">
                            <font className='about_us_page_company_name_font'>
                                Air Runner
                            </font>
                            <font className='company_bluff_title_font'>
                                Taking the world skyward since 2020
                            </font>
                        </div>
                        <div className="company_bluff_individual_parent company_bluff_font">
                            <div className="company_bluff_individual">
                                <div className="company_bluff_individual_icon">
                                    <FaUserClock size={30} style={{ color: "#053478" }} />
                                </div>
                                <div className="company_bluff_icon_text">
                                    Punctuality
                                </div>
                            </div>
                            <div className="company_bluff_individual">
                                <div className="company_bluff_individual_icon">
                                    <FaHandHoldingHeart size={30} style={{ color: "#053478" }} />
                                </div>
                                <div className="company_bluff_icon_text">
                                    Seamlessness
                                </div>
                            </div>
                            <div className="company_bluff_individual">
                                <div className="company_bluff_individual_icon">
                                    <GiWallet size={30} style={{ color: "#053478" }} />
                                </div>
                                <div className="company_bluff_icon_text">
                                    Affordability
                                </div>
                            </div>
                            <div className="company_bluff_individual">
                                <div className="company_bluff_individual_icon">
                                    <PiGraphBold size={30} style={{ color: "#053478" }} />
                                </div>
                                <div className="company_bluff_icon_text">
                                    Connectivity
                                </div>
                            </div>
                        </div>
                        <div className="company_small_info_titles company_small_info_font">
                            <div className="company_small_info_titles_individual">
                                <div>
                                    <LiaMapMarkedAltSolid size={30} style={{ color: "#2466B3" }} />
                                </div>
                                <div>
                                    150+ Destination
                                </div>
                            </div>
                            <div className="company_small_info_titles_individual">
                                <div>
                                    <PiAirplaneTakeoff size={30} style={{ color: "#2466B3" }} />
                                </div>
                                <div>
                                    2.2K+ Daily Flights
                                </div>
                            </div>
                            <div className="company_small_info_titles_individual">
                                <div>
                                    <LiaUsersSolid size={30} style={{ color: "#2466B3" }} />
                                </div>
                                <div>
                                    50M Passenter
                                </div>
                            </div>
                            <div className="company_small_info_titles_individual">
                                <div>
                                    <MdAutoGraph size={30} style={{ color: "#2466B3" }} />
                                </div>
                                <div>
                                    Largest Airline
                                </div>
                            </div>
                            <div className="company_small_info_titles_individual">
                                <div>
                                    <TbPercentage10 size={30} style={{ color: "#2466B3" }} />
                                </div>
                                <div>
                                    80% Market Share
                                </div>
                            </div>
                            <div className="company_small_info_titles_individual">
                                <div>
                                    <LuClock size={30} style={{ color: "#2466B3" }} />
                                </div>
                                <div>
                                    Always on Time
                                </div>
                            </div>
                            <div className="company_small_info_titles_individual">
                                <div>
                                    <RiUserFollowLine size={30} style={{ color: "#2466B3" }} />
                                </div>
                                <div>
                                    78K Crew Members
                                </div>
                            </div>
                            <div className="company_small_info_titles_individual">
                                <div>
                                    <TbUserCancel size={30} style={{ color: "#2466B3" }} />
                                </div>
                                <div>
                                    Low Cancellation Rate
                                </div>
                            </div>
                            <div className="company_small_info_titles_individual">
                                <div>
                                    <LiaBoxesSolid size={30} style={{ color: "#2466B3" }} />
                                </div>
                                <div>
                                    15M+ Tonnes Cargo
                                </div>
                            </div>
                            <div className="company_small_info_titles_individual">
                                <div>
                                    <PiAirplaneInFlight size={30} style={{ color: "#2466B3" }} />
                                </div>
                                <div>
                                    800 Total Aircraft
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default CompanyOverview;