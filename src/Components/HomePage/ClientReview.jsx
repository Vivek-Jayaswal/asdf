"use client"

import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from "react";
import { IoIosReturnLeft, IoIosReturnRight } from 'react-icons/io';


const clientReviewData = [
    {
        id: 1,
        image: 'ONE',
        review: `Cyberdeu improved the client's email templates and visualized them for better CX. Their team was skilled in UI/UX design and understood the project's requirements perfectly, enabling them to deliver quality outputs on time. Moreover, there was great communication between both teams.`,
        clientName: 'Akshay Jaiswal',
        clientOccupation: 'Founder & CEO of agriaksh'
    },
    {
        id: 2,
        image: 'TWO',
        review: `Cyberdeu improved the client's email templates and visualized them for better CX. Their team was skilled in UI/UX design and understood the project's requirements perfectly.`,
        clientName: 'Aman Patra',
        clientOccupation: 'Founder of cooly'
    },
    {
        id: 3,
        image: 'THREE',
        review: `Their team was skilled in UI/UX design and understood the project's requirements perfectly, enabling them to deliver quality outputs on time. Moreover, there was great communication between both teams.`,
        clientName: 'Shivendra Kacher',
        clientOccupation: 'Founder hallooo'
    },
    {
        id: 4,
        image: 'FOUR',
        review: `Cyberdeu improved the client's email templates and visualized them for better CX. enabling them to deliver quality outputs on time. Moreover, there was great communication between both teams.`,
        clientName: 'Vivek Lamba',
        clientOccupation: 'CEO of abc'
    },
    {
        id: 5,
        image: 'FIVE',
        review: `visualized them for better CX. Their team was skilled in UI/UX design and understood the project's requirements perfectly, enabling them to deliver quality outputs on time. Moreover, there was great communication between both teams.`,
        clientName: 'Amit Tomar',
        clientOccupation: 'Founder of pickker'
    }
]

const ClientReview = () => {

    // 
    const [currentIndex, setCurrentIndex] = useState(0);
    // Automatically slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clientReviewData.length);
        }, 2000); // Adjust time for auto-sliding
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [clientReviewData.length]);
    // Function to manually go to the next slide
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clientReviewData.length);
    };
    // Function to manually go to the previous slide
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? clientReviewData.length - 1 : prevIndex - 1
        );
    };

  return (
    <div className="container_fluid">
        <div className="container">
            <div className="py-[20%] md:py-[10%]">
                <div className="font-[200]">
                    <span className="text-[12px]">04</span>
                    <p className="py-[1%]">CLIENT REVIEWS</p>
                </div>

                <div className="text-2xl md:text-5xl xl:text-6xl py-10 font-[200]">
                    <h2 className="">The reviews of our clients will say more about us than we about ourselves.</h2>
                </div>

                {/*  */}
                <div className="w-[100%] h-[100%] py-[5%] grid grid-1 grid-cols-1 font-[300]">
                    <div className="relative overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                            {clientReviewData.map((data, index) => (
                                <div key={index} className="min-w-full flex p-3 gap-6 border-[0.1px] border-[#0D6ED6] md:border-none">
                                    <div className="h-[100%] w-[100%] md:w-[80%]">
                                        <p className="border-b-[1px] pb-[40px]">{data.review}</p>
                                        <div className="py-6">
                                            <h2 className="text-2xl font-[400]">{data.clientName}</h2>
                                            <p className="text-sm">{data.clientOccupation}</p>

                                            {/* Image */}
                                            <div className="py-[10%] mt-[3%] h-[100%] w-[30%] bg-[#93c5fd]">
                                                {/* <img
                                                    src={data.image}
                                                    alt="Client"
                                                    className="h-full w-auto object-cover"
                                                /> */}
                                                <h1 className="flex justify-center items-center  w-[100%] h-[100%]">{data.image}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Buttons */}
                        <div className="absolute inset-0 hidden md:flex items-center justify-end gap-8 px-4">
                            <div className="text-4xl">
                                <button onClick={handlePrev} className="bg-[#0D6ED6] text-[#FBFBFB] p-2">
                                    <IoIosReturnLeft />
                                </button>
                            </div>
                            <div className="text-4xl">
                                <button onClick={handleNext} className="bg-[#0D6ED6] text-[#FBFBFB] p-2">
                                    <IoIosReturnRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientReview
