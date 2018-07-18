import React, { Component } from 'react';
import { CSS } from "./app.scss";
import Sidebar from './Sidebar/Sidebar';
import Bottombar from './Bottombar/Bottombar';
import BlogContainer from './BlogContainer/BlogContainer';

class App extends Component {

    render() {
        return (
            <div>
            <Sidebar />
            <BlogContainer/>
            </div>
        );
    }
}

export default App;