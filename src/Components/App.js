import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Blog from '@pages/Blog'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
              <Route path='/:blog_id?' component={Blog} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}