import React from "react";
import { connect, Global, css, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Container from 'react-bootstrap/Container'
import Loading from './loading'
import PageError from './PageError'

import LibreBaskervilleRegular from '../assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf'
import LibreBaskervilleBold from '../assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf'

import HomeContainer from './HomeContainer';
import NavbarCustom from './NavbarCustom';
import Footer from './Footer';
import VitaPage from "./VitaPage";
import CalenderPage from "./CalenderPage";
import ContactPage from "./ContactPage";
import ProjectGrid from "./ProjectGrid";
import ProjectPage from "./ProjectPage";
import MediaPage from "./MediaPage";
import Project from "./Project";
import ImpressumPage from "./ImpressumPage";


const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <div>
      <Head>
        <title>Alma Stolte</title>
        <meta name="description" content="Historisches und Modernes Violoncello"/>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />                
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        /> 

        {/** default material ui font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        
        {/** default material ui icons */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <script type="text/javascript"></script>
      </Head>
      <Global styles={globalStyles} />

      <main>
        <NavbarCustom />
        <Switch>
          <Loading when={data.isFetching} />
          <HomeContainer when={data.isHome} />
          <Project when={data.isPost}/>
          <CalenderPage when={data.isPage && state.router.link == "/kalender/"} />
          <ProjectPage when={data.isPage && state.router.link == "/projekte/"} />
          <MediaPage when={data.isPage && state.router.link == "/media/"} />
          <VitaPage when={data.isPage && state.router.link == "/vita/"} />
          <ContactPage when={data.isPage && state.router.link == "/kontakt/"} />
          <ImpressumPage when={data.isPage && state.router.link == "/impressum/"} />
          <PageError when={data.isError} /> 
        </Switch>
        <Footer />
      </main>

    </div>
  );
};

export default connect(Theme);


const globalStyles = css`
  body {
    background-color: rgba(235,221,209,100);
    // background: linear-gradient(180deg, #ebddd1, #726E60);
    font-family: "LibreBaskervilleRegular";
    scroll-behavior: smooth; 
    margin: 0px;
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

