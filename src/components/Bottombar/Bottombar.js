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
                <a href="#"><span className="socialIcons"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></span>   Facebook</a>
                <a href="#"><span className="socialIcons"><FontAwesomeIcon icon={['fab', 'instagram']} /></span>   Instagram</a>
                <a href="#"><span className="socialIcons"><FontAwesomeIcon icon={['fab', 'twitter']} /> </span>  Twitter</a>
        </ul>  
        </div>
        );
    }
}

