import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import './Bottombar.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

export default class Bottombar extends Component {

    render() {
        return (
        <div className="bottombar">
       
        <ul className="social">
                <a href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} />   Facebook</a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} />   Instagram</a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} />   Twitter</a>
        </ul>  
        </div>
        );
    }
}

