import {React, useState, useEffect} from 'react';
import { connect, styled, css } from 'frontity';
import Project from './ProjectPreview';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import List from './list/List';
import Item from "./list/list-item";
import Switch from "@frontity/components/switch";
import Loading from './Loading';
import postList from './util/PostList';
import PageError from './PageError';


const ProjectGrid = ({state}) => {
    const data = state.source.get(state.router.link);

    return(
        <Container id="projekte-smooth-scroll">
        <Switch>
            <List when={data.isArchive} />
            <PageError when={data.isError} />
        </Switch>
        </Container>
    )
}

export default connect(ProjectGrid)
