import EliteCardHeader from './../../components/component/header/elite-card_header.jsx';

import EliteCardComponent from './../../components/component/elite_card_components/elite_card.jsx';


import FooterNone from './../../components/component/footer/footer_none.jsx'
import LaptopFooter from './../../components/component/footer/laptop_footer.jsx';


function EliteCard() {
    return (
            <main>
                <EliteCardHeader />
                <EliteCardComponent />

                <FooterNone />
                <LaptopFooter />

            </main>
    );
}

export default EliteCard;



