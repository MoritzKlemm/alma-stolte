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
                    <StyledParagraph>© alma stolte</StyledParagraph>
                    <StyledLink href="mailto:designed.containers@gmail.com">created by ds</StyledLink>
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    )
}

export default connect(Footer);

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
`;

const StyledFrontityLink = styled(LinkFrontity)`
    text-decoration: none; 
    color: rgba(115,115,115) !important;
    font-size: 12px;
    letter-spacing: 1.3px;
    
    &:hover {
        curser: pointer; 
        text-decoration: none; 
        color: rgba(100,100,100);
    }
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
` 

const StyledParagraph = styled.p`
    text-decoration: none; 
    font-family: LibreBaskerville-Regular;
    color: rgba(115,115,115);
    font-size: 12px;
    letter-spacing: 1.3px;
    margin: 0px; 
` 