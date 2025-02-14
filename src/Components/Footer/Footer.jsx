import React from 'react'
import cyberdeu_logo from "../../../public/cyberdeu_logo.png";
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai"
import { RiTwitterXFill } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";



const Footer = () => {
  return (
    <div>
        <div className="container_fluid bg-[#020617] text-[#f8fafc] py-[10%] md:py-[5%] border-b-[0.1px]">
                <div className="container grid grid-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 tracking-wider font-[100] leading-relaxed">
                    <div className="w-[100%] h-[100%]">
                        {/* logo */}
                        <div className="h-[10%] w-[50%] md:h-[14%] md:w-[60%] lg:h-[15%] lg:w-[80%] cursor-pointer">
                            <Link href="">
                                <Image
                                    src={cyberdeu_logo}
                                    alt=""
                                    className="w-full h-auto"
                                ></Image>
                            </Link>
                        </div>
                        <div className="py-[7%]">
                            <h3 className="py-[5%] text-[13px] ">Let's conect with our socials</h3>
                            <ul className="flex gap-[18px]">
                                <li className="text-2xl hover:text-[#0077B5]"><Link href='' alt=''><FaLinkedinIn /></Link></li>
                                <li className="text-2xl hover:text-[#FF0000]"><Link href='' alt=''><AiOutlineYoutube /></Link></li>
                                <li className="text-2xl hover:text-[#1DA1F2]"><Link href='' alt=''><RiTwitterXFill /></Link></li>
                                <li className="text-2xl hover:text-[#7289da]"><Link href='' alt=''><RxDiscordLogo /></Link></li>
                                <li className="text-2xl hover:text-[#ee2a7b]"><Link href='' alt=''><BsInstagram /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%]">
                        <h2 className="text-2xl">COMPANY</h2>
                        <ul className="tracking-wider py-[6%]">
                            <li className="hover:text-[#0D6ED6] cursor-pointer">Services</li>
                            <li className="hover:text-[#0D6ED6] cursor-pointer">Work</li>
                            <li className="hover:text-[#0D6ED6] cursor-pointer">Careers</li>
                            <li className="hover:text-[#0D6ED6] cursor-pointer">About Us</li>
                            <li className="hover:text-[#0D6ED6] cursor-pointer">Support</li>
                        </ul>
                    </div>
                    <div className="w-[100%] h-[100%]">
                        <h2 className="text-2xl">COMMUNITY</h2>
                        <form className="py-[6%]">
                            <input
                                className="rounded-sm outline-none bg-[#111827] text-[#f8fafc] placeholder:text-[#afafb0] px-4 my-1 py-2 w-[85%]"
                                type="text"
                                placeholder="Your name..."
                                required
                            />
                            <input
                                className="rounded-sm outline-none bg-[#111827] text-[#f8fafc] placeholder:text-[#afafb0] px-4 my-1 py-2 w-[85%]"
                                type="email"
                                placeholder="Your email..."
                                required
                            />
                            <div className="">
                                <input
                                className="hover:bg-[#0D6ED6] hover:text-[#f8fafc] text-[#afafb0] bg-[#111827] p-6 my-1 py-2 rounded-sm cursor-pointer"
                                type="submit"
                                value="Join"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="w-[100%] h-[100%] tracking-wider">
                        <h2 className="text-2xl">GET IN TUCH</h2>
                        <ul className="py-[6%]">
                            <li className="">+910000000000</li>
                            <li className="">hello@cyberdeu.com</li>
                            <li className="">1738-C Laxman vihar Phase 2 Sector 3A, Gurgaon HR, 122001</li>
                        </ul>
                    </div>
                </div>
        </div>
        {/* Copyright */}
        <div className="bg-[#020617] py-4 text-[#f8fafc] text-center text-[10px] md:text-[12px] font-[200]">
            Copyright © 2025 Cyberdeu All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer