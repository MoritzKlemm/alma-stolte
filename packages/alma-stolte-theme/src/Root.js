import React from "react";
import { connect, Global, css, Head } from "frontity";
import Link from './Link'
import List from './List';
import NavbarCustom from './NavbarCustom';
import ProjectGrid from './ProjectGrid';
import LibreBaskervilleRegular from './assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf'
import LibreBaskervilleBold from './assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf'

const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    console.log("SOURCE BELOW")
    console.log(state.source)

    
    return (
        <div>
            <Head>
                <title>Alma Stolte</title>
                <meta name="description" content="This blog is just for being awesome" />
                <html lang="en" />
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
                />
            </Head>
                     
            <main >
                <NavbarCustom />
                <ProjectGrid />
                
                {<List />}
            </main>

            <Global
                styles={css`
                  body {
                    background-color: rgba(235,221,209,100);
                    font-family: "LibreBaskervilleRegular";
                    margin: 0px;
                    padding: 0px; 
                  }

                  .row, col-md-6 {
                      margin: 0px;
                      padding: 0px; 
                  }

                  .container {
                      padding: 0px; 
                  }
                `}
            />
        </div>
    );
};

export default connect(Root);



const LBVRegular = css`
  @font-face {
    font-family: "LibreBaskervilleRegular";
    font-style: normal;
    font-weight: 400;

    /* Use it inside the CSS */
    src: url(${LibreBaskervilleRegular});
  }
`;

const LBVBold = css`
  @font-face {
    font-family: "LibreBaskervilleRegular";
    font-style: normal;
    font-weight: 400;

    /* Use it inside the CSS */
    src: url(${LibreBaskervilleBold});
  }
`;

