import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Banner from "./Sections/Banner";
import {HomePageWrapper} from "./HomePage.style";
import CountUp from "./Sections/Countup";
import WhatWeDo from "./Sections/WhatWeDo";
import OurWorks from "./Sections/OurWorks";
import Contacts from "./Sections/Contacts";

const HomePage = () => {
  return (
    <HomePageWrapper>
       <div className="effects">
         <div className="effect1"></div>
         <div className="effect2"></div>
         <div className="effect3"></div>
       </div>
      <Header/>
      <Banner/>
      <CountUp/>
      <WhatWeDo/>
      <OurWorks/>
      <Contacts/>
      <Footer/>
    </HomePageWrapper>
  );
};

export default HomePage;