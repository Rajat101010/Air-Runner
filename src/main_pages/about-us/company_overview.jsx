import HeaderNone from './../../components/component/header/header_none.jsx';

import CompanyOverviewComponent from './../../components/component/about_us_components/company_overview/company_overview.jsx';


import FooterNone from './../../components/component/footer/footer_none.jsx'
import LaptopFooter from './../../components/component/footer/laptop_footer.jsx';



function CompanyOverview() {
    return (
            <main>
                <HeaderNone />
                <CompanyOverviewComponent />

                <FooterNone />
                <LaptopFooter />

            </main>
    );
}

export default CompanyOverview;

