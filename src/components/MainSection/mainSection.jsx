import React, { Component } from 'react';
import './mainsection.css';
import TopSection from './top-section'
import ListSectin from './list-section';

class MainSection extends Component {
    constructor(props) {
        super(props);

}
    render() {
        return (
            <div class="MainSectionDiv">
                <TopSection />
              
                <ListSectin userItem={this.props.userItem} />
            </div>
        );
    }
}


export default MainSection;

