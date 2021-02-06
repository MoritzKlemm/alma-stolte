import React from "react";
import { connect, useConnect } from "frontity";
import Link from "@frontity/components/link";

const MarsLink = ({ children, ...props }) => {
  const { state, actions } = useConnect();

  /**
   * A handler that closes the mobile menu when a link is clicked.
   */
  

  return (
    <Link {...props}>
      {children}
    </Link>
  );
};

export default connect(MarsLink, { injectProps: false });
