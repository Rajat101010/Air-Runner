import HolidayHeader from './../../components/component/header/hiliday_header.jsx';

import HolidayComponent from './../../components/component/holiday_components/holiday.jsx';


import FooterNone from './../../components/component/footer/footer_none.jsx'
import LaptopFooter from './../../components/component/footer/laptop_footer.jsx';



function Holiday() {
    return (
            <main>
                <HolidayHeader />
                <HolidayComponent />

                <FooterNone />
                <LaptopFooter />

            </main>
    );
}

export default Holiday;

