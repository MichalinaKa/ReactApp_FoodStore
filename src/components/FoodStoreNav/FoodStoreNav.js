import React, { Component } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";


const FoodStore = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const FoodStoreNavBox = styled.div`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  height: 10vh;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  nav {
    ul {
      list-style-type: none;
      text-align: end;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
const LinkItem = styled(Link)`
  color: coral;
  text-decoration: none;
  font-weight: 600;
  padding-left: 20px;
`;

class FoodStoreNav extends Component {

    render() {
      return (

       <FoodStoreNavBox>
          <nav>
            <ul>
            <LinkItem to="/">home </LinkItem>
              <LinkItem to="/mystore">my store</LinkItem>
              {/* <LinkItem>all categories</LinkItem>
              <LinkItem>add new</LinkItem> */}
              <LinkItem to="/shoppinglist">shopping list</LinkItem>
              <LinkItem>settings</LinkItem>
            </ul>
          </nav>
        </FoodStoreNavBox>
      );
    }
  }

  export default FoodStoreNav