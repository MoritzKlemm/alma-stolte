import React from 'react';
import { connect, styled, css } from 'frontity';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return(
        <StyledContainer>
            <StyledRow>
                <StyledCol md={12}>
                    <StyledLink>impressum</StyledLink>
                    <StyledLink>alma stolte ©</StyledLink>
                    <StyledLink>created by xx</StyledLink>
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
    border-top: 1px solid grey; 
    padding: 30px 0px; 
`;

const StyledCol = styled(Col)`
    display: flex; 
    justify-content: center;
`;

const StyledLink = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: 12px;
    letter-spacing: 1.3px;
    margin: 0px 50px; 

    &:hover {
        curser: pointer; 
    }
` 