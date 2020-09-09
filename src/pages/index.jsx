import React from "react";
import { Link } from "react-router-dom";
import FoodStoreContainer from "../components/FoodStoreContainer";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ListItem from "../components/ListItem/ListItem";
import styled from "styled-components";
import FoodStoreNav from "../components/FoodStoreNav/FoodStoreNav"

const FoodStore = styled.div`
  width: 100%;
  margin: 0 auto;
`;



const MainPage = (props) => {
  const { title } = props;
  return (
    <div className="container">
{/*     
      <ShoppingList />
      <ListItem /> */}

      <FoodStore>
        <h1>Welcome to your Food Store ;)</h1>

        <FoodStoreNav/>
      </FoodStore>
      <small>Main Page</small>
    </div>
  );
};

export default MainPage;
