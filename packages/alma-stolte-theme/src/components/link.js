import React from "react";
import { connect, styled, useConnect, keyframes } from 'frontity';
import Link from "@frontity/components/link";

const MarsLink = ({ children, ...props }) => {
  const { state, actions } = useConnect();

  /**
   * A handler that closes the mobile menu when a link is clicked.
   */
  

  return (
    <StyledLink {...props}>
      {children}
    </StyledLink>
  );
};

export default connect(MarsLink, { injectProps: false });

const StyledLink = styled(Link)`
  font-size: 16px;
  color: #EDE4E5;
  letter-spacing: 3.56px;
  margin: 0px 6%;

  &:hover {
    text-decoration: none;   
    cursor: pointer; 
    color: #EDE4E5;
  }
`