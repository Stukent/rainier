import React, { Component } from 'react';
import './App.scss';
import Layout from './components/layout';
import Content from './components/content';
import Typescreen from './components/screens/typescreen';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
  



class App extends Component {
  render() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Content} />
                    <Route path="/typefaces" component={Typescreen} />
                </Switch>
            </Layout>
        </Router>
    );
  }
}



export default App;


