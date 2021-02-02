import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Item = ({ state, item }) => {

  return (
    <div>
      <Link link={item.link}>
        <StyledTitle dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      
      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <StyledDescription dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
      )}

    </div>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const StyledTitle = styled.h3` 
    font-family: LibreBaskerville-Regular;
    font-size: 26.6px;
    color: #444C92;
    letter-spacing: 3.99px;
    margin: 20px 0px; 
`;

const StyledImage = styled.img`
    border-radius: 6px;
    object-fit: cover;
    width: 100%;
    height: 240px; 
`;


const StyledDescription = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px; 
    color: #0F0D0E;
    letter-spacing: 1.09px;
    text-align: justify;
    line-height: 33.25px;
`;

const StyledButtonMehr = styled.button`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #3E59E8;
    letter-spacing: 1.09px;
    text-align: justify;
    border: none; 
    background-color: transparent;
`