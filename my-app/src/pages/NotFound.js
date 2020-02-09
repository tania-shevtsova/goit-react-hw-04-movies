import React from 'react';
import {NavLink} from 'react-router-dom';
import { withRouter } from "react-router-dom";

const h2Style={
    textAlign: 'center',
}

const linkStyle={
    display: 'block',
    textAlign: 'center'
}

const NotFound = () => (
    <>
    <h2 style={h2Style}>The page you requsted wasn't found <span role="img" aria-label="emoji">🤷🏾</span></h2>
    <NavLink style={linkStyle} to='/'>Go back to home page</NavLink>
    </>
)

export default withRouter(NotFound);