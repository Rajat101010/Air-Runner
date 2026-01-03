import './App.css';
import React from "react";
import ScrollToTop from "./features/ScrollToTop";


//routers(page changing)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//assets
import './assets/fonts.css';

//pages
import Home from './main_pages/home/home';
import Flights from './main_pages/flights/flights';
import Offers from './main_pages/offers/offers';
import Destination from './main_pages/destination/destination';
import Holiday from './main_pages/holiday/holiday';
import EliteCard from './main_pages/elite-card/elite-card';
import OurExperties from './main_pages/our-expertise/our-expertise';
import TravelAssistance from './main_pages/travel-assistance/travel-assistance';
import AboutUs from './main_pages/about-us/about-us';
import Blogs from './main_pages/blogs/blogs';
import Support from './main_pages/support/support';
import TermsAndConditions from './main_pages/t-&-c/t-&-c';
import Policy from './main_pages/policy/policy';

function App() {

  return (
    <main>

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flights' element={<Flights />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/holiday' element={<Holiday />} />
          <Route path='/elite-card' element={<EliteCard />} />
          <Route path='/our-experties' element={<OurExperties />} />
          <Route path='/travel-assistance' element={<TravelAssistance />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/support' element={<Support />} />
          <Route path='/t-&-c' element={<TermsAndConditions />} />
          <Route path='/policy' element={<Policy />} />

          {/* <Route path="/days" element={<Navigate to={`/${days}`} />} /> */}
        </Routes>
      </Router>

    </main>
  );
}

export default App;
