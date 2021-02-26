import React from "react";
import { connect, styled, useConnect, keyframes } from 'frontity';
import Link from "@frontity/components/link";

const ProjectPreviewLink = ({ children, ...props }) => {
  const { state, actions } = useConnect();

  return (
    <StyledLink {...props}>
      {children}
    </StyledLink>
  );
};

export default connect(ProjectPreviewLink, { injectProps: false });

const StyledLink = styled(Link)`
    &:hover {
        text-decoration: none; 
    }

` 