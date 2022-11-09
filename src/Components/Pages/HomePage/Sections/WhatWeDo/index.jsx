import React from 'react';
import {WhatWeDoWrapper} from "./WhatWeDo.style";
import Container from "../../../../Common/Container";
import WebIcon from "../../../../Common/Svgs/WebIcon";
import AndroidSvg from "../../../../Common/Svgs/AndroidSvg";
import Design from "../../../../Common/Svgs/Design";
import AlgoTrading from "../../../../Common/Svgs/AlgoTrading";

const cardData=[
  {
    icon: <WebIcon/>,
    h5:"Web development",
    p: "We build modern, beautiful websites"
  },
  {
    icon: <AndroidSvg/>,
    h5:"Mobile apps",
    p: "We build innovative, cool mobile apps"
  },
  {
    icon: <Design/>,
    h5:"UI/UX design",
    p: "We design modern user interfaces"
  },
  {
    icon: <AlgoTrading/>,
    h5:"AlgoTrading",
    p: "We create high performance auto trading bots"
  },
]

const WhatWeDo = () => {
  return (
    <WhatWeDoWrapper id="whatwedo">
      <Container>
        <h3>&lt;/What we do&gt;</h3>
        <div className="cards">
          {cardData.map((item, index)=>(
            <div className="card" key={index}>
              <div className="icon">
                <div className="svg">{item.icon}</div>
              </div>
              <h5>{item.h5}</h5>
              <p>{item.p}</p>
            </div>
          ))}
        </div>
      </Container>
    </WhatWeDoWrapper>
  );
};

export default WhatWeDo;