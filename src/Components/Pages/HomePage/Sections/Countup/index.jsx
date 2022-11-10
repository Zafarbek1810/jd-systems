import React from 'react';
import {CountupWrapper} from "./Countup.style";
import Container from "../../../../Common/Container";
import CountUp from "react-countup";

const CountUpSection = () => {
  return (
    <CountupWrapper id="countup">
      <Container>
        <div className="counters">
          <div className="counter">
            <div className="icon">
              <img src="images/icon1.png" alt=""/>
            </div>
            <div className="text">
              <div className="top"><p>Clients</p></div>
              <div className="bottom">
                <span id="first">
                  <CountUp end={40} />+
                </span>
              </div>
            </div>
          </div>

          <div className="counter">
            <div className="icon">
              <img src="images/icon2.png" alt=""/>
            </div>
            <div className="text">
              <div className="top"><p>Works done</p></div>
              <div className="bottom">
                <span id="first">
                  <CountUp end={100} />+
                </span>
              </div>
            </div>
          </div>

          <div className="counter">
            <div className="icon">
              <img src="images/icon3.png" alt=""/>
            </div>
            <div className="text">
              <div className="top"><p>Experience</p></div>
              <div className="bottom">
                <span id="first">
                  <CountUp end={5} />years
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </CountupWrapper>
  );
};

export default CountUpSection;