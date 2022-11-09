import React from 'react';
import Container from "../../Common/Container";
import {HeaderWrapper} from "./Header.style";
import Burger from "./Burger/Burger";
import MyLink from "../../Common/MyLink";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          marginTop:'25px'
        }}>
        <MyLink className="logo" to="/">
          <img src="images/logo.png" alt=""/>
        </MyLink>
        <Burger />
      </Container>
    </HeaderWrapper>
  );
};

export default Header;