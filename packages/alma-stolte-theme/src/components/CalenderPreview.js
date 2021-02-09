import { React, useState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Project from './Project';
import Loading from './loading';
import Switch from "@frontity/components/switch";
import List from './list/List';
import PageError from './PageError';

const CalenderPreview = ({ state }) => {
    const [calenderContent] = useState(state.source["page"][258].content.rendered);

    return (
        <StyledContainer  dangerouslySetInnerHTML={{ __html: calenderContent}} />
    )
}

export default connect(CalenderPreview);

const StyledContainer = styled(Container)`
    justify-content: center; 
`
 