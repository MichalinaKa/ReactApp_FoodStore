import React from "react";
import FoodStoreContainer from "../components/FoodStoreContainer";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ListItem from "../components/ListItem/ListItem";
import styled from "styled-components"
import FoodStoreNav from "../components/FoodStoreNav/FoodStoreNav";

const ShoppingListPage = () => {
  return (
    <div className="container">
    <FoodStoreNav/>
      <div>
     <h3>Create new Shopping List</h3>
     <ShoppingList/>
        <small>SHOPPING LIST Page</small>
      </div>
    </div>
  );
};

export default ShoppingListPage;
