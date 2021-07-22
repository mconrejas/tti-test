import React, { Component } from 'react';
import store from 'Redux/Store';
import {toggleMenu} from 'Redux/Actions/NavActions';
import CloseIcon from '@atoms/Nav/CloseIcon';
import ToggleIcon from '@atoms/Nav/ToggleIcon';
import Items from "@molecules/Nav/Items";


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };

        this.handleClickEvent = this.handleClickEvent.bind(this);
        
        store.subscribe(() => {
            this.setState({ active: store.getState().nav.show });
        });
    }

    handleClickEvent() {
        toggleMenu();
    }

    render() {
        return (
            <div className={`relative bg-gray-700 w-44 h-full pt-3 pr-5 pl-10 pb-10 transition-all duration-500 ease-in-out ${!this.state.active ? '-ml-44' : 'ml-0'}`}>
                <CloseIcon clickHandler={this.handleClickEvent} />
                <ToggleIcon clickHandler={this.handleClickEvent} active={this.state.active} />
                <Items />
            </div>
        )
    };
}
  
export default Navigation