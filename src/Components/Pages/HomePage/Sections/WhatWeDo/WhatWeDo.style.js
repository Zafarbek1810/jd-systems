import styled from "styled-components";

const WhatWeDoWrapper=styled.div`
  padding: 50px 0;
  h3{
    font-family: 'Share Tech Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 56px;
    color: #1B221F;
    text-align: center;
  }
  
  .cards{
    display: flex;
    justify-content: space-between;
    
    .card{
      width: 20%;
      z-index: 3;
      background: #FFFFFF;
      box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.15);
      border-radius: 24px;
      padding: 20px;

      .icon{
        width: 50px;
        height: 50px;
        background: rgba(106, 78, 219, 0.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        .svg{
          width: 30px;
          height: 30px;
        }
      }
      h5{
        margin-top: 25px;
        font-family: 'Ubuntu Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 25px;
        color: #000000;
      }
      
      p{
        font-family: 'Ubuntu Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`

export{ WhatWeDoWrapper}