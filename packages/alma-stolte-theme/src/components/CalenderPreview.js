import { React, useState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Project from './Project';
import Loading from './loading';
import Switch from "@frontity/components/switch";
import List from './list/List';
import PageError from './PageError';

const CalenderPreview = ({ state }) => {
    
    const [calenderContent] = useState(state.source.data["/kalender"]);
    // console.log(calenderContent)
    
    const mapItems = () => {
        
    }

    return (
        <StyledContainer>
            <StyledRow>
                <StyledCol md={4}>
                    <StyledDate>12. März 2020</StyledDate> 
                    <StyledPlace>Berlin, Werner-Otto-Saal</StyledPlace>
                    <StyledTitle>Open your Eyes</StyledTitle>
                    <StyledDescription>Die Freiheit fühlen - ein klingendes Proträt der Komponisten Sofia Guibadiulina</StyledDescription>
                </StyledCol>
                <StyledCol md={4}>
                    2. 
                </StyledCol>
                <StyledCol md={4}>
                    3. 
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    )
}

export default connect(CalenderPreview);

const StyledContainer = styled(Container)`
    margin: 40px 0px; 
    justify-content: center; 
    border-top: 1px solid #9B9DA5; 
    border-bottom: 1px solid #9B9DA5; 
`

const StyledRow = styled(Row)`
    padding: 0px 15px; 
    width: 100%; 
`

const StyledCol = styled(Col)`
    width: 100%; 
    margin: 10px 0px; 
    padding: 0px; 
`

const StyledDate = styled.h4`
    font-family: LibreBaskerville-Regular;
    font-size: 22.8px;
    color: #3B487D;
    letter-spacing: 1.63px;

    @media (max-width: 1000px) {
        font-size: 20px; 
    }
`

const StyledPlace = styled.p`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #3B487D;
    letter-spacing: 1.00px;

    @media (max-width: 1000px) {
        font-size: 14px; 
    }
`

const StyledTitle = styled.b`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #333232;
    letter-spacing: 1.00px;

    @media (max-width: 1000px) {
        font-size: 14px; 
    }
` 

const StyledDescription = styled.p`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #333232;
    letter-spacing: 1.00px;
    margin: 0px; 

    @media (max-width: 1000px) {
        font-size: 14px; 
    }
`