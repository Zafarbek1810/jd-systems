import styled from "styled-components";

const HomePageWrapper=styled.div`
  .effect1 {
    box-sizing: border-box;
    position: absolute;
    width: 90%;
    height: 100%;
    left: -30%;
    top: -30%;
    background: rgba(173, 0, 255, 0.3);
    filter: blur(500px);
    z-index: -22;
  }
  
  .effect2{
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 1194px;
    z-index: -22;
    background: rgba(0, 255, 87, 0.3);
    filter: blur(450px);
  }
  
  .effect3{
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -30%;
    top: 2437px;
    z-index: -22;
    background: rgba(255, 0, 0, 0.3);
    filter: blur(450px);
  }

  
`

export{ HomePageWrapper }