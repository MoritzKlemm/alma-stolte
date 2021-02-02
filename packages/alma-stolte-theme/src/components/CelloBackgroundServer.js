import {React, useState} from 'react';
import { connect, styled, css } from 'frontity';

const CelloBackgroundServer = ({state}) => {

    return(
        <div dangerouslySetInnerHTML= {{__html: state.source["post"][214].content.rendered}} />
    )
}

export default connect(CelloBackgroundServer);
