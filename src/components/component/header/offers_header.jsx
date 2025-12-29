import '../../css/header/header.css'
import '../../css/header/menu_panel.css'
import { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { PiAirplaneFill } from "react-icons/pi";
import { MdLocalOffer } from "react-icons/md";
import { MdAirplaneTicket } from "react-icons/md";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { RiVipCrown2Fill } from "react-icons/ri";

import MenuPannel from './features/menu_pannel';

import LogoTransparent from '../../../assets/pictures/logo_transparent.webp'

function HomeHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setIsMenuOpen(false); // close when clicking outside image
    };

    const handleMenu = (e) => {
        e.stopPropagation(); // prevent closing when clicking image
    };

    return (
        <main>
            <div className="header_parent">
                <div className='header_app_name'>
                    <img
                        src={LogoTransparent}
                        alt="logo"
                        className='logo_header'
                        loading="lazy"
                    />
                    <font className='font_app_name'>
                        Air Runner
                    </font>
                </div>

                <div className='header_icons'>
                    <div className='header_icons_pages'>
                        <Link to="/" className="no-highlight">
                            <font className='font_for_icons'>
                                <div className='icon_and_name'>
                                    <div className='header_icons_individual'>
                                        <AiFillHome />
                                    </div>
                                    <div>
                                        &nbsp;Home
                                    </div>
                                </div>
                            </font>
                        </Link>
                        <Link to="/flights" className="no-highlight">
                            <font className='font_for_icons'>
                                <div className='icon_and_name'>
                                    <div className='header_icons_individual'>
                                        <PiAirplaneFill />
                                    </div>
                                    <div>
                                        &nbsp;Flights
                                    </div>
                                </div>
                            </font>
                        </Link>
                        <Link to="/offers" className="no-highlight">
                            <font className='font_for_icons_active'>
                                <div className='icon_and_name'>
                                    <div className='header_icons_individual'>
                                        <MdLocalOffer />
                                    </div>
                                    <div>
                                        &nbsp;Offers
                                    </div>
                                </div>
                            </font>
                        </Link>
                        <Link to="/status" className="no-highlight">
                            <font className='font_for_icons'>
                                <div className='icon_and_name'>
                                    <div className='header_icons_individual'>
                                        <MdAirplaneTicket />
                                    </div>
                                    <div>
                                        &nbsp;Status
                                    </div>
                                </div>
                            </font>
                        </Link>
                        <Link to="/holiday" className="no-highlight">
                            <font className='font_for_icons'>
                                <div className='icon_and_name'>
                                    <div className='header_icons_individual'>
                                        <FaSuitcaseRolling />
                                    </div>
                                    <div>
                                        &nbsp;Holiday
                                    </div>
                                </div>
                            </font>
                        </Link>
                        <Link to="/elite-card" className="no-highlight">
                            <font className='font_for_icons'>
                                <div className='icon_and_name'>
                                    <div className='header_icons_individual'>
                                        <RiVipCrown2Fill />
                                    </div>
                                    <div>
                                        &nbsp;Elite Card
                                    </div>
                                </div>
                            </font>
                        </Link>
                    </div>

                    <div
                        className="menu_icon no-highlight"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <font className='font_for_app_name_menu'>
                            <AiOutlineMenu />
                        </font>
                    </div>
                </div>
            </div>

            {/* Menu Panel */}
            {isMenuOpen && (
                <div className="overlay_title" onClick={handleMenuClose}>
                    <div className="menu_panel" onClick={handleMenu}>
                        <MenuPannel />
                    </div>
                </div>
            )}
        </main>
    );
}

export default HomeHeader;

