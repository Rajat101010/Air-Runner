import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/our_experties_components/our_experties.css";
import "../../../components/css/travel_assistance_components/travel_assistance.css";
import "../../../components/css/destination_discovery_components/destination_discovery.css";
import "../../../components/css/t-&-c_components/t-&-c.css";

// import { Link } from "react-router-dom";

import { TermsAndCondition_Description } from '../description/description'

import { RiFilePaper2Fill } from "react-icons/ri";


import { TermsAndCondition_Description_Ttile_1 } from './description'
import { TermsAndCondition_Description_Description_1 } from './description'

import { TermsAndCondition_Description_Ttile_2 } from './description'
import { TermsAndCondition_Description_Description_2 } from './description'

import { TermsAndCondition_Description_Ttile_3 } from './description'
import { TermsAndCondition_Description_Description_3 } from './description'

import { TermsAndCondition_Description_Ttile_4 } from './description'
import { TermsAndCondition_Description_Description_4 } from './description'

import { TermsAndCondition_Description_Ttile_5 } from './description'
import { TermsAndCondition_Description_Description_5 } from './description'



function TermsAndCondition() {
    return (
        <main>
            <div className='our_expertise__page_parent'>
                <div className="our_expertise_title">
                    <font className='home_title_font'>
                        <div className="our_expertise_title_title">
                            <div>
                                <RiFilePaper2Fill />
                            </div>
                            <div>
                                &nbsp;Terms and Conditions
                            </div>
                        </div>
                    </font>
                    <font className='home_description_font'>
                        <p className="truncate-2 our_expertise_description_paragraph">
                            {TermsAndCondition_Description}
                        </p>
                    </font>
                </div>
                <div className="tnc_page_content">
                    <div className="title_title_tnc_page_content">
                        <font className='title_title_tnc_page_content_font_1'>
                            Air Runner Website and Mobile App Terms
                        </font>
                        <font className='title_title_tnc_page_content_font_2'>
                            Last Updated: 21st March 2025
                        </font>
                    </div>
                    <div>
                        <font className='tnc_page_content_title_font'>
                            { TermsAndCondition_Description_Ttile_1 }
                        </font>
                        <font className='tnc_page_content_description_font truncate-all our_expertise_description_paragraph'>
                            { TermsAndCondition_Description_Description_1 }
                        </font>
                    </div>
                    <div>
                        <font className='tnc_page_content_title_font'>
                            { TermsAndCondition_Description_Ttile_2 }
                        </font>
                        <font className='tnc_page_content_description_font truncate-all our_expertise_description_paragraph'>
                            { TermsAndCondition_Description_Description_2 }
                        </font>
                    </div>
                    <div>
                        <font className='tnc_page_content_title_font'>
                            { TermsAndCondition_Description_Ttile_3 }
                        </font>
                        <font className='tnc_page_content_description_font truncate-all our_expertise_description_paragraph'>
                            { TermsAndCondition_Description_Description_3 }
                        </font>
                    </div>
                    <div>
                        <font className='tnc_page_content_title_font'>
                            { TermsAndCondition_Description_Ttile_4 }
                        </font>
                        <font className='tnc_page_content_description_font truncate-all our_expertise_description_paragraph'>
                            { TermsAndCondition_Description_Description_4 }
                        </font>
                    </div>
                    <div>
                        <font className='tnc_page_content_title_font'>
                            { TermsAndCondition_Description_Ttile_5 }
                        </font>
                        <font className='tnc_page_content_description_font truncate-all our_expertise_description_paragraph'>
                            { TermsAndCondition_Description_Description_5 }
                        </font>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default TermsAndCondition;