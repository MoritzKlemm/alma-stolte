import React from 'react';
import { connect, styled, css } from 'frontity';
import Project from './Project';


const ProjectGrid = () => {
    return(
        <div className="container">
            <div className="row">
                <StyledColDivLeft className="col-md-6">
                    <Project 
                       title="Amusana"
                       description="Das Trio Amusana nimmt den Zuhörer mit in eine Klangwelt, die mal minimalistisch fliessend, dann wieder komplex und modern gebaut ist. Die klassische Besetzung aus Violine, Cello und Klavier überrascht mit ihrer Jahren ins Leben rief."
                    />
                </StyledColDivLeft>
                <StyledColDivRight className="col-md-6">
                    <Project 
                        title="AmusanaRight"
                        description="Das Trio Amusana nimmt den Zuhörer mit in eine Klangwelt, die mal minimalistisch fliessend, dann wieder komplex und modern gebaut ist. Die klassische Besetzung aus Violine, Cello und Klavier überrascht mit ihrer Jahren ins Leben rief."
                    />
                </StyledColDivRight>
            </div>
            <div className="row">
                <StyledColDivLeft className="col-md-6">
                    <Project 
                        title="Amusana"
                        description="Das Trio Amusana nimmt den Zuhörer mit in eine Klangwelt, die mal minimalistisch fliessend, dann wieder komplex und modern gebaut ist. Die klassische Besetzung aus Violine, Cello und Klavier überrascht mit ihrer Jahren ins Leben rief."
                    />
                </StyledColDivLeft>
                <StyledColDivRight className="col-md-6">
                    <Project 
                        title="AmusanaRight"
                        description="Das Trio Amusana nimmt den Zuhörer mit in eine Klangwelt, die mal minimalistisch fliessend, dann wieder komplex und modern gebaut ist. Die klassische Besetzung aus Violine, Cello und Klavier überrascht mit ihrer Jahren ins Leben rief."
                    />
                </StyledColDivRight>
            </div>
            <div className="row">
                <StyledColDivLast className="col-md-12">
                    <Project 
                        title="Amusana"
                        description="Kinder sind die Zukunft! Die altersgerechte Vermittlung von Musik und Spass am Instrument liegt mir sehr am Herzen. Als ausgebildete Instrumentalpädagogin durfte ich schon zahlreiche Erfahrungen sammeln – von Einzel- bis Gruppenunterricht, Kind bis Erwachsener. Ich gebe aktuell nur Privatunterricht, für jegliche Anfragen, Probeunterricht uvm, kontaktieren Sie mich gern per mail.
                        "
                    />
                </StyledColDivLast>
            </div>
        </div>
    )
}

export default connect(ProjectGrid)


const StyledColDivLeft = styled.div`
    margin-top: 30px;
    margin-bottom: 30px; 
    padding: 0px 30px 0px 0px; 
`

const StyledColDivRight = styled.div`
    margin-top: 30px;
    margin-bottom: 30px; 
    padding: 0px 0px 0px 30px; 
`

const StyledColDivLast = styled.div`
    margin-top: 30px;
    padding: 0px; 
`