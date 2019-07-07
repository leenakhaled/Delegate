import React, { Component } from 'react';
import './listSection.css';
import Card from './card.js'
import { connect } from "react-redux";

class ListSection extends Component {
    render() {
        let users = this.props.users;
        if (this.props.fromFavPage) {
            users = users.filter(user => user.isFav);
        }

        return (
            <div class="ListSectionDiv">
                <div class="row row-list">
                    {
                        users.map((item, index) => (
                            <div class="col-md-3 col-sm-6 ">
                                <Card  item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    users: store.usersReducers.users,
    loading: store.usersReducers.loading,
});
export default connect(mapStateToProps)(ListSection);


