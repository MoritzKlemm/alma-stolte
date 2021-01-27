import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { connect, styled, css } from 'frontity';

const Vita = () => {
    return(
        <Container id="vita-smooth-scroll">
            <Row>
                <StyledParagraph>
                    Alma Stolte, 1993 in Dresden geboren, begann im Alter von 7 Jahren mit dem Cellounterricht. Sie besuchte bis 2013 das Sächsische Landesgymnasium für Musik 'C.M.v. Weber', wo sie von Juliane Gilbert unterrichtet wurde. Inspirierende Kooperationen mit Sir Colin Davis, Jan Vogler und dem Dresdner Kreuzchor festigten den Berufswunsch. Während der Schulzeit erspielte sie Preise im Bundeswettbewerb von „Jugend Musiziert“ und beim Performancewettbewerb „Unart“. Anschliessend studierte sie in Dresden bei Prof. KV Matthias Bräutigam und war Trägerin des Deutschlandstipendiums. Den ersten Barockcello- und Continuo-Unterricht bekam sie von Ludger Rémy. Diesen Schwerpunkt konnte sie 2017-18 in Amsterdam bei Viola de Hoog vertiefen. Weitere wichtige Impulse erhielt sie von Hans-Christoph Rademann, Kristin von der Goltz und Bernhard Hentrich. Seit Oktober 2019 setzt sie ihr Studium im Fach Barockcello und Viola da Gamba bei Lea Rahel Bader an der Universität der Künste Berlin fort. Alma Stolte ist als Solistin und Continuocellistin im In- und Ausland gefragt und konzertierte u.a. mit dem Jungen Musikpodium Dresden-Venedig, den Dresdner Kapellsolisten und dem Dresdner Barockorchester. Mit ihren Ensembles NOUK und Amusana entdeckt sie zudem in der Symbiose aus Jazzimprovisation und Kammermusik neue musikalische Möglichkeiten für das Cello.
                </StyledParagraph>
            </Row>
        </Container>
    )
}

export default connect(Vita);

const StyledParagraph = styled.p`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #0F0D0E;
    letter-spacing: 1.09px;
    text-align: justify;
    line-height: 33.25px;
    margin-bottom: 60px; 

    &::first-letter {
        font-size: 200%;
      }
`