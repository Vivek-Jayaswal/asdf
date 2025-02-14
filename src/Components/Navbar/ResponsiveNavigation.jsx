import React, { useState, useEffect } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
import { MenuLinks } from "./MenuLinks";

const ResponsiveNavigation = ({ showMenu, toggleMenu }) => {
    const [openNav, setOpenNav] = useState([]); // Track open nav items
    const [openSubMenu, setOpenSubMenu] = useState(null); // Track open submenu

    useEffect(() => {
        if (showMenu) {
            setOpenNav(MenuLinks.map((_, index) => index)); // Open all nav items by default
            document.body.classList.add("no-scroll");
        } else {
            setOpenNav([]); // Close all when menu is hidden
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll"); // Cleanup
        };
    }, [showMenu]);

    const handleNavClick = (index) => {
        toggleMenu(); // Close menu after clicking a nav item
    };

    const handleSubMenuClick = () => {
        toggleMenu(); // Close menu when clicking a submenu link
    };

    return (
        <div>
            <div className={`${showMenu ? "right-0" : "-right-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[100%] px-4 pt-[60px] text-black duration-300 lg:hidden rounded-l-lg bg-[#f8fafc] overflow-scroll`}>
                
                {/* Close menu button */}
                <button onClick={toggleMenu} className="absolute right-[13px] top-[18px] md:right-[25px] md:top-[28px]">
                    <LiaTimesSolid className="cursor-pointer transition-all" size={30} />
                </button>
                
                <div className="md:pt-10 px-2">
                    <ul className="md:text-[22px] pl-1">
                        {MenuLinks.map(({ id, name, link, icon, submenu, sublinks }, mainIndex) => (
                            <li key={id} className="">
                                <Link
                                    href={link} 
                                    className="tracking-wider hover:text-blue-500 py-[20px] cursor-pointer flex items-center gap-2 group"
                                    onClick={() => handleNavClick(mainIndex)}
                                >
                                    <span>{name}</span>
                                    <span className={`transition-transform duration-300 rotate-180`}>
                                        {icon}
                                    </span>
                                </Link>

                                {/* Submenu Dropdown (Always Open) */}
                                {submenu && sublinks && (
                                    <div className="left-0 mt-0 px-5">
                                        {sublinks.map(({ subMenuHeading, subIcon, sublink }, subIndex) => (
                                            <div key={subIndex} className="border-b last:border-none py-3">
                                                <span
                                                    className="tracking-wider hover:text-blue-500 cursor-pointer flex items-center gap-2 group"
                                                    onClick={() => setOpenSubMenu(openSubMenu === `${mainIndex}-${subIndex}` ? null : `${mainIndex}-${subIndex}`)}
                                                >
                                                    <h4 className="py-2 font-semibold">{subMenuHeading}</h4>
                                                    <span className={`transition-transform duration-300 ${openSubMenu === `${mainIndex}-${subIndex}` ? "rotate-180" : ""}`}>
                                                        {subIcon}
                                                    </span>
                                                </span>

                                                {/* Submenu Links */}
                                                {openSubMenu === `${mainIndex}-${subIndex}` && (
                                                    <ul className="pt-3 pb-8">
                                                        {sublink.map((item, subItemIndex) => (
                                                            <li key={subItemIndex} className="px-4 py-2 text-[14px] font-[300] hover:font-[500] hover:text-[#0D6ED6] xl:w-100 xl:whitespace-nowrap">
                                                                <Link href={item.link} onClick={handleSubMenuClick}>{item.name}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Contact Button */}
                    <div className="py-5">
                        <div className="bg-[#000000] text-[#FBFBFB] hover:bg-[#0D6ED6] text-center font-semibold text-[13px] md:text-[16px] px-[16px] py-[10px] md:px-[20px] md:py-[12px] rounded-full cursor-pointer whitespace-nowrap">
                            <Link href="/contact" onClick={toggleMenu}>LET’S TALK</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveNavigation;
