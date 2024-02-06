import React,{useEffect} from "react";
import "./home.css";
import video1 from "../../ASSts/video1.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BsListTask } from "react-icons/bs";
import { TbAppsFilled } from "react-icons/tb";


import Aos from "aos";
import 'aos/dist/aos.css'


function Home() {

  // lest do some animation in our web site  for using  react hooks
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])




  return (
    <>
      <section className="home">
        <div className="overlay"></div>
        <video src={video1} muted autoPlay loop type="video1/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">OUR packages</span>
            <h1  data-aos="fade-up"className="homeTitle">Search your Holiday</h1>
          </div>

          <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">search your destination :</label>
              <div className="input flex">
                <input type="text" placeholder="enter your  name here...." />
                <GrLocation className="icon" />
              </div>
            </div>
            <div className="dateInput">
              <label htmlFor="city">select your date :</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>
            <div className="priceInput ">
              <div className="label_total flex">
                <label
                  htmlFor="price
                "
                >
                  Max price :
                </label>
                <h3 className="total">$5000:</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000" />
              </div>
            </div>
            <div className="seacrhOptions flex">
              <HiFilter className="icon" />
              <span>MORE FILTER</span>
            </div>
          </div>

          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FaFacebookF  className="iconhome"/>
              <FaInstagramSquare  className="iconhome"/>
              <FaSquareWhatsapp  className="iconhome"/>

            </div>
            <div className="leftIconshome">
            <BsListTask  className="iconhome"/>
            <TbAppsFilled   className="iconhome"/>
            </div>
          </div>
        </div>
      </section>
    </> 
  );
}

export default Home;
