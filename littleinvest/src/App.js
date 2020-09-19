import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Cadastro from './pages/cadastro1/cadastro';
import Cadastro2 from './pages/cadastro2/cadastro';
import Cadastro3 from './pages/cadastro3/cadastro';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cadastro' component={Cadastro} />
          <Route path='/cadastro2' component={Cadastro2} />
          <Route path='/cadastro3' component={Cadastro3} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
