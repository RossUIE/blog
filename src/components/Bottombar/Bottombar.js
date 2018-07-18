import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import './Bottombar.scss';

export default class Bottombar extends Component {

    render() {
        return (
        <div className="bottombar">
       
        <ul className="social">
                <a href="#">Facebook</a><i className="fa fa-spinner fa-spin"></i>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
        </ul>  
        </div>
        );
    }
}

