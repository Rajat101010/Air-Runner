import './App.css';
import React from "react";

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

function App() {

  return (
    <main>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flights' element={<Flights />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/holiday' element={<Holiday />} />
          <Route path='/elite-card' element={<EliteCard />} />

          {/* <Route path="/days" element={<Navigate to={`/${days}`} />} /> */}
        </Routes>
      </Router>

    </main>
  );
}

export default App;
