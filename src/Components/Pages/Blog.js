import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '@redux/Store';
import { fetchBlogs, fetchBlog } from '@redux/Actions/BlogActions';
import Template from '@templates/Default';
import ImageSource from '@assets/images/blog-image.jpg';
import BlogImage from '@molecules/Blog/Image';
import BlogContent from '@molecules/Blog/Content';
import BlogFooter from '@molecules/Blog/Footer';
import { LoadingText, LoadingImage } from '@atoms/Loading';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
        blog: {},
        loading: false,
        showMenu: false
    };
    store.subscribe(() => {
      this.setState({
        loading: store.getState().blogs.loading,
        blog: store.getState().blogs.selected,
        showMenu: store.getState().nav.show
      })
    });
  }

  componentWillMount() {
    fetchBlogs();
  }

  componentDidMount() {
    fetchBlog( this.props.match.params.blog_id )
  }

  render() {
    const content = !this.state.loading ? (
      <div>
        <BlogImage source={ImageSource} />
        <div className={ this.state.showMenu ? 'px-4' : 'px-8' }>
          <BlogContent blog={this.state.blog} />
          <BlogFooter showMenu={this.state.showMenu} />
        </div>
      </div>
    ) : (
      <div className="mb-10">
        <LoadingImage />
        <LoadingText />
      </div>
    );

    return (
      <Template>
        { content }
      </Template>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs.items
  }
}

export default connect(mapStateToProps)(Blog)