import HolidayHeader from './../../components/component/header/hiliday_header.jsx';

import Holiday from './../../components/component/holiday_components/holiday.jsx';


import FooterNone from './../../components/component/footer/footer_none.jsx'
import LaptopFooter from './../../components/component/footer/laptop_footer.jsx';



function Home() {
    return (
            <main>
                <HolidayHeader />
                <Holiday />

                <FooterNone />
                <LaptopFooter />

            </main>
    );
}

export default Home;

