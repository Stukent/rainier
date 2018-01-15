import React, { Component } from 'react';
import './App.scss';
import Layout from './components/layout';
import Content from './components/main-screen-components/content';
import Typescreen from './components/screens/typefaces';
import Colorspage from './components/screens/colors';
import Alertscreen from './components/screens/alerts';
import NaviScreen from './components/screens/navigation';
import Graphics from './components/screens/graphics';
import Widgets from './components/screens/widgets';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  



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
                    <Route path="/graphics" component={Graphics} />
                    <Route path="/widgets" component={Widgets} />
                </Switch>
            </Layout>
        </Router>
    );
  }
}



export default App;


