import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import './Sidebar.scss';

export default class Sidebar extends Component {

    render() {
        return (
        <div className="sidebar">
        <div id="logo"></div>

            <nav>
                <ul>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                </ul>    
            </nav>
            <div className="designer">Desgined by<br/> Ross McMurray</div>        
        </div>
        );
    }
}

