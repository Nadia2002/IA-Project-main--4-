import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <h1>
          <NavLink className="main-link" to="/">Library Services Platform</NavLink></h1>
          
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/admindashboard">
              admindashboard
            </NavLink>
            
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/bookdetails">
              bookdetails
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </li>
          
          <li className="main-list">
            <NavLink className="main-link" to="/editbook">
              editbook
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li className="mini-projects">
                <a href=""> </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/portfolio">
              Portfolio
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href=""></a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/contact">
              Contact
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header style={{ backgroundColor: "red" }} className="show-when-mobile">
        <h1>libarary system</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
          
          <div className="main-div">
            <label htmlFor="css">
               <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
