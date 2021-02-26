import React from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LinkFrontity from './LinkFrontity'
import Switch from "@frontity/components/switch"
import FooterCustomLink from './FooterCustomLink'


const Footer = ({ state }) => {

    const data = state.source.get(state.router.link);

    return (
        <StyledContainer>
            <StyledRow>
                <StyledCol md={12}>
                    <StyledFrontityLink href={"/impressum/"}>impressum</StyledFrontityLink>
                    <StyledLink href="mailto:designed.containers@gmail.com">created by byte affairs</StyledLink>
                    <StyledParagraph>©alma stolte</StyledParagraph>
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    )
}

export default connect(Footer);

const breakPointSM = 576;
const breakPointXS = 425;

const StyledContainer = styled(Container)`
    padding: 125px 15px 0px 15px ; 
`;

const StyledRow = styled(Row)`
`;

const StyledCol = styled(Col)`
    display: flex; 
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid rgba(140,140,140); 
    padding-top: 30px;
    padding-bottom: 30px; 

    @media (max-width: ${breakPointXS}px) {
        justify-content: space-between;
    }
`;

const StyledFrontityLink = styled(LinkFrontity)`
`

const StyledLink = styled.a`
    text-decoration: none; 
    font-family: LibreBaskerville-Regular;
    color: rgba(115,115,115);
    font-size: 12px;
    letter-spacing: 1.3px;
 
    &:hover {
        curser: pointer; 
        text-decoration: none; 
        color: rgba(100,100,100);
    }

    @media (max-width: ${breakPointSM}px) {
        font-size: 11px;
        letter-spacing: 1px; 
    }

    @media (max-width: ${breakPointXS}px) {
        font-size: 10px;
    }
` 

const StyledParagraph = styled.p`
    text-decoration: none; 
    font-family: LibreBaskerville-Regular;
    color: rgba(115,115,115);
    font-size: 12px;
    letter-spacing: 1.3px;
    margin: 0px; 

    @media (max-width: ${breakPointSM}px) {
        font-size: 11px;
        letter-spacing: 1px; 
    }

    @media (max-width: ${breakPointXS}px) {
        font-size: 10px;
    }
` 