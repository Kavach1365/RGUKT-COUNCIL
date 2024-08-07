import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegCompass, FaTicketAlt, FaBug } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { GrGallery } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="max-h-screen pr-2">
      <a href="/">
        <img
          src="https://i.ibb.co/pzggkrQ/club-Council-logo-with-Name-no-BG.png"
          alt="ClubCouncilLogo"
          className="w-25"
        />
      </a>
      <div className="mt-10">
        <div className="mb-6">
          <NavLink to="/" className="nav-item" activeclassname="active">
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer  pl-4">
              <GoHome className="text-gray-700 mr-4" />
              <p className="text-gray-700 font-medium title nav-item-text">
                Home
              </p>
            </div>
          </NavLink>
          <NavLink to="/clubs" className="nav-item" activeclassname="active">
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer  pl-4">
              <FaRegCompass className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">Clubs</p>
            </div>
          </NavLink>
          <NavLink to="/events" className="nav-item" activeclassname="active">
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <FaTicketAlt className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">Events</p>
            </div>
          </NavLink>
          <NavLink to="/calender" className="nav-item" activeclassname="active">
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <SlCalender className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">
                Calender
              </p>
            </div>
          </NavLink>
          <NavLink to="/gallery" className="nav-item" activeclassname="active">
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <GrGallery className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">Gallery</p>
            </div>
          </NavLink>
          <NavLink
            to="/notice-board"
            className="nav-item"
            activeclassname="active"
          >
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <HiOutlineSpeakerphone className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">
                Notice Board
              </p>
            </div>
          </NavLink>
        </div>
        
        <div className="mb-4">
          <h1 className="font-bold text-sm pl-6 mb-2">HELP</h1>
          <NavLink
            to="/bug-report"
            className="nav-item"
            activeclassname="active"
          >
            <div className="nav-item-content flex items-center mb-2 hover:bg-gray-100 hover:rounded-md h-10 cursor-pointer pl-4">
              <FaBug className="text-gray-500 mr-4" />
              <p className="text-gray-700 font-medium nav-item-text">
                Report Bugs & Features
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
