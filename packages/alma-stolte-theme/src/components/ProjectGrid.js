import {React, useState} from 'react';
import { connect, styled, css } from 'frontity';
import Project from './Project';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import List from './list/List';
import Item from "./list/list-item";
import Switch from "@frontity/components/switch";
import Loading from './Loading';

import postList from './util/PostList';


const ProjectGrid = ({state}) => {
    const data = state.source.get(state.router.link);



    return(
        <StyledContainer id="projekte-smooth-scroll">

            <Row>
                <StyledCol md={6}>
                    <Project 
                        title={{__html: state.source['post'][171].title.rendered}} 
                        content={{__html: state.source['post'][171].content.rendered}}
                    />
                </StyledCol>
                <StyledCol md={6}>
                    <Project 
                        title={{__html: state.source['post'][177].title.rendered}} 
                        content={{__html: state.source['post'][177].content.rendered}}
                    />
                </StyledCol>
            </Row>
        </StyledContainer>
    )
}

export default connect(ProjectGrid)

const StyledContainer = styled(Container)`

`

const StyledCol = styled(Col)`
    margin: 30px 0px; 
    padding: 0px 40px; 
`

const StyledColDivRight = styled(Col)`
    margin-top: 30px;
    margin-bottom: 30px; 
    padding: 0px 0px 0px 30px; 
`

const StyledColDivLast = styled.div`
    margin-top: 30px;
    padding: 0px; 
`