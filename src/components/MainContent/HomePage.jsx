import React from 'react'
import Home from "./Home/Home";
import MyServices from './MyServices/MyServices';
import PricePlans from './PricePlans/PricePlans';
import Recomend from './Recom/Recomend';
import Education from './Education/Education';
import Portfolio from './Portfolio/Portfolio';

const HomePage = () => {
  return (
    <div>
        <Home/>
        <MyServices />
        <PricePlans />
        <Recomend />
        <Education Naming={"Education"} />
        <Education Naming={"Work History"} />
        <Portfolio />
    </div>
  )
}

export default HomePage