import React from "react";
import { connect, Global, css, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Loading from './loading'
import PageError from './PageError'

import LibreBaskervilleRegular from '../assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf'
import LibreBaskervilleBold from '../assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf'

import CalenderPreview from './CalenderPreview';
import HomeContainer from './HomeContainer';

import NavbarCustom from './NavbarCustom';
import ProjectGrid from './ProjectGrid';
import Footer from './Footer';


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

      <main>

        <NavbarCustom />
        <CalenderPreview />
        <ProjectGrid />

        <Switch>
          <Loading when={data.isFetching} />
          <HomeContainer when={data.isHome} />
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

