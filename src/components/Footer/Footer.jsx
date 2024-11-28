import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Best Places",
    link: "/places",
  },
];

const Footer = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute right-o top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="container">
        <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          {/* travelogo */}
          <div className="py-4 px-4">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={FooterLogo} alt="" className="max-h-[60px]" />
            </h1>
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea
              voluptatem sint atque perferendis debitis, at neque officia
              laudantium omnis, esse, enim perspiciatis. Voluptates cum corrupti
              sit, id at dolore assumenda. Quidem voluptatum beatae qui. Aliquam
              temporibus alias ea. Velit?
            </p>
            <br />
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>Chennai, Tamil Nadu</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt/>
              <p>(123) 456-7890</p>
            </div>
            {/* socila Handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaFacebook  className="text-3xl"/>
              </a>
              <a href="#">
                <FaInstagram  className="text-3xl"/>
              </a>
              <a href="#">
                <FaLinkedin  className="text-3xl"/>
              </a>
            </div>
          </div>
        {/* footer links */}
        <div className="grid grid-cols-3 sm:grid-cols-3 col-span-2 md:pl-10">
        {/* first col link */}
        <div>
            <div className="py-4 px-4">
              <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
              <ul className="flex flex-col gap-6">{
                  FooterLinks.map(({title ,link})=>(
                    <li  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700">
                      <Link to={link} onClick={()=>{
                        window.scrollTo(0,0);
                      }}>
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))
                }</ul>
            </div>
          </div>
          {/* second col link */}
          <div>
            <div className="py-4 px-4">
              <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
              <ul className="flex flex-col gap-6">{
                  FooterLinks.map(({title ,link})=>(
                    <li  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700">
                      <Link to={link} onClick={()=>{
                        window.scrollTo(0,0);
                      }}>
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))
                }</ul>
            </div>
          </div>
          {/* third col link */}
          <div>
            <div className="py-4 px-4">
              <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
              <ul className="flex flex-col gap-6">{
                  FooterLinks.map(({title ,link})=>(
                    <li  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700">
                      <Link to={link} onClick={()=>{
                        window.scrollTo(0,0);
                      }}>
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))
                }</ul>
            </div>
          </div>
        </div>        
        </div>

        {/* Footer copyight section */}
        <div> 
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white ">@copyright 2024 All rights reserved || Made with by Snk-Teach</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
