import React, {Component} from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


//Pages
import MainPage from "./pages";
import MyStorePage from './pages/mystore';
import NotFoundPage from './pages/404';
import ShoppingListPage from './pages/shoppinglist';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem: '',
      list:[]
    }
  }


  render(){
      return (
  <Router>
      <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/mystore" component={MyStorePage}/>
          <Route exact path="/shoppinglist" component={ShoppingListPage}/>
          <Route exact path="/404" component={NotFoundPage}/>

          <Redirect to="/404"/>
      </Switch>
          
   
        
        </Router> 
   

      )
    
  
  }
}

//   componentDidMount = () => {
//     const todos = localStorage.getItem('todos');
//     if(todos) {
//       console.log('Has todos', todos);
//     }else{
//       console.log('No todos')
//     }
//   }
// }

export default App;
