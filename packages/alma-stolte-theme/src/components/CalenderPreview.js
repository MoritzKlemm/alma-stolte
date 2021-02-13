import { React, useState, setState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CalenderPreviewItem from './CalenderPreviewItem';


const CalenderPreview = ({ state, actions }) => {

    // list of extracted <div>'s to map to <CalenderPreviewItem />
    const [extractedItem, setExtractedItem] = useState([]);

    // starting chain: finished rendering when: data fetched --> calender item <div>'s extracted
    useEffect(() => {
        fetchCalenderData();
    }, []);

    // fetch calender data from public wp api
    const fetchCalenderData = async () => {
        try {
            const response = await axios.get('https://public-api.wordpress.com/wp/v2/sites/cmsalmastolte.wordpress.com/pages/258')
            extractCalenderItems(response.data.content.rendered)
        } catch (error) {
            console.log("Fetching Calender Data went wrong: " + error)
        }
    }

    // get seperate <div>..</div> calender items from api response
    const extractCalenderItems = (calData) => {

        // remove linebreaks and replace'm with ''
        const RegExpFindLineBreaks = RegExp('(?:\r\n|\r|\n)', 'g')
        const lineBreaksRemovedData = calData.replace(RegExpFindLineBreaks, '');

        // seperate divs
        let match;
        let i = 0;
        // making regex search globally (g) and mulitline (m)
        const RegExpSeperateDivs = RegExp('(<div>.*?<\/div>)', 'gm')

        // as long as resultData matches AND it is three or less according to the 3 preview slots on homepage.
        while (((match = RegExpSeperateDivs.exec(lineBreaksRemovedData)) !== null) && i <= 2) {
            // adding each div to "variable" / hook "extractedItem"
            setExtractedItem(prev => [...prev, {key: i, value: match[0]}]);
            i++;
        }
    }

    return (
        <StyledContainer>
            <StyledRow>
                {extractedItem.map((item) => {
                    return <CalenderPreviewItem key={item.id} item={item} />
                })}
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