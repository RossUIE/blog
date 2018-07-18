import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import './BlogContainer.scss';
import Bottombar from '../Bottombar/Bottombar.js'

export default class BlogContainer extends Component {

    render() {
        return (
        <div className="blogContainer">
        <div className="blogPost">
        <h1>Week 1</h1>
        <h4>Monday:</h4>
        <p>Today is that start of my forth week here at Allstate, it has flown in too quick. Only 11 more months to go. I stayed off the day by starting another code academy course on Git; one of the most widely used modern version control system in the world. As I would be using it throughout my time here I thought it would be best to get a heads start on using it. As this would be all command line, it seemed rather daunting. However, I’ve come to realise its actually a rather easy language to pick up. My afternoon consisted of me diving deeper into react, going over some more advanced tutorials. At 3cklock we had a creative tech meeting which allowed all of the UX teams from around Allstate to come together and talk about their ideas etc. This meeting specifically was on animations and how they can be created which I found helpful as I knew I would start to use animations soon enough.</p>
        <h4>Tuesday:</h4>

<p>Another new technology that I was going to be using was the “Greensock” animation library that allowed you to add animations to your interfaces. Most of Tuesday consisted of me exploring the library and going through some tutorials.</p>
        </div>

        

        <Bottombar/>

        </div>
        );
    }
}

