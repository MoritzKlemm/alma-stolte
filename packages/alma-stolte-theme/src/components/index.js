import React from "react";
import { connect, Global, css, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Calender from './Calender'

import LibreBaskervilleRegular from '../assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf'
import LibreBaskervilleBold from '../assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf'
import LinkFrontity from "./LinkFrontity";

import NavbarCustom from './NavbarCustom';
import ProjectGrid from './ProjectGrid';
import Project from './ProjectPreview';
import Vita from './Vita';
import CelloBackground from './CelloBackground';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import FooterImpressum from "./FooterImpressum";
import Nav from './nav'


const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

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
      <Global styles={globalStyles} />

      <NavbarCustom />
      <main>
        <switch>
          <ProjectGrid/>
          <Vita />
        </switch>
        <p>current url: {state.router.link}</p>
        <Footer />
      </main>



    </div>
  );
};

export default connect(Theme);

const globalStyles = css`
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
`

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

