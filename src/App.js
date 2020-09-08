import React from 'react';
import "./App.css";
import FoodStoreContainer from "./components/FoodStoreContainer"
import ShoppingList from "./components/ShoppingList/ShoppingList";
import ListItem from "./components/ListItem/ListItem"


class App extends React.Component {
  render(){
      return (
    <div className="App">
          <FoodStoreContainer title="Food store"/>
        <ShoppingList/>
    <ListItem/>
   
  </div>
  );
  }


  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos) {
      console.log('Has todos', todos);
    }else{
      console.log('No todos')
    }
  }
}

export default App;
