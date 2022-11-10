import React from 'react';
import {BannerWrapper} from "./Banner.style";
import Container from "../../../../Common/Container";
import ToBottom from "../../../../Common/Svgs/ToBottom";
import MyLink from "../../../../Common/MyLink";
import Typical from 'react-typical'

const Banner = () => {
  return (
    <BannerWrapper id="banner">
      <Container >
        <div className="wrapper">
          <div className="left">
            <h3>We make your <span>&lt;<Typical
              steps={['/Life', 1500, '/Business', 1500, '/Work', 1500]}
              loop={Infinity}
              wrapper="p"
            />&gt;</span> easier with tech
            </h3>
            <button>Explore</button>
          </div>
          <div className="right">
            <img src="images/31.png" alt=""/>
          </div>
        </div>

      </Container>
      <MyLink to="/#countup" className="bottomLink">
        <ToBottom/>
      </MyLink>
    </BannerWrapper>
)
}

export default Banner;