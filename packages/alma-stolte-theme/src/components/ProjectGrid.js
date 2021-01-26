import React from 'react';
import { connect, styled, css } from 'frontity';
import Project from './Project';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ProjectGrid = () => {
    return(
        <StyledContainer id="projekte-smooth-scroll">
            <Row>
                <StyledColDivLeft md={6}>
                    <Project 
                       title="Amusana"
                       description="Das Trio Amusana nimmt den Zuhörer mit in eine Klangwelt, die mal minimalistisch fliessend, dann wieder komplex und modern gebaut ist. Die klassische Besetzung aus Violine, Cello und Klavier überrascht mit ihrer Jahren ins Leben rief."
                    />
                </StyledColDivLeft>
                <StyledColDivRight md={6}>
                    <Project 
                        title="AmusanaRight"
                        description="Das Trio Amusana nimmt den Zuhörer mit in eine Klangwelt, die mal minimalistisch fliessend, dann wieder komplex und modern gebaut ist. Die klassische Besetzung aus Violine, Cello und Klavier überrascht mit ihrer Jahren ins Leben rief."
                    />
                </StyledColDivRight>
            </Row>
            <Row>
                <StyledColDivLeft md={6}>
                    <Project 
                        title="Amusana"
                        description="Das Trio Amusana nimmt den Zuhörer mit in eine Klangwelt, die mal minimalistisch fliessend, dann wieder komplex und modern gebaut ist. Die klassische Besetzung aus Violine, Cello und Klavier überrascht mit ihrer Jahren ins Leben rief."
                    />
                </StyledColDivLeft>
                <StyledColDivRight md={6}>
                    <Project 
                        title="AmusanaRight"
                        description="Das Trio Amusana nimmt den Zuhörer mit in eine Klangwelt, die mal minimalistisch fliessend, dann wieder komplex und modern gebaut ist. Die klassische Besetzung aus Violine, Cello und Klavier überrascht mit ihrer Jahren ins Leben rief."
                    />
                </StyledColDivRight>
            </Row>
            <Row>
                <StyledColDivLast md={6}>
                    <Project 
                        title="Amusana"
                        description="Kinder sind die Zukunft! Die altersgerechte Vermittlung von Musik und Spass am Instrument liegt mir sehr am Herzen. Als ausgebildete Instrumentalpädagogin durfte ich schon zahlreiche Erfahrungen sammeln – von Einzel- bis Gruppenunterricht, Kind bis Erwachsener. Ich gebe aktuell nur Privatunterricht, für jegliche Anfragen, Probeunterricht uvm, kontaktieren Sie mich gern per mail.
                        "
                    />
                </StyledColDivLast>
            </Row>
        </StyledContainer>
    )
}

export default connect(ProjectGrid)

const StyledContainer = styled(Container)`

`

const StyledColDivLeft = styled(Col)`
    margin-top: 30px;
    margin-bottom: 30px; 
    padding: 0px 30px 0px 0px; 
`

const StyledColDivRight = styled(Col)`
    margin-top: 30px;
    margin-bottom: 30px; 
    padding: 0px 0px 0px 30px; 
`

const StyledColDivLast = styled.div`
    margin-top: 30px;
    padding: 0px; 
`