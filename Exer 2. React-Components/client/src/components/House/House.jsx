import React, { Component } from "react";
import './House.css';

class House extends Component {
    render() {
        return (
            <div className="House" onMouseEnter={() => this.props.houseHoverEvent(this.props.id)}>
                <img alt="house" src={this.props.imageUrl} />
            </div>
        )
    }
}

export default House;
