import React from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FooterImpressum from './FooterImpressum'
import LinkFrontity from './LinkFrontity'


const Footer = ({ state }) => {
    return (
        <StyledContainer>
            <StyledRow>
                <StyledCol md={12}>
                    <StyledLink to="/impressum">FooterImpressum</StyledLink>
                    <StyledLink href="">created by xx</StyledLink>
                    <StyledLink href="">alma stolte ©</StyledLink>
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    )
}

export default connect(Footer);

const StyledContainer = styled(Container)`
    padding: 150px 0px 25px 0px; 
`;

const StyledRow = styled(Row)`
    border-top: 1px solid rgba(140,140,140); 
    padding: 30px 0px; 
`;

const StyledCol = styled(Col)`
    display: flex; 
    justify-content: center;
`;

const StyledLink = styled.a`
    text-decoration: none; 
    font-family: LibreBaskerville-Regular;
    color: rgba(115,115,115);
    font-size: 12px;
    letter-spacing: 1.3px;
    margin: 0px 50px; 

    &:hover {
        curser: pointer; 
        text-decoration: none; 
        color: rgba(100,100,100);
    }
` 