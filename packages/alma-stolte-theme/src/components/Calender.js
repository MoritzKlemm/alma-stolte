import { connect, css, styled } from "frontity";
import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Calender = () => {
    return (
        <Container>
            <StyledCalender src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FBerlin&amp;src=YWxtYS5zdG9sdGUud2Vic2l0ZUBnbWFpbC5jb20&amp;color=%23039BE5&amp;showCalendars=0&amp;showTz=0&amp;showPrint=0&amp;showDate=0&amp;showTabs=0&amp;showNav=0&amp;showTitle=0&amp;mode=AGENDA" scrolling="no"></StyledCalender>
        </Container>
    )
}

export default connect(Calender);


const StyledCalender = styled.iframe`
    width: 100%;
    height: 200px; 
    border: none;  
`