import React, { Component } from 'react';

export default class BlogItems extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="h-64 w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${this.props.source})` }}></div>
        );
    }
}