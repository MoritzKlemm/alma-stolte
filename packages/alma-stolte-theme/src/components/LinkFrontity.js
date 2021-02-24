import React from "react";
import { connect, styled, css } from "frontity";

const LinkFrontity = ({ state, href, actions, children }) => {

  const onClick = event => {
    event.preventDefault();
    actions.router.set(href);
    // window.scrollTo(0, 0);
  };

  const breakPointSM = 576;
  const breakPointXS = 425;

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
        }
        
        @media (max-width: ${breakPointSM}px) {
          font-size: 11px;
          letter-spacing: 1px; 
        }
      
        @media (max-width: ${breakPointXS}px) {
          font-size: 10px;
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