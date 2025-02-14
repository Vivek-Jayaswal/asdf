import Link from 'next/link'
import React from 'react'

const Services = [
    {
        id: 1,
        service: 'Web App Development',
    },
    {
        id: 2,
        service: 'Application Development',
    },
    {
        id: 3,
        service: 'UI/UX Design',
    },
    {
        id: 4,
        service: 'IT Consulting',
    },
    {
        id: 5,
        service: 'SEO',
    },
    {
        id: 6,
        service: 'Digital Marketing',
    },
]


const Contact = () => {
  return (
    <div className="container_fluid bg-[#0D6ED6]">
        <div className="container text-[#FBFBFB]">
            <div className="py-[20%] md:py-[10%]">
                <div className="font-[200]">
                    <span className="text-[12px]">05</span>
                    <p className="py-[1%]">HIRE US</p>
                </div>

                <div className="py-[15%] md:py-[5%] grid grid-2 grid-cols-1 lg:grid-cols-2 gap-4 font-[00]">
                    {/* Left Side */}
                    <div className="h-[100%] w-[100%] p-3">
                        <div className="py-3">
                                <h1 className="text-3xl font-[500]">Lets Talk.</h1>
                        </div>
                        <div className="py-[15%]">
                            <p className="">You can also write us on our e-mail.</p>
                            <h2 className="text-2xl font-[300]">hello@cyberdeu.com</h2>
                        </div>
                        <div className="">
                            <p className="text-xl">Located.</p>
                            <h2 className="text-2xl md:text-3xl py-1 font-[150]">1738-C Laxman vihar Phase 2 Sector 3A, Gurgaon HR, 122001</h2>
                            <h2 className="text-2xl md:text-3xl py-4 font-[300]">+910000000000</h2>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="h-[100%] w-[100%] p-3">
                        <div className="grid grid-2 grid-cols-1 md:grid-cols-2 gap-[0%] md:gap-[5%]">
                            <div className="py-4">
                                <label>Name *</label>
                                <div className="py-2">
                                    <input className="w-[100%] py-3 outline-none text-[#000000] p-2 rounded-sm" type="text" placeholder="Name" />
                                </div>
                            </div>

                            <div className="py-4">
                                <label>Company Name *</label>
                                <div className="py-2">
                                    <input className="w-[100%] py-3 outline-none text-[#000000] p-2 rounded-sm" type="text" placeholder="Company Name" />
                                </div>
                            </div>
                        </div>
                        <div className="py-4">
                            <label>Work Email *</label>
                            <div className="py-2">
                                <input className="w-[100%] py-3 outline-none text-[#000000] p-2 rounded-sm" type="email" placeholder="Work Email" />
                            </div>
                        </div>
                        <div className="py-4">
                            <label>Phone Number *</label>
                            <div className="flex justify-start gap-[3%] py-2">
                                <input className="w-[20%] md:w-[15%] py-3 outline-none text-[#000000] p-2 rounded-sm" type="tel" placeholder="+91" />
                                <input className="w-[80%] md:w-[60%] py-3 outline-none text-[#000000] p-2 rounded-sm" type="tel" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="py-4">
                            <label>Subject *</label>
                            <div className="py-2">
                                <input className="w-[100%] py-3 outline-none text-[#000000] p-2 rounded-sm" type="text" placeholder="Subject" />
                            </div>
                        </div>
                        {/* ------ */}
                        {/* <div className="py-4">
                            <label>Services</label>
                            <div className="flex flex-wrap py-2 gap-2">
                                {Services.map((data, index) =>(
                                    <div key={index} className="">
                                        <Link  key={index} className="flex bg-[#FBFBFB] text-[#000000] p-4 rounded-2xl" href="">{data.service}</Link>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                        <div className="py-4">
                            <label>Project details *</label>
                            <div className="py-2 text-[#000000]">
                                <textarea className="w-[100%] md:w-[80%] py-3 p-2 outline-none rounded-sm" rows="4" cols="50" placeholder="Project details"></textarea>
                            </div>
                        </div>
                        <div className="pt-4">
                            <button className="bg-[#FBFBFB] text-[#000000] px-5 py-2 rounded-3xl hover:bg-[#0D6ED6] hover:text-[#FBFBFB] border">Let's Talk</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact