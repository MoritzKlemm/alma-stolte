import React from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavbarCustom from './NavbarCustom'


const SubPage = () => {
    return(
        <div>
            <NavbarCustom />
            <StyledContainer>
                <Row>
                    <Col md={6} css={css`padding: 0px`}>
                        tetest
                    </Col>
                    <Col md={6} css={css`padding: 0px`}>
                        
                    </Col>
                </Row>
            </StyledContainer>
        </div>
    )
}

export default connect(SubPage);

const StyledContainer = styled(Container)`

`