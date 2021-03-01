import React, { Component } from 'react';
import "../App.css";
export default class Review extends Component {
    constructor(props){
        super(props);
        this.state={
            data:props.data
        }
    }
    render() {
        return (
                <div className="w-30 text-white p-2 dark review">
                    <div className="row m-0">
                        <div className="col-3">
                            <img src={this.state.data.profile} alt="" width="48" height="48"></img>
                        </div>
                        <div className="col-9">
                            <p className="m-0 p-0">{this.state.data.name}</p>
                            <div className="row d-flex align-items-center pl-3">
                                <img src={this.state.data.flag} width="20" height="20" alt=""></img>
                                <span className="pl-1 text-warning">{this.state.data.palo}</span>
                            </div>
                        </div>
                    </div>
                    <div className="pl-3 mt-3">
                        <p>{this.state.data.info}</p>
                    </div>
            </div>
                    )
    }
}
