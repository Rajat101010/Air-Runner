import "../../../components/css/home_components/our_experties.css";


import { OurExpertise_Description } from '../description/description'

import { AiFillSafetyCertificate } from "react-icons/ai";


function OurExpertise() {
    return (
        <main>
            <div className='our_expertise_parent'>
                <div className="our_expertise_title">
                    <font className='home_title_font'>
                        <div className="our_expertise_title_title">
                            <div>
                                <AiFillSafetyCertificate />
                            </div>
                            <div>
                                &nbsp;Our Expertise
                            </div>
                        </div>
                    </font>
                    <font className='home_description_font'>
                        <p className="truncate-2">
                            {OurExpertise_Description}
                        </p>
                    </font>
                </div>
            </div>
        </main>
    );
}

export default OurExpertise;