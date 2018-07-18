import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.scss';
import logo from '../../assets/images/logo.png';



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
                <a href="#">Home</a><i className="fa fa-spinner fa-spin"></i>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                </ul>    
            </nav>
            <span className="designer">Desgined by Ross McMurray</span>        
        </div>
        );
    }
}

