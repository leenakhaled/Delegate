import React, { Component } from 'react';
import './list-section.css';
import Card from './card'

class ListSectin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.userItem,

        }
    }
    render() {
        return (
            <div class="ListSectionDiv">
                <div class="row row-list">
                    {this.props.userItem && this.props.userItem.map((item, index) => (<div class="col-md-3 col-sm-6 ">
                        <Card userName={item.name} email={item.email} id={item.id} item={item} index={index} />


                    </div>
                    ))}

                </div>

            </div>
        );
    }
}


export default ListSectin;

