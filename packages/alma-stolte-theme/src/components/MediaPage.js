import { connect, css, styled } from "frontity";
import { React, useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MediaIframe from './MediaIframe'
import MediaImage from './MediaImage'

const MediaPage = ({ state }) => {

    // saving ID of "media" page to be independent from ID when it should be deleted and recreated
    const [mediaPageID] = useState(state.source.get(state.router.link).id)
    const [mediaContent] = useState(state.source["page"][mediaPageID].content.rendered);
    const [extractedIframes, setExtractedIframes] = useState([]);
    const [extractedImages, setExtractedImages] = useState([]);

    useEffect(() => {
        fetchMediaData();
        console.log("rendered!")
    }, [])

    // fetch calender data from public wp api
    const fetchMediaData = async () => {
        try {
            const response = await axios.get('https://public-api.wordpress.com/wp/v2/sites/cmsalmastolte.wordpress.com/pages/269')
            extractIframes(response.data.content.rendered)
            extractImages(response.data.content.rendered)
        } catch (error) {
            console.log("Fetching Calender Data went wrong: " + error)
        }
    }

    const extractIframes = (medData) => {
        console.log("frames fired!")
        // remove linebreaks and replace'm with ''
        const RegExpFindLineBreaks = RegExp('(?:\r\n|\r|\n)', 'g')
        const lineBreaksRemovedData = medData.replace(RegExpFindLineBreaks, '');

        // extract iframes
        let match;
        let i = 0;
        const RegExpSeperateIframes = RegExp('<\s*iframe[^>]*>(.*?)<\s*/\s*iframe>', 'gm')

        // as long as resultData matches AND it is three or less according to the 3 preview slots on homepage.
        while (((match = RegExpSeperateIframes.exec(lineBreaksRemovedData)) !== null)) {
            setExtractedIframes(prev => [...prev, { key: i, value: match[0] }]);
            i++;
        }
    }
    
    const extractImages = (imData) => {
        console.log("images fired!")
        // remove linebreaks and replace'm with ''
        const RegExpFindLineBreaks = RegExp('(?:\r\n|\r|\n)', 'g')
        const lineBreaksRemovedData = imData.replace(RegExpFindLineBreaks, '');

        // extract iframes
        let match;
        let i = 0;
        const RegExpSeperateIframes = RegExp('<\s*figure[^>]*>(.*?)<\s*/\s*figure>', 'gm')

        while (((match = RegExpSeperateIframes.exec(lineBreaksRemovedData)) !== null)) {
            setExtractedImages(prev => [...prev, { key: i, value: match[0] }]);
            i++;
        }
    }

    return (
        <Container>
            <StyledRow>
                {extractedIframes.map((item) => {
                    return <MediaIframe key={item.id} item={item} />
                })}
            </StyledRow>
            <StyledRow>
                {extractedImages.map((item) => {
                    return <MediaImage key={item.id} item={item} />
                })}
            </StyledRow>
        </Container>
    )
}

export default connect(MediaPage);

const StyledRow = styled(Row)`
`