import { React, useState, setState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CalenderPreviewItem from './CalenderPreviewItem';


const CalenderPreview = ({ state, actions }) => {

    const [rawData, setRawData] = useState('');
    const [extractedItem, setExtractedItem] = useState([]);

    const addItems = () => {
        setExtractedItem(extractedItem => [...extractedItem, {
            id: 32,
            value: "test sssss"
        }]);
    }

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

        // remove linebreaks and replace with ''
        const RegExpFindLineBreaks = RegExp('(?:\r\n|\r|\n)', 'g')
        const lineBreaksRemovedData = calData.replace(RegExpFindLineBreaks, '');
        setRawData(lineBreaksRemovedData);

        // seperate divs
        let match;
        let i = 0;
        const RegExpSeperateDivs = RegExp('(<div>.*?<\/div>)', 'gm')

        // as long as resultData matches AND it is three or less according to the 3 preview slots on homepage.
        while (((match = RegExpSeperateDivs.exec(lineBreaksRemovedData)) !== null) && i <= 2) {
            // adding each div to "variable" / hook extractedItem
            setExtractedItem(prev => [...prev, {
                key: i,
                value: match[0]
            }]);
            i++;
        }
    }


    return (
        <StyledContainer>
            <StyledRow>
                {console.log(extractedItem)}
                {extractedItem.map((item) => {
                    console.log("key: " + item.key, "item" + item)
                    return <CalenderPreviewItem key={item.id} item={item} />
                })}
            </StyledRow>
        </StyledContainer>
    )
}

export default connect(CalenderPreview);

const StyledPreview = styled.div`
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