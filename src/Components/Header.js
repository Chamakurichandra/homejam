import React, { Component } from 'react'
import "../App.css";
import Vector from "../assets/Vector (Stroke).png";
import Logo from "../assets/logo.png";
import BackgroundImage from "../assets/bgImage.png";
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="backGround">
                   <img className="bgImage" src={BackgroundImage} alt=""/ >
                </div> 
<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <a className="navbar-brand" href="#1">

  <img src={Logo} width="150" height="auto" alt=""/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto pr-5 ">
      <li className="nav-item active mx-3">
        <a className="nav-link text-white" href="#1"><i className="fa fa-search"></i>Search <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item mx-3">
        <a className="nav-link text-white" href="#1">Help</a>
      </li>
      <li className="nav-item mx-3">
        <a className="nav-link text-white" href="#1">Account</a>
      </li>
      <li className="nav-item mx-3">
        <a className="nav-link text-white" href="#1"><img className="vctr" src ={Vector} alt=""/></a>
      </li>
      
    </ul>
    
  </div>
</nav>

               {/* <div classNameName="backGround">
                   <img classNameName="bgImage" src={BackgroundImage} alt=""/ >
                </div> 
                <div classNameName="headerContent">
                    <div classNameName="row align-items-center m-0" >  
                        <div classNameName="col">
                        <img classNameName="logo" src ={Logo} alt=""/>
                        </div>
                        <div classNameName="col-6"> &nbsp;</div>
                        <div classNameName="col">Search</div>    
                        <div classNameName="col">Help </div> 
                        <div classNameName="col">Account</div>    
                         <div classNameName="col">Hiii...</div>      
                    </div>
                </div> */}
            </div>
        )
    }
}
