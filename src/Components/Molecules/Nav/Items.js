import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store from '@redux/Store';
import {setBlogId} from '@redux/Actions/NavActions';
import ImageSource from '@assets/images/blog-image.jpg';
import Image from '@atoms/Image';
import { H6 } from '@atoms/Heading';
import Span from '@atoms/Span';

export default class BlogItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            blogId: 0
        };

        this.handleClickEvent = this.handleClickEvent.bind(this);

        store.subscribe(() => {
            this.setState({ 
                blogs: store.getState().blogs.items,
                blogId: store.getState().nav.blogId
            })
        });
    }

    handleClickEvent(id) {
        setBlogId( id );
    }

    render() {
        return (
            <div className="flex-column max-h-130 mt-60 overflow-y-scroll">
                {
                    this.state.blogs.map((blog, key) => {
                        return (
                            <div key={key} className="mb-3 pb-2 border-b border-gray-500 cursor-pointer">
                                <div className={ this.state.blogId === blog.id ? "opacity-100" : "transition-opacity duration-500 ease-in-out hover:opacity-100 opacity-50" }>
                                    <div className="mb-2">
                                        <Link to={'/' + blog.id} onClick={() => { this.handleClickEvent(blog.id) }}>
                                            <Image source={ImageSource} />
                                        </Link>
                                    </div>
                                    <Link to={'/' + blog.id} onClick={() => { this.handleClickEvent(blog.id) }}>
                                        <H6 text={blog.title} class="text-white font-bold" />
                                    </Link>
                                    <Span text="09 oct 2020" class="text-white" />
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}