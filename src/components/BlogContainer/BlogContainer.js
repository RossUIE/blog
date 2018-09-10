import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './BlogContainer.scss';
import Bottombar from '../Bottombar/Bottombar.js';
import { blogPosts } from '../../Data/BlogPosts.js'

export default class BlogContainer extends Component {

    constructor(props) {

        super(props);

        this.state = {
            BlogPosts: blogPosts

        }

        this.printCard = this.printCard.bind(this)


    }

    printCard() {
        return (
            this.state.BlogPosts.map((week, index) =>

                <div className="blogPost" key={index}>
                    <h1>{week.title}</h1>
                    <h6>{week.timestamp}</h6>
                    <hr/>
                    {
                        week.post.map((day, i) =>
                            <React.Fragment key={`blog-post-${index}-${i}`}>
                                <h4>{day.title}</h4>
                                <div>{day.content === '' ? <p><i>I didnt seem to write anything for this day</i></p> : <p>{day.content}</p>}</div>
                                <div className= "images">{day.images}</div>
                            </React.Fragment>
                        )
                    }
                    
                </div>
            )
        )
    }

    render() {
        return (
            <div className="blogContainer">

                {this.printCard()}

                <Bottombar />
            </div>
        );
    }
}


