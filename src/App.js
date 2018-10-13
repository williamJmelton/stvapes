import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Utility/Theme';

import Home from './pages/Home';
import Flavors from './pages/Flavors';
import Contact from './pages/Contact';



import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/flavors' component={Flavors}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
