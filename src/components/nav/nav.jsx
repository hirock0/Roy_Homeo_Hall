"use client";

import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav className="bg-white h-20 flex items-center shadow-md">
      <div className="container mx-auto px-5 flex items-center justify-between gap-5">
        <div className="">
          <div className=" flex items-center gap-2">
            <div className=" border p-2 text-xl rounded-full font-semibold bg-gradient-to-tl from-red-400 to-teal-300">
              <span className=" text-red-600">R</span>.<span>H</span>
            </div>
            <h1>HOMEO</h1>
          </div>
        </div>

        <div className=" flex items-center gap-5 justify-between w-full max-lg:hidden">
          {/* locations-start */}
          <div className=" ">
            <div className=" select-none flex items-center gap-3 bg-slate-100 hover:bg-teal-200 rounded-md px-5 py-1">
              <FaMapMarkerAlt />
              <h1>
                Delevery to
                <br /> Bangladesh
              </h1>
            </div>
          </div>
          {/* locations-end */}
          {/* secarch-section_start */}
          <div className=" flex items-center flex-1 border h-12 rounded-md overflow-hidden">
            <select>
              <option value="">Select</option>
              <option value="medicine">Medicine</option>
            </select>
            <div className=" relative h-full w-full">
              <input
                type="text"
                name=""
                id=""
                className=" bg-teal-200/30 outline-none h-full pl-2 w-full"
                placeholder="Search..."
              />
              <button className=" absolute right-0 bottom-0 top-0 w-12 bg-teal-600 flex items-center justify-center ">
                <FaSearch />
              </button>
            </div>
          </div>
          {/* secarch-section_end */}
          {/* -------------------------- */}
          {/* user_section_start */}
          <div className=" border flex items-center gap-3 p-2 rounded-md bg-slate-100">
            <button className="bg-slate-200 w-12 h-12 flex items-center justify-center rounded-full">
              logo
            </button>
            <div className="">
              <h1>Hello,User</h1>
              <h1>Account $ Orders</h1>
            </div>
          </div>
          {/* user-Section_start */}
        </div>
        {/* ------------ */}
        {/* Mobile-view */}
        {/* secarch-section_start */}
        <div className=" lg:hidden flex items-center flex-1 border h-12 rounded-md overflow-hidden">
          <select>
            <option value="">Select</option>
            <option value="medicine">Medicine</option>
          </select>
          <div className=" relative h-full w-full">
            <input
              type="text"
              name=""
              id=""
              className=" bg-teal-200/30 outline-none h-full pl-2 w-full"
              placeholder="Search..."
            />
            <button className=" absolute right-0 bottom-0 top-0 w-12 bg-teal-600 flex items-center justify-center ">
              <FaSearch />
            </button>
          </div>
        </div>
        {/* secarch-section_end */}

        <div
          className={`${
            !isMobileMenuOpen ? " translate-x-full" : "translate-x-0"
          } text-white fixed right-0 top-0 h-full transition-all bg-slate-800/80 w-full lg:hidden p-5`}
        >
          <div className=" flex justify-end">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
              className=" hover:text-yellow-400"
            >
              <IoCloseSharp size={35} />
            </button>
          </div>
          <div className=" flex  justify-end h-full mt-5">
            <div className=" border w-1/2 bg-slate-800 space-y-4 p-5">
              {/* ------ */}
              {/* user_section_start */}
              <div className=" border  flex items-center gap-3 p-2 rounded-md">
                <button className="bg-slate-200 w-12 h-12 flex items-center justify-center rounded-full">
                  logo
                </button>
                <div className="">
                  <h1>Hello,User</h1>
                  <h1>Account $ Orders</h1>
                </div>
              </div>
              {/* user-Section_start */}

              {/* --------- */}
              {/* location_start */}

              <div className=" ">
                <div className=" select-none flex items-center gap-3 border hover:bg-teal-200 rounded-md px-5 py-1">
                  <FaMapMarkerAlt />
                  <h1>
                    Delevery to
                    <br /> Bangladesh
                  </h1>
                </div>
              </div>
              {/* location_end */}
            </div>
          </div>
        </div>
        {/* Mobile_view */}

        {/* ------------ */}
        {/* cart-start */}
        <div className=" flex items-center gap-3">
          <div className="">
            <FaShoppingCart size={25} />
          </div>
          <button
            onClick={() => {
              setIsMobileMenuOpen(true);
            }}
            className=" lg:hidden"
          >
            <FaBars size={20} />
          </button>
        </div>

        {/* cart_end */}
      </div>
    </nav>
  );
};

export default Nav;
