import React from 'react'
import Home from "./Home/Home";
import MyServices from './MyServices/MyServices';
import PricePlans from './PricePlans/PricePlans';
import Recomend from './Recom/Recomend';
import Education from './Education/Education';
import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Maps from './Maps/Maps';
import Footer from './Footer/Footer';
import OffCanvasSearch from './offCanvas/OffCanvasSearch';

const HomePage = () => {
  return (
    <div>
        <OffCanvasSearch /> 
        <Home/>
        <MyServices />
        <PricePlans />
        <Recomend />
        <Education Naming={"Education"} />
        <Education Naming={"Work History"} />
        <Portfolio />
        <Blog />
        <Contact/>
        <Maps />
        <Footer />
    </div>
  )
}

export default HomePage