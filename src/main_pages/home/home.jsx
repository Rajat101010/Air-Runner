import HomeHeader from './../../components/component/header/home_header.jsx';
import ImageChanger from './../../components/component/home_components/image_changing.jsx';

import OfferAndHoliday from './../../components/component/home_components/offer_and_holiday.jsx';
import OurExpertise from './../../components/component/home_components/our_experties.jsx';
import TravelAssistance from './../../components/component/home_components/travel_assistance.jsx';
import EliteCard from './../../components/component/home_components/elite_card.jsx';


import DestinationDiscovery from '../../components/component/home_components/destination_discovery.jsx';


import FooterHome from './../../components/component/footer/footer_home.jsx'
import LaptopFooter from './../../components/component/footer/laptop_footer.jsx'


function Home() {
    return (
            <main>
                <HomeHeader />
                <ImageChanger />
                <OfferAndHoliday />
                <OurExpertise />
                <TravelAssistance />
                <DestinationDiscovery />
                <EliteCard />

                <FooterHome />
                <LaptopFooter />

            </main>
    );
}

export default Home;

