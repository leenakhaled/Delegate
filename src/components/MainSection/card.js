import React, { Component } from 'react';
import './card.css';
import { addToFavorite, removeFromFavorite } from "../../actions/usersActions.js";
import { connect } from "react-redux";
import Images from './images/team.jpg';

class Card extends Component {
    constructor(props) {
        super(props);
        this.toggleFav = this.toggleFav.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.item, "new Users")
    }
    toggleFav() {
        const { item } = this.props;
        console.log("item", item)

        if (item.isFav) {
            this.props.removeFromFavorite(item.user.id);
        }
        else {
            this.props.addToFavorite(item.user.id);
        }

        this.forceUpdate();

    }

    render() {
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
                        <h4 class="f-w-600 m-t-25 m-b-10">{this.props.item.user.name}</h4>
                        <p class="text-muted">Active | Male | Born 23.05.1992</p>
                        <hr></hr>
                        <p class="text-muted m-t-15">{this.props.item.user.email}</p>
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
                        <p class="m-t-15 text-muted">{this.props.item.user.company.catchPhrase} <div class="rating">

                        </div></p>
                        <hr></hr>
                        <div class="row justify-content-center user-social-link">
                            <div class="col-auto"><a href="#!"><i class="fa fa-facebook text-facebook"></i></a></div>
                            <div class="col-auto"><a href="#!"><i class="fa fa-twitter text-twitter"></i></a></div>
                            <div class="col-auto"><a href="#!"><i class="fa fa-dribbble text-dribbble"></i></a></div>

                            <div class="col-auto" onClick={this.toggleFav}>
                                <a href="#!"><i class={this.props.item.isFav ? "fa fa-star fill " : "fa fa-star-o"} ></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default connect(null, { addToFavorite, removeFromFavorite })(Card);

