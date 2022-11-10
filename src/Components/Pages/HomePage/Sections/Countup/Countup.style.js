import styled from "styled-components";

const CountupWrapper = styled.div`
  padding: 100px 0;

  .counters {
    display: flex;

    .counter {
      width: 33%;
      display: flex;
      align-items: center;
      padding: 20px;
      margin: 0 15px;
      background: -webkit-radial-gradient(0% 100%, circle, transparent 15%, #A011F8 15%) no-repeat, -webkit-radial-gradient(100% 0%, circle, transparent 15%, #A011F8 15%) no-repeat,
      -webkit-radial-gradient(0% 0%, circle, transparent 15%, #A011F8 15%) no-repeat, -webkit-radial-gradient(100% 100%, circle, transparent 15%, #A011F8 15%) no-repeat;
      background: radial-gradient(circle at 0% 100%, transparent 15%, #A011F8 15%) no-repeat, radial-gradient(circle at 100% 0%, transparent 15%, #A011F8 15%) no-repeat, radial-gradient(circle at 0% 0%, transparent 15%, #A011F8 15%) no-repeat, radial-gradient(circle at 100% 100%, transparent 15%, #A011F8 15%) no-repeat;
      background-position: 0% 100%, 100% 0%, 0% 0%, 100% 100%;
      background-size: 50% 50%;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

      .icon {
        margin-right: 20px;
      }

      .text {
        display: flex;
        flex-direction: column;

        .top {
          font-family: 'Ubuntu Mono';
          font-style: normal;
          font-weight: 400;
          font-size: 23px;
          line-height: 30px;
          color: #FFFFFF;
        }

        .bottom {
          span {
            font-family: 'Ubuntu Mono';
            font-style: normal;
            font-weight: 700;
            font-size: 60px;
            line-height: 70px;
            color: #FFFFFF;
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .counters {
      flex-direction: column;
      align-items: center;

      .counter {
        width: 80%;
        padding: 50px 30px;
        margin-bottom: 40px;
      }
    }
  }

  @media (max-width: 500px) {
    .counters {
      flex-direction: column;
      align-items: center;

      .counter {
        width: 80%;
        padding: 10px;
        margin-bottom: 40px;

        .icon {
          transform: scale(0.70);
        }

        .text {
          .top {
            font-size: 18px;
          }

          .bottom {
            span {
              font-size: 40px;
            }
          }
        }
      }
    }
  }
`

export {CountupWrapper}