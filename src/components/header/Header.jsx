import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import styled from "styled-components";
import { Link, Route } from "react-router-dom"; 

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    margin-left: 20px;
    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
`;

class Header extends Component {
  
  render() {
      return (
     
            <div class="header-nightsky">
              <nav class="navbar navbar-default">
                <div class="container">
                  <a class="navbar-brand" href="#">LOGO</a>
                  <div class="navbar-header">
             
                  
                  <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                    <Wrapper>

                      <div class="topnav">
                        <a class="active" href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                      </div>
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/fav">Favourite</Link></li>
                      </ul>
                    </Wrapper>
                    </ul>
                </div>
                </div>
                </div>
              </nav>
              <div class="hero">
                <div class="btn btn-primary">Learn more about us</div>
                <div class="btn btn-primary">Contact us</div>
              </div>
            </div>
    
      );
    
  
  }
}


export default Header;
