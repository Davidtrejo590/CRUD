import { Component } from "react";
import Main from './Layout/Main';
import { Switch, Route } from 'react-router-dom';
import User from './Components/Users/Users';
import Form from './UI/Form';

class App extends Component{

  render(){

    let routes = (
      <Switch>
        <Route path="/" exact component={User}></Route>
        <Route path="/create" component={Form}></Route>
        <Route path="/update/:id" component={Form}></Route>
      </Switch>
    );

    return(
      <Main>
        {routes}
      </Main>
    );
  }

}

export default App;
