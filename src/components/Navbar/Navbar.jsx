import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const DropdownLinks = [
  { name: "Our Services", link: "/#services" },
  { name: "Top Brands", link: "/#mobile_brands" },
  { name: "Location", link: "/#location" },
];

const Navbar = ({handleOrderPopup}) => {
  const [showMenu, setShowNenu] = useState(false);
  const toggleMenu = () => {
    setShowNenu(!showMenu);
  };
  return (
    <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]">
      <div className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container py-[2px] sm:block hidden">
          <div className="flex justify-between py-[2px]">
            <p className="">20% off on next booking</p>
            <p>Mobile No. +91 89396 15914</p>
          </div>
        </div>
      </div>
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between">
          {/* logo section */}
          <div>
            <Link to="/">
              <img src={LogoImg} alt="" className="h-16" />
            </Link>
          </div>
          {/* Desktop navlinks section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li className="py-4">
                <NavLink
                  to="/"
                  activeClassName="active"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home{" "}
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/about" onClick={() => window.scrollTo(0, 0)}>
                  About{" "}
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/blogs" onClick={() => window.scrollTo(0, 0)}>
                  Blogs{" "}
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/places" onClick={() => window.scrollTo(0, 0)}>
                  Best Places
                </NavLink>
              </li>
              {/* dropdown section */}
              <li className="py-4 relative group cursor-pointer:">
                <div className="dropdown flex items-center">
                  <span>Quick Links</span>
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </div>
                <div className="absolute -left-9 z-[999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                  <ul>
                    {DropdownLinks.map((data) => {
                      return (
                        <li key={data.name}>
                          <a
                            href={data.link}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          >
                            {data.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* Book Now button */}
          <div className="flex items-center gap-4">
            <button
              onClick={()=>handleOrderPopup()}
            className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
              Book Now
            </button>
            {/* mobile hamburger menu  */}
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowNenu={setShowNenu} showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
