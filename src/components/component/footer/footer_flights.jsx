import { Link } from "react-router-dom";

import '../../css/footer/footer.css'

import { AiFillHome } from "react-icons/ai";
import { PiAirplaneFill } from "react-icons/pi";
import { MdLocalOffer } from "react-icons/md";
// import { MdAirplaneTicket } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";

function FooterHome(){
    return(
        <main>
            <div className='footer_parent'>
                <Link to="/" className="no-highlight">
                    <div className='footer_items'>
                        <center>
                            <AiFillHome size={20} className='footer_all_item' />
                            <br />
                            <font className='footer_item_font'>
                                Home
                            </font>
                        </center>
                    </div>
                </Link>
                <Link to="/flights" className="no-highlight">
                    <div className='footer_items'>
                        <center>
                            <PiAirplaneFill size={20} className='footer_all_item footer_active_item' />
                            <br />
                            <font className='footer_item_font_active'>
                                Flights
                            </font>
                        </center>
                    </div>
                </Link>
                <Link to="/offers" className="no-highlight">
                    <div className='footer_items'>
                        <center>
                            <MdLocalOffer size={20} className='footer_all_item' />
                            <br />
                            <font className='footer_item_font'>
                                Offers
                            </font>
                        </center>
                    </div>
                </Link>
                <Link to="/destination" className="no-highlight">
                    <div className='footer_items'>
                        <center>
                            <MdMyLocation size={20} className='footer_all_item' />
                            <br />
                            <font className='footer_item_font'>
                                Destination
                            </font>
                        </center>
                    </div>
                </Link>
            </div>
        </main>
    );
}

export default FooterHome;