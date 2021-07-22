import React, { Component } from 'react';
import Links from '@molecules/Footer/Links'
import { H2 } from '@atoms/Heading';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <H2 text="Explore TTI" class="text-white pb-3 border-b mb-5" />
                <Links />
            </div>
        );
    }
}