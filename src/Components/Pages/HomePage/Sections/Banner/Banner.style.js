import styled from "styled-components";

const BannerWrapper = styled.div`
  text-align: center;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 40%;

      h3 {
        font-family: 'Share Tech Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        text-align: start;

        span {
          display: flex;
          align-items: center;
          height: 65px;
          color: #9E00FF;
        }
      }

      button {
        margin-left: 50%;
        margin-top: 30px;
        width: 150px;
        height: 50px;
        background: linear-gradient(90deg, rgba(255, 130, 175, 1) 0%, rgba(160, 17, 248, 1) 100%);
        border: none;
        clip-path: polygon(10% 0, 100% 0, 100% 20%, 100% 80%, 90% 100%, 20% 100%, 0 100%, 0% 20%);
        font-family: 'Share Tech Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 28px;
        color: #FFFFFF;
      }
    }

    .right {

    }
  }

  @media (max-width: 850px) {
    .wrapper{
      flex-direction: column;
      
      .left{
        width: 100%;
        
        button{
          margin-top: 0;
        }
      }
      
      .right{
        width: 100%;
        
        img{
          width: 100%;
        }
      }
    }
  }
`

export {BannerWrapper}