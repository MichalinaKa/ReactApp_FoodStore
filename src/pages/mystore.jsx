import React from "react";
import FoodStoreContainer from "../components/FoodStoreContainer";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ListItem from "../components/ListItem/ListItem";
import styled from "styled-components"
import FoodStoreNav from "../components/FoodStoreNav/FoodStoreNav"


const MyStorePage = () => {
  return (

    <div className="container">
    <FoodStoreNav/>
      <div>
        <h1>My store</h1>

        <div>your store is empty ;(</div>
        <h3>You have to buy...</h3>
        <ul>
          {["milk", "carrots", "water", "apples"].map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
        <small>STORE Page</small>
      </div>
    </div>
  );
};

export default MyStorePage
