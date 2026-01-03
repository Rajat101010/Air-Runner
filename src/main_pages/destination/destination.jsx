import DestinationHeader from '../../components/component/header/destination_header.jsx';

import DestinationDiscoveryComponent from './../../components/component/destination_discovery_components/destination_description.jsx';


import FooterDestination from '../../components/component/footer/footer_destination.jsx'
import LaptopFooter from './../../components/component/footer/laptop_footer.jsx';


function Destination() {
    return (
        <main>
            <DestinationHeader />
            <DestinationDiscoveryComponent />

            <FooterDestination />
            <LaptopFooter />
        </main>
    );
}

export default Destination;

