import React from "react";
import { connect, styled, useConnect, keyframes } from 'frontity';
import Link from "@frontity/components/link";

const NavbarCustomLink = ({ children, ...props }) => {
  const { state, actions } = useConnect();

  return (
    <StyledLink {...props}>
      {children}
    </StyledLink>
  );
};

export default connect(NavbarCustomLink, { injectProps: false });

const breakPointXL = 1199;
const breakPointLG = 992;
const breakPointMD = 768;
const breakPointSM = 576; 

const StyledLink = styled(Link)`
  font-size: 16px;
  color: #EDE4E5;
  letter-spacing: 3.56px;
  margin: 0px 6%;

  // styling link text on hover
  &:hover {
    text-decoration: none;   
    cursor: pointer; 
    color: rgb(175,175,175) !important;
  } 

  @media (max-width: ${breakPointXL}px) {
    margin: 6% 0px;  
}
`

