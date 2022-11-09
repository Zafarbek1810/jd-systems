import React from 'react';
import {OurWorksWrapper} from "./OurWorks.style";
import Container from "../../../../Common/Container";
import {Pagination, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import PlayIcon from "../../../../Common/Svgs/PlayIcon";

const OurWorks = () => {
  return (
    <OurWorksWrapper id="ourworks">
      <Container>
        <h3>&lt;/Our works&gt;</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <div className="card-content">
                <div className="image"></div>
                <button className="play">
                  <PlayIcon/>
                </button>
                <div className="name-descr">
                  <span className="name">Project name</span>
                  <span className="descr">Small info about project</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-content">
                <div className="image"></div>
                <button className="play">
                  <PlayIcon/>
                </button>
                <div className="name-descr">
                  <span className="name">Project name</span>
                  <span className="descr">Small info about project</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-content">
                <div className="image"></div>
                <button className="play">
                  <PlayIcon/>
                </button>
                <div className="name-descr">
                  <span className="name">Project name</span>
                  <span className="descr">Small info about project</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-content">
                <div className="image"></div>
                <button className="play">
                  <PlayIcon/>
                </button>
                <div className="name-descr">
                  <span className="name">Project name</span>
                  <span className="descr">Small info about project</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </Container>
    </OurWorksWrapper>
  );
};

export default OurWorks;