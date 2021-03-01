import React, { Component } from 'react';
import "../App.css";
export default class Cards extends Component {
  constructor(props){
    super(props);
    this.state={
        prof:props.value
    }
  }
    render() {
        return (
          <div className="card-deck" style={{backgroundColor:" #083863"}}>
            <div className="card  crd ">
              <div className="card-body">
                <img className="img" src={this.state.prof.profile} alt=""/>
              </div>
              <div className="card-footer">
                <button className="btn btn-warning py-0">{this.state.prof.button}</button>
                <p>{this.state.prof.name}</p>
                < a href="#1">{this.state.prof.info} -&gt;</a>
              </div>
              </div>
            </div>
        )
    }
}
