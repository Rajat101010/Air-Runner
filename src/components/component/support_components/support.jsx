import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/our_experties_components/our_experties.css";
import "../../../components/css/travel_assistance_components/travel_assistance.css";
import "../../../components/css/destination_discovery_components/destination_discovery.css";

// import { Link } from "react-router-dom";

import { Support_Description } from '../description/description'

import { MdSupportAgent } from "react-icons/md";

// import { Bali_Description } from '../description/description'
// import { Paris_Description } from '../description/description'
// import { Rome_Description } from '../description/description'
// import { Bangkok_Description } from '../description/description'
// import { Dubai_Description } from '../description/description'
// import { Kyoto_Description } from '../description/description'
// import { London_Description } from '../description/description'

// import destination_discovery_image_1 from '../../../assets/destination_discovery_pictures/1.webp';
// import destination_discovery_image_2 from '../../../assets/destination_discovery_pictures/2.webp';
// import destination_discovery_image_3 from '../../../assets/destination_discovery_pictures/3.webp';
// import destination_discovery_image_4 from '../../../assets/destination_discovery_pictures/4.webp';
// import destination_discovery_image_5 from '../../../assets/destination_discovery_pictures/5.webp';
// import destination_discovery_image_6 from '../../../assets/destination_discovery_pictures/6.webp';
// import destination_discovery_image_7 from '../../../assets/destination_discovery_pictures/7.webp';

function Support() {
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
                <div className="destination_description_page_content">
                    hi
                </div>
            </div>
        </main >
    );
}

export default Support;