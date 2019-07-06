import React, { Component } from 'react';
import './card.css';
import { addToFavorite, removeFromFavorite } from "./actions.js";
import { connect } from "react-redux";
import Images from './team1.jpg';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favItems: [],
        }
        this.addMore = this.addMore.bind(this);


    }
    addMore() {
        const { item, index } = this.props
        const favItems = null;
        if (this.state.favItems) {
            item.isFav ? this.props.removeFromFavorite(item) : this.addToFav(item);



        }

        else {
            alert("page not found");
        }
        //  const {favItems}= this.state


    }
    addToFav(item) {
        item.isFav=true
        this.props.addToFavorite(item);
    }
    render() {

        const IamgesArray = ["./images/team1.png", "./images/team2.png", "./images/team3.png", "./images/team4.png",
            "./images/team5.png", "./images/team6.png", "./images/team7.png", "./images/team8.png", "./images/team9.png", "./images/team10.png"]
        return (

            <div>
                <div class="container"></div>

                <div class="card user-card">
                    <div class="card-header">
                    </div>
                    <div class="card-block">
                        <div class="user-image">
                            <img src={Images} class="img-radius" alt="User-Profile-Image"></img>
                        </div>
                        <h6 class="f-w-600 m-t-25 m-b-10">{this.props.userName}</h6>
                        <p class="text-muted">Active | Male | Born 23.05.1992</p>
                        <hr></hr>
                        <p class="text-muted m-t-15">{this.props.email}</p>
                        <ul class="list-unstyled activity-leval">
                            <li class="active"></li>
                            <li class="active"></li>
                            <li class="active"></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div class="bg-c-blue counter-block m-t-10 p-20">
                            <div class="row">
                                <div class="col-4">
                                    <i class="fa fa-comment"></i>
                                    <p>1256</p>
                                </div>
                                <div class="col-4">
                                    <i class="fa fa-user"></i>
                                    <p>8562</p>
                                </div>
                                <div class="col-4">
                                    <i class="fa fa-suitcase"></i>
                                    <p>189</p>
                                </div>
                            </div>
                        </div>
                        <p class="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <div class="rating">


                            <div className={"favorite-icon"} onClick={() => this.addMore()}>
                                <span className={this.props.item.isFav ? "favorite-on" : "favorite-off"} > ☆</span>
                            </div>


                        </div></p>
                        <hr></hr>
                        <div class="row justify-content-center user-social-link">
                            <div class="col-auto"><a href="#!"><i class="fa fa-facebook text-facebook"></i></a></div>
                            <div class="col-auto"><a href="#!"><i class="fa fa-twitter text-twitter"></i></a></div>
                            <div class="col-auto"><a href="#!"><i class="fa fa-dribbble text-dribbble"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default connect(null, dispatch => ({
    addToFavorite: (id) => dispatch(addToFavorite(id)),
    removeFromFavorite: (id) => dispatch(removeFromFavorite(id))
}))(Card);

