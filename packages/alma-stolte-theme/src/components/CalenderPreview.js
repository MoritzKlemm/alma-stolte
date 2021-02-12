import { React, useState, setState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import Project from './Project';
import Loading from './loading';
import Switch from "@frontity/components/switch";
import List from './list/List';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';


const CalenderPreview = ({ state, actions }) => {

    // const [calenderPreview] = useState(state.source["page"][258].content.rendered);
    // const reponse = fetch('https://public-api.wordpress.com/wp/v2/sites/cmsalmastolte.wordpress.com/pages/258')

    const [calenderData, setCalenderData] = useState('test');
    const [extractedCalendarItems, setExtractedCalendarItems] = useState([]);

    useEffect(() => {
        fetchCalenderData();
    }, []);

    const fetchCalenderData = async () => {
        try {
            const result = await axios.get('https://public-api.wordpress.com/wp/v2/sites/cmsalmastolte.wordpress.com/pages/258')
            extractCalenderItems(result.data.content.rendered)
        } catch (error) {
            console.log("Fetching Calender Data went wrong: " + error)
        }
    }

    const extractCalenderItems = (calData) => {
        const pattern = /(<div>.*?<\/div>)/gm;
        const x = pattern.exec(calData);
        console.log(calData)
        console.log(x)
    }

    return (
        <StyledContainer>
            <StyledRow>
                <StyledCol md={4}>
                    <StyledPreview dangerouslySetInnerHTML={{ __html: calenderData }} />
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

const StyledPreview = styled.div `
    & h2 {
        display: none; 
    }
`

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