import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import Ingredients from './Ingredients';
import Recipe from './RecipePage';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';



const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    color: #fff;
  }
  li:hover{
    color:yellowgreen;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
    li a:visited{
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (

   
      <Ul open={open}>
        <Link to="/app"><li>Home</li></Link>
        <Link to="/ingredients"><li>Ingredients</li></Link>
        <Link to="/recipe"><li>Recipe</li></Link>
        <Link to="/contact"><li>Contact</li></Link>        
      </Ul>
   
  )
}

export default RightNav
