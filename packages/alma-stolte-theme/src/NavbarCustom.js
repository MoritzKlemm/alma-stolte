import React from 'react';
import { connect, styled, css } from 'frontity';
import Link from './Link';
//             <p>this is an {state.router.link}</p>

const NavbarCustom = ({ state }) => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-light">
                <Link href="/" className="navbar-brand">ALMA STOLTE</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav"> 
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link href="/kalender" className="nav-link">KALENDER</Link></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#"><Link href="/projekte" className="nav-link">PROJEKTE</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link href="/vita" className="nav-link">VITA</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link href="/media" className="nav-link">MEDIA</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link href="/kontakt" className="nav-link">KONTAKT</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default connect(NavbarCustom)


// new component that is a nav with following styles
const NavWrapper = styled.nav`
    margin-bottom: 50px;  
`;