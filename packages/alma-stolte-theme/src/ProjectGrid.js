import React from 'react';
import { connect, styled, css } from 'frontity';
import Project from './Project';


const ProjectGrid = () => {
    return(
        <div className="container" css={css`border: 2px solid red;`}>
            <div className="row">
                <div className="col-md-6 justify-content-center" css={css`border: 2px solid green`}>
                    <Project 
                       title="Amusana"
                       description="Das Trio Amusana nimmt den Zuhörer mit in eine Klangwelt, die mal minimalistisch fliessend, dann wieder komplex und modern gebaut ist. Die klassische Besetzung aus Violine, Cello und Klavier überrascht mit ihrer Jahren ins Leben rief."
                    />
                </div>
                <div className="col-md-6" css={css`border: 2px solid green`}>
                  
                </div>
            </div>
            <div className="row">
                <div className="col-md-6" css={css`border: 2px solid green`}>
                   
                </div>
                <div className="col-md-6" css={css`border: 2px solid green`}>
                    
                </div>
            </div>
        </div>
    )
}

export default connect(ProjectGrid)