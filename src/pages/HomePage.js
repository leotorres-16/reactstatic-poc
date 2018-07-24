import React from 'react';
import { withSiteData } from 'react-static';
//
import logoImg from '../logo.png';

class HomePage extends React.Component {
    render(){
        return(
            <div>
                <h1 style={{ textAlign: 'center' }}>This is react-static POC</h1>
                <img src={logoImg} alt="" />
            </div>
        );
    }
}

export default withSiteData(() => (<HomePage/>))
