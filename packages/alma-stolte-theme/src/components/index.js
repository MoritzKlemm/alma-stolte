import React from "react";
import { connect, Global, css, Head } from "frontity";

import List from './List';
import Post from './Post';
import NavbarCustom from './NavbarCustom';
import NavbarCustomDynamic from './NavbarCustomDynamic';
import ProjectGrid from './ProjectGrid';
import Vita from './Vita';
import CelloBackground from './CelloBackground';
import Contact from './Contact';
import SubPage from './SubPage';
import Footer from './Footer';
import LibreBaskervilleRegular from '../assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf'
import LibreBaskervilleBold from '../assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf'

const Theme = ({ state }) => {
    // const data = state.source.get(state.router.link);
    
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
            {console.log("heet")}
            <main>
                <NavbarCustom/>
                <ProjectGrid />
                <CelloBackground />
                <Vita />
                <Gallery />
                <Contact />


                {<List />}
            </main>

            <Global
                styles={css`
                  body {
                    background-color: rgba(235,221,209,100);
                    font-family: "LibreBaskervilleRegular";
                    scroll-behavior: smooth; 
                    margin: 0px;
                    padding: 0px; 
                  }

                  .row, col-md-6, .col-md-12 {
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

export default connect(Theme);



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

