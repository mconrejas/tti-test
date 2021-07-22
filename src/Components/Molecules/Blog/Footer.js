import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { H4 } from '@atoms/Heading';
import Paragraph from '@atoms/Paragraph';
import Icon from '@atoms/Icons';
import Span from '@atoms/Span';

const items = [
    {
        'Hoover': [
            'Acquired: 2007',
            'Based: U.S.',
            'Products: The iconic American vacuum cleaner brand, founded in 1908',
        ]
    },
    {
        'Milwaukee': [
            'Acquired: 2005',
            'Based: U.S.',
            'Products: Professional construction tools, founded in 1924',
        ]
    },
    {
        'AEG': [
            'Acquired: 2005',
            'Based: U.S.',
            'Products: Professional construction tools; it\'s roots go back to 1883',
        ]
    },
    {
        'Dirt Devil': [
            'Acquired: 2003',
            'Based: U.S.',
            'Products: Famous for it\'s lightweight and handled vacuum cleaner',
        ]
    },
    {
        'Ryobi': [
            'Acquired: 2000 to 2007',
            'Based: Japan',
            'Products: Makes and distributes the Japanese consumer brand in Australia, Europe, New Zealand and North America',
        ]
    },
    {
        'Vax': [
            'Acquired: 1999',
            'Based: U.K.',
            'Products: The U.K.\'s best selling brand of floor care products and sold in 50 markets worldwide',
        ]
    },
];

const socialMediaItems = [
    'facebook',
    'linkedin',
    'twitter',
    'email',
]

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const footerItems = items.map((item, index) => {
            return (
                <div key={index} className={`mb-3 ${index === 1 || index === 3 || index === 5 ? '' : 'pr-3'}`}>
                    <H4 text={Object.keys(item)} class="text-gray-700" />
                    <ul>
                        {
                            Object.values(item)[0].map((text, key) => {
                                return (
                                    <Paragraph key={key} text={text}/>
                                )
                            })
                        }
                    </ul>
                </div>
            );
        });

        const socialMediaLinks = socialMediaItems.map((type, key) => {
            return (
                <Link key={key} to="/">
                    <Icon key={key} type={type} class="ml-4" />
                </Link>
            );
        });

        return (
            <div className="mb-16">
                <div className={`transition-all duration-500 ease-in-out grid ${this.props.showMenu ? 'grid-cols-1' : 'grid-cols-2'} md:grid-cols-3`}>
                    {footerItems}
                </div>

                <div className="flex py-10">
                    <Span text="Share" class="text-lg font-bold capitalize text-gray-800" />
                    {socialMediaLinks}
                </div>
            </div>
        );
    }
}
  
export default Footer