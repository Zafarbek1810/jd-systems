import React from 'react';
import {ContactsWrapper} from "./Contacts.style";
import Container from "../../../../Common/Container";
import UserSvg from "../../../../Common/Svgs/UserSvg";
import PhoneSvg from "../../../../Common/Svgs/PhoneSvg";
import MessageSvg from "../../../../Common/Svgs/MessageSvg";
import LocationSvg from "../../../../Common/Svgs/LocationSvg";

const Contacts = () => {
  return (
    <ContactsWrapper id="contacts">
      <Container>
        <div className="forma">
          <h3>&lt;/Contacts&gt;</h3>
          <div className="wrapper">
            <div className="left">
              <form>
                <div className="name">
                  <div className="icon">
                    <UserSvg/>
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="phone">
                  <div className="icon">
                    <PhoneSvg/>
                  </div>
                  <input
                    type="text"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="message">
                  <div className="icon">
                    <MessageSvg/>
                  </div>
                  <textarea
                  placeholder="Your message"
                  required
                  />
                </div>

                <div className="btn">
                  <button type="submit" className="button">Send</button>
                </div>
              </form>
            </div>
            <div className="line"></div>
            <div className="right">
              <div className="text">
                <div className="phones">
                  <PhoneSvg/>
                  <p>+998(98)000-00-00</p>
                </div>
                <div className="address">
                  <LocationSvg/>
                  <p>Tashkent, Uzbekistan</p>
                </div>
                <div className="mail">
                  <MessageSvg/>
                  <p>email@email.com</p>
                </div>
              </div>
              <div className="map">
                  <iframe
                    src="https://yandex.uz/map-widget/v1/-/CCUbE2sVpD"
                    width="60%" height="250" frameBorder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ContactsWrapper>
  );
};

export default Contacts;