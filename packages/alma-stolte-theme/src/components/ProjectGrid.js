import { React, useState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'

import List from './list';

import Switch from "@frontity/components/switch";
import PageError from './PageError';
import Project from './Project';

const ProjectGrid = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <Container id="projekte-smooth-scroll">
            <Switch>
                <List when={data.isArchive} />
                <Project when={data.isPostType} />
                <PageError when={data.isError} />
            </Switch>
        </Container>
    )
}

export default connect(ProjectGrid);
