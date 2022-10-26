import React from "react";
import CallIcon from "@mui/icons-material/Call";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
function Header() {
  return (
    <Container>
      <Left>
        <LogoTxt>Logo</LogoTxt>

        <Logo>
          <LinkContainer>
            <Links to="/search-products">Search Products</Links>
            <Links to="/about">About Us</Links>
            <Links to="/contact">Contact Us</Links>
          </LinkContainer>
        </Logo>
      </Left>
      <Right>
        <ButtonICon>
          <CallIcon />
        </ButtonICon>

        <CallContainer>
          <Links to="/contact">Contact Us</Links>
          <NumTxt>+91 9876543234</NumTxt>
        </CallContainer>
      </Right>
    </Container>
  );
}

export default Header;

const NumTxt = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Img = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonICon = styled(IconButton)`
  && {
    padding: 5px;
    svg {
      color: white;
      font-size: 2rem;
    }
  }
`;

const Right = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
`;

const CallContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 12px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const LinkContainer = styled.div`
  display: flex;
  align-self: center;
  margin-left: 40px;
  gap: 20px;
`;
const LogoTxt = styled.h2`
  font-size: 16px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Container = styled.div`
  height: 60px;
  background-image: linear-gradient(120deg, #0037ffbd, #29c32ea8);
  background-color: burlywood;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  width: 100%;
  position: fixed;
  top: 0;
`;
