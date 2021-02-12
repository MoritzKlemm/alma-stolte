import React from "react";
import { connect, styled, useConnect, keyframes } from 'frontity';
import Link from "@frontity/components/link";

const FooterCustomLink = ({ children, ...props }) => {
  const { state, actions } = useConnect();

  return (
    <StyledLink {...props}>
      {children}
    </StyledLink>
  );
};

export default connect(FooterCustomLink, { injectProps: false });

const StyledLink = styled(Link)`
  font-size: 16px;
  color: black;

`

