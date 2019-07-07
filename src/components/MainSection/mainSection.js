import React, { Component } from 'react';
import './mainSection.css';
import TopSection from './topSection'
import ListSection from './listSection';
import { fetchUsers } from "../../actions/usersActions.js";
import { connect } from "react-redux";

class MainSection extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUsers();
    }
    render() {
        return (
            <div class="MainSectionDiv">
                <TopSection />
                <ListSection fromFavPage={this.props.fromFavPage} />
            </div>
        );
    }
}



const mapDispatchToProps = {
    fetchUsers
};
export default connect(null, mapDispatchToProps)(MainSection);

