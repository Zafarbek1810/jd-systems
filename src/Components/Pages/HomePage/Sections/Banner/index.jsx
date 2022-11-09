import React from 'react';
import {BannerWrapper} from "./Banner.style";
import Container from "../../../../Common/Container";
import ToBottom from "../../../../Common/Svgs/ToBottom";
import MyLink from "../../../../Common/MyLink";

const Banner = () => {
  return (
    <BannerWrapper id="banner">
      <Container >
        <div className="wrapper">
          <div className="left">
            <h3>We make your <span>&lt;/Life&gt;</span> easier with tech
            </h3>
            <button>Explore</button>
          </div>
          <div className="right">
            <img src="images/31.png" alt=""/>
          </div>
        </div>

      </Container>
      <MyLink to="/" className="bottomLink">
        <ToBottom/>
      </MyLink>
    </BannerWrapper>
)
}

export default Banner;