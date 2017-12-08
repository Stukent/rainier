import React, { Component } from 'react';
import './App.scss';
import Layout from './components/layout';
import Content from './components/content';
import Typescreen from './components/screens/typefaces';
import Colorspage from './components/screens/colors';
import Alertscreen from './components/screens/alerts';
import NaviScreen from './components/screens/navigation';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
  



class App extends Component {
  render() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Content} />
                    <Route path="/typefaces" component={Typescreen} />
                    <Route path="/colors" component={Colorspage} />
                    <Route path="/alerts" component={Alertscreen} />
                    <Route path="/navigation" component={NaviScreen} />
                </Switch>
            </Layout>
        </Router>
    );
  }
}



export default App;


