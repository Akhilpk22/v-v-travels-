import React,{useEffect} from "react";
import video2 from "../../ASSts/video2.mp4";
import { BsFillSendFill } from "react-icons/bs";
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagramSquare } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import "./footer.css";

import Aos from "aos";
import 'aos/dist/aos.css'

function Footer() {
  // lest do some animation in our web site  for using  react hooks
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <section className="footer">
        <div className="videoDiv">
          <video src={video2} loop muted autoPlay type="video2/mp4"></video>
        </div>

        <div className="secContent container">
          <div className="contactDiv flex">
            <div data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with Us</h2>
            </div>
            <div className="inputDiv flex">
              <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
              <button data-aos="fade-up" className="btn flex" type="submit">
                SEND
                <BsFillSendFill className="icon" />
              </button>
            </div>
          </div>
          <div className="footerCard flex">
            <div className="footerInfo flex">
              <div className="logoDiv">
                <a href="#" className="logo flex">
                  <MdTravelExplore className="icon" />
                  Travel.
                </a>
              </div>
              <div data-aos="fade-up" className="footerPraagraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab ea
                expedita minus quidem. Fugiat enim, nemo molestiae veniam neque
                molestias quia a tempore iusto fuga hic atque itaque, laudantium
                nam!
              </div>
              <div data-aos="fade-up" className="footerSocials flex">
                <FaTwitter className="icon" />
                <TfiYoutube className="icon" />
                <FaInstagramSquare className="icon" />
              </div>
            </div>
            <div className="footerLinks grid">
              {/* one group */}
              <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">OUR AGENCY</span>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  insurance
                </li>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  Tpurism
                </li>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  payment
                </li>
              </div>
               {/* two group */}
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">PARTNERS</span>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  Bookingd
                </li>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  Rentcars
                </li>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  HostelWorld
                </li>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  trivago
                </li>
              </div>
               {/* three group */}
              <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                <span className="groupTitle">LAST MINUTE</span>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  London
                </li>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  Califorina
                </li>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  Indonesia
                </li>
                <li className="footerlist flex">
                  <FiChevronRight className="icon" />
                  Europe
                </li>
              </div>
            </div>
            <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE OUR</small>
              <small>COPYRIGHTS RESERVED-AK-hil-WORLD-2023</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
