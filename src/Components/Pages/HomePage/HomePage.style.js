import styled from "styled-components";

const HomePageWrapper=styled.div`
  .effect1 {
    box-sizing: border-box;
    position: absolute;
    width: 70%;
    height: 60%;
    left: -30%;
    top: -30%;
    background: rgba(173, 0, 255, 0.3);
    border: 1px solid #000000;
    filter: blur(900px);
  }

  .effect2 {
    position: absolute;
    width: 70%;
    height: 60%;
    left: 30%;
    top: 80%;
    background: rgba(0, 255, 87, 0.3);
    filter: blur(900px);
  }

  .effect3 {
    position: absolute;
    width: 70%;
    height: 60%;
    left: -30%;
    top: 99%;
    background: rgba(255, 0, 0, 0.3);
    filter: blur(900px);
  }
`

export{ HomePageWrapper }