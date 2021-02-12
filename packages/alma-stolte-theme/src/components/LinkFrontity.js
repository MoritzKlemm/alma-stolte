import React from "react";
import { connect, styled, css } from "frontity";

const LinkFrontity = ({ state, href, actions, children }) => {

  const onClick = event => {
    event.preventDefault();
    actions.router.set(href);
    window.scrollTo(0, 0);
  };

  return (
    // here only inline styling overwrites default <a> behavior
    <a href={href} onClick={onClick} css={css`
        text-decoration: none; 
        font-family: LibreBaskerville-Regular;
        color: rgba(115,115,115);
        font-size: 12px;
        letter-spacing: 1.3px;
    
        &:hover {
            curser: pointer; 
            text-decoration: none; 
            color: rgba(100,100,100);
        }`}
    >
      {children}
    </a>
  );
};

export default connect(LinkFrontity);

const StyledLink = styled.a`
  text-decroation: none;
`