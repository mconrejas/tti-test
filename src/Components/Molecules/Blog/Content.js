import React, { Component } from 'react';
import { H4, H5 } from '@atoms/Heading';
import Paragraph from '@atoms/Paragraph';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="pt-8 pb-10">
                <H4 text={this.props.blog.title} class="text-gray-700" />
                <H5 text="24 Feb 2021" class="text-gray-700" />
                <Paragraph text={this.props.blog.body} />  
            </div>
        );
    }
}