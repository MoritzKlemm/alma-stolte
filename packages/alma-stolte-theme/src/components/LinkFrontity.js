import React from "react";
import { connect } from "frontity";

const LinkFrontity = ({ state, href, actions, children }) => {

  const onClick = event => {
    event.preventDefault();
    actions.router.set(href);
    window.scrollTo(0, 0);
  };

  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default connect(LinkFrontity);