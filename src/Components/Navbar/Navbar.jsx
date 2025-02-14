"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LiaTimesSolid, LiaBarsSolid } from "react-icons/lia";
import cyberdeu_logo from "../../../public/cyberdeu_logo.png";
import { MenuLinks } from "./MenuLinks";
import ResponsivNavbar from "./ResponsivNavbar";
import ResponsiveNavigation from "./ResponsiveNavigation";


const Navbar = () => {
  // Hamburgger Menu for small devices
  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  return (
    <div className="container-fluid font-light border-b-[1px]">
        <div className="px-[3%] flex justify-between items-center">
            <div className="flex items-center md:gap-[8%]">
                {/* logo */}
                <div className="h-[70%] w-[70%] md:h-[25%] md:w-[40%] lg:h-[40%] lg:w-[25%] cursor-pointer">
                    <Link href="/">
                    <Image
                        src={cyberdeu_logo}
                        alt=""
                        className="w-full h-auto"
                    ></Image>
                    </Link>
                </div>
                <div className="hidden lg:block">
                  <ul className="flex gap-8">
                    {MenuLinks.map(({ id, name, link, icon, submenu, sublinks }) => (
                      <li key={id} className="relative group">
                        <Link href={link} className="tracking-wider hover:text-blue-500 py-[28px] cursor-pointer flex items-center gap-2 group">
                          <span>{name}</span>
                          <span className="group-hover:rotate-180 transition-transform duration-300">{icon}</span>
                        </Link>

                        {/* Submenu Dropdown */}
                        {submenu && sublinks && (
                          <div className="absolute left-0 border-t-[1px] px-5 bg-[#f8fafc] shadow-md rounded-sm hidden group-hover:flex transition-opacity duration-300">
                            {sublinks.map(({ subMenuHeading, sublink }, index) => (
                              <div key={index} className="border-b last:border-none py-5">
                                <h4 className="px-4 py-2 font-semibold">{subMenuHeading}</h4>
                                <ul className="pt-3 pb-8">
                                  {sublink.map((item, subIndex) => (
                                    <li key={subIndex} className="px-4 py-2 text-[14px] font-[300] hover:translate-x-2 transition delay-50 hover:text-[#0D6ED6] xl:w-100 xl:whitespace-nowrap">
                                      <Link href={item.link}>{item.name}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>

            {/* Contack Button */}
            <div className="pr-[10%] md:pr-[0%] py-[4%] md:py-[3%] lg:py-[0%]">
                <div className="bg-[#000000] text-[#FBFBFB] hover:bg-[#0D6ED6] text-center font-semibold text-[13px] lg:text-[14px] px-[12px] py-[8px] md:px-[18px] md:py-[14px] lg:px-[12px] lg:py-[10px] rounded-full cursor-pointer whitespace-nowrap">
                    <div className="">
                        <Link href="/contact">LET’S TALK</Link>
                    </div>
                </div>
            </div>

            {/* Menu for sm device */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu}>
                {showMenu ? (
                    <LiaBarsSolid
                    className="cursor-pointer transition-all"
                    size={30}
                    />
                ) : (
                    <LiaBarsSolid className="cursor-pointer transition-all" size={30} />
                )}
                </button>
            </div>
        </div>
        <ResponsivNavbar showMenu={showMenu} toggleMenu={toggleMenu}/>
        {/* <ResponsiveNavigation showMenu={showMenu} toggleMenu={toggleMenu}/> */}
    </div>
  );
};

export default Navbar;
