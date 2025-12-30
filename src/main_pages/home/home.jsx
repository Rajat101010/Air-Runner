import HomeHeader from './../../components/component/header/home_header.jsx';
import ImageChanger from './../../components/component/home_components/image_changing.jsx';

import OfferAndHoliday from './../../components/component/home_components/offer_and_holiday.jsx';
import OurExpertise from './../../components/component/home_components/our_experties.jsx';
import ExploreNewPlaces from './../../components/component/home_components/explore_new_places.jsx';


import FooterHome from './../../components/component/footer/footer_home.jsx'


function Home() {
    return (
            <main>
                <HomeHeader />
                <ImageChanger />
                <OfferAndHoliday />
                <OurExpertise />
                <ExploreNewPlaces />


                <br /><br /><br /><br />

                <FooterHome />

            </main>
    );
}

export default Home;

