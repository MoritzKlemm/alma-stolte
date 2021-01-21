import React from "react";
import { connect, Global, css, Head } from "frontity";
import Link from './Link'
import List from './List';
import Post from './Post';
import NavbarCustom from './NavbarCustom';


// import LibreBaskervilleRegular from './fonts/LibreBaskerville/LibreBaskervilleRegular'


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

            <Global
                styles={css`
                  body {
                    background-color: rgba(235,221,209,100);
                    margin: 0px;
                    padding: 0px; 
                  }
                `}
            />

            
            <main>
                <NavbarCustom />
                
                <p>test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set 
                test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set 
                test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set 
                test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set 
                test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set </p>
                test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set 
                test setset set set est set set set set test setset set set est set set set set test setset set set est set set set set 
                {<List />}
            </main>

            
        </div>
    );
};

export default connect(Root);
