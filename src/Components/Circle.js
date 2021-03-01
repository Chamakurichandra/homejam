import React, { Component } from 'react';
import "../App.css";

export default class Circle extends Component {
    constructor(props){
        super(props);
        this.state={
            pic: props.data
        }
    }
    render() {
        return (
            <div className={this.state.pic.active?"custom-active circle":"custom-inactive circle"}>
                <div className="circle-1">
                <img className="icon" src={this.state.pic.icon} alt=""/>
                <div>
                <span className="text-white">{this.state.pic.count}</span>
                </div>
                <div>
                <span className="text-white">{this.state.pic.label}</span>
                </div>
                </div>            
            </div>
        )
    }
}
