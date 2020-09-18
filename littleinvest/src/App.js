import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Cadastro from './pages/cadastro1/cadastro';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cadastro' component={Cadastro} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
