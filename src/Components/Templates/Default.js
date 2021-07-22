import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navigation from "@organisims/Navigation";
import Footer from "@organisims/Footer";

class Default extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="flex">
                    <header>
                        <Navigation />
                    </header>
                    
                    <section className="content w-vw flex-1">
                        { this.props.children }
                    </section>
                </div>
                <footer>
                    <div className="p-8 w-full bg-gray-700">
                        <Footer />
                    </div>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      blogs: state.blogs
    }
  }
  
export default connect(mapStateToProps)(Default)