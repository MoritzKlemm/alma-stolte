import { React, useState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Project from './Project';
import Loading from './loading';
import Switch from "@frontity/components/switch";
import List from './list/List';
import PageError from './PageError';

const CalenderPreview = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <StyledContainer>
            <Switch>
                <List when={data.isArchive} />
                <Loading when={data.isPostType} />
                <PageError when={data.isError} />
            </Switch>
        </StyledContainer>
    )
}

export default connect(CalenderPreview);

const StyledContainer = styled(Container)`
    justify-content: center; 
`
 