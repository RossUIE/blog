import React, { Component } from 'react';
import { CSS } from "./app.scss";

class App extends Component {

    render() {
        return (
            <div>
                <hr/>
                    <p className='darken-text'>darken text %</p>
                    <p className='lighten-text'>lighten text %</p>
                    <p className='saturate-text'>saturate text %</p>
                    <p className='desaturate-text'>desaturate text %</p>
                    <p className='fade_in-text'>fade_in</p>
                    <p className='fade_out-text'>fade_out</p>
                    <p className='invert-text'>invert</p>
                    <p className='complement-text'>complement</p>
                    <img className='image'></img>
                <hr/>
                    <a href="#">nested &:hover</a><br/>
                    <button>nested properties</button><br/>
                    <span className='extend-a'>@extend a tag</span>
                <hr/>
                    <div className='mixin-rounded-container'>mixin rounded corners</div>
            </div>
        );
    }
}

export default App;