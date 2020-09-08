import React, { Component } from "react";
import styled from "styled-components"

const FoodStore = styled.div`
width:  100%
`
const FoodStoreNav = styled.div`
border-bottom: 1px solid black;
border-top: 1px solid black;
height: 10vh;
display: flex;
flex-wrap: wrap;
margin: 0 auto;
nav{
  ul{
    list-style-type: none;
    text-align: end;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    li{

padding-left: 20px;
    }
  }
}

`

class FoodStoreContainer extends Component {

    render() {
      return (
        <FoodStore>
          <h1>{this.props.title}</h1>
  
          <FoodStoreNav>
          <nav>
            <ul>
              <li>my store</li>
              <li>all categories</li>
              <li>add new</li>
              <li>shopping list</li>
              <li>settings</li>
            </ul>
          </nav>
        
          </FoodStoreNav>
         
        </FoodStore>
      );
    }
  }
  

  export default FoodStoreContainer