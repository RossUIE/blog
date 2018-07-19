import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.scss';
import logo from '../../assets/images/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHome, faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faHome, faUser,faPencilAlt);


export default class Sidebar extends Component {

    constructor() {
        super()

        this.state= {
          logo: '../../assets/images/logo.png'
        }
        
    }

    

    render() {
        return (
        <div className="sidebar">
        <div id="logo"></div>

            <nav>
                <ul>
                <a href="#">Home</a><span><FontAwesomeIcon icon="home" className="icons" /></span>
                <a href="#">About</a><span><FontAwesomeIcon icon="user" className="icons" /></span>
                <a href="#">Blog</a><span><FontAwesomeIcon icon="pencil-alt" className="icons"/></span>
                <a href="#">Contact</a><span><FontAwesomeIcon icon="envelope" className="icons" /></span>
                
                </ul>    
            </nav>
            <span className="designer">Desgined by Ross McMurray</span>        
        </div>
        );
    }
}

