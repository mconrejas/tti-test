import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { H6 } from '@atoms/Heading';

const links = [
    {
        'Our Company': [
            'about TTI',
            'strategic drivers',
            'our board',
            'TTI worldwide',
            'history'
        ],
    },
    {
        'Our Business': [
            'division',
            'brands'
        ]
    },
    {
        'Investor Relations': [
            'confidential financial results',
            'tock quote & share information',
            'announcements',
            'press release',
            'financial reports',
            'presentations',
            'webcasts',
            'circular & proxy',
            'forms',
            'shareholder services',
            'financial calendar',
            'corporate governance',
        ]
    },
    {
        'Corporate Governance': [
            'board of directors',
            'codes & policies',
            'accountability & audit',
        ]
    },
    {
        'Sustainability': [
            'CEO message',
            'ESG Reports',
            'Environment',
            'Social',
            'Governance',
        ]
    },
    {
        'Careers': [
            'working at TTI',
            'leadership',
            'development',
            'global career',
            'opportunities',
        ]
    },
    {
        'Press Room': [
            'press release',
            'media coverage',
            'brand news',
            'brand media',
            'brand social',
            'media enquiry',
        ]
    },
    {
        'Contacts': [
            'TTI offices',
            'media enquiry',
            'general enquiry',
            'IR contact',
            'partner with us',
        ]
    },
];

export default class Nav extends Component {
    render() {
        const linkItems = links.map((item, index) => {
            return (
                <div key={index} className={`mb-4 ${index === 2 || index === 5 ? '' : 'pr-3'}`}>
                    <H6 text={Object.keys(item)} class="text-white font-medium mb-1" />
                    <ul className="text-sm">
                        {
                            Object.values(item)[0].map((link, key) => {
                                return (
                                    <li key={key}>
                                        <Link to="/" className="capitalize text-xs text-white font-extralight">
                                            {link}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            );
        });

        return (
            <div className="grid grid-cols-3 md:grid-cols-4">
                { linkItems }
            </div>
        );
    }
}