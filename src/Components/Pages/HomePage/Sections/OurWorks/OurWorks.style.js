import styled from "styled-components";

const OurWorksWrapper=styled.div`
  h3{
    font-family: 'Share Tech Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 56px;
    color: #1B221F;
    text-align: center;
  }

  .card{
    z-index: 2;
    user-select: none;
    position: relative;
    margin: 20px 0;
    background: #FFFFFF;
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.15);
    border: none;
    clip-path: polygon(20% 0, 100% 0, 100% 43%, 100% 85%, 80% 100%, 32% 100%, 0 100%, 0% 43%, 0 15%);

    .card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      position: relative;
      z-index: 100;
    }
    
    
    .image{
      position: relative;
      height: 340px;
      width: 100%;
      /* padding: 3px; */
      background: rgba(65, 151, 146, 1);
      clip-path: polygon(20% 0, 100% 0, 100% 43%, 100% 85%, 100% 100%, 32% 100%, 0 100%, 0% 43%, 0 17%);
    }

    .play {
      position: absolute;
      bottom: 80px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: #fff;
      border-radius: 50%;
      padding: 10px;
      border: none;
    }

    .name-descr {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 10px;
    }

    .name {
      font-family: 'Ubuntu Mono';
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 25px;
      color: #000000;
      margin-left: -70px;
    }

    .descr {
      font-family: 'Ubuntu Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.6);
      margin-left: -70px;
    }

    .swiper-button-next,
    .swiper-button-prev {
      opacity: 0.7;
      color: rgba(160, 17, 248, 1);
      transition: all 0.3s ease;
      height: 10px;
      transform: translateY(40px) scale(0.6);
    }

    .swiper-button-next:hover,
    .swiper-button-prev:hover {
      opacity: 1;
      color: #7d2ae8;
    }

  }
`

export{OurWorksWrapper}