import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Navbar() {

   const [active,setActeive]= useState('navBar')

  //  toggle function

  const toogleShow = ()=>{
    setActeive('navBar activeNavbar')
  }
// remove  function 
  const toggleRemove = ()=>{
    setActeive('navBar ')
  }

  return (
    <>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1>
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </h1>
            </a>
          </div>
          
          <div className={active}>
            <ul className="navLists flex ">
              
              <li className="navItem">
                <a href="#" className="navLink">
                  HOME
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Packages
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Shop
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  About
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  pages
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  News
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Contact
                </a>
              </li>
              <button className="btn">
                <a href="#">BOOKNOW</a>

              </button>

            </ul>
            <div className="closeNavbar"
            onClick={toggleRemove}
            >
           
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div
          onClick={toogleShow}
           className="toggleNavbar">
          <TbGridDots  className="icon"/>
          </div>


        </header>
      </section>
    </>
  );
}

export default Navbar;
