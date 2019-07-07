import '../../assets/bootstrap/css/bootstrap.min.css';
import React, { Component } from 'react';
import headerBackground from './images/1.jpg'
import '../../assets/bootstrap/css/bootstrap.min.css';
import '../../assets/font-awesome/css/font-awesome.min.css';
import './header.css';
import { Link } from "react-router-dom";

const headerStyle = {
    backgroundImage: `url(${headerBackground})`
}
class Header extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg">
                    <div class="container">
                        <a class="navbar-brand" ></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto navbar-menu-items fadeIn animated">

                                < li class="nav-item">
                                    < Link class="nav-link scroll-link" to="/"> Homepage
                                                    </Link>
                                </li>
                                < li class="nav-item">
                                    < Link class="nav-link scroll-link" to="/fav"> Favourite
                                                                    </Link>

                                </li>
                                <li class="nav-item">
                                    <a class="nav-link scroll-link" >About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link scroll-link" >Contact</a>
                                </li>
                            </ul>
                            <form class="form-inline navbar-search-form disabled ml-auto" action="" method="post">
                                <input type="search" name="search" placeholder="Type and hit enter..." aria-label="Search" class="search form-control">
                                </input>
                            </form>
                            <ul class="navbar-nav navbar-search-button">
                                <li class="nav-item">
                                    <a class="nav-link search-button" href="#"><i class="fa fa-search"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class="top-content" style={headerStyle}>

                    <div class="inner-bg">
                        <div class="container">

                            <div class="row">
                                <div class="col-md-8 offset-md-2 text">
                                    <h1 class="wow fadeInLeftBig">Users Website  </h1>
                                    <div class="description wow fadeInUp">
                                        <p>
                                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            	</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Header;