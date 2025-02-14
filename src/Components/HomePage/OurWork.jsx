import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import uiux__1 from '../../../public/uiux__1.jpg'
import uiux__2 from '../../../public/uiux__2.jpg'
import uiux__3 from '../../../public/uiux__3.jpg'


const OurWork = () => {
  return (
    <div className="container_fluid bg-[#0D6ED6]">
        <div className="container text-[#FBFBFB]">
            <div className="py-[20%] md:py-[10%]">
                <div className="font-[200]">
                    <span className="text-[12px]">03</span>
                    <p className="py-[1%]">OUR WORKS</p>
                </div>

                <div className="py-10">
                    <h2 className="text-[24px] md:text-[55px] font-[200]">Check out some of our favorite projects to date. Yours may be next!</h2>
                </div>

                <div className="py-[5%] grid grid-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="h-[100%] w-[100%] bg-[#FBFBFB] rounded-lg brightness-90 hover:grayscale-0 grayscale">
                        <Link href="">
                            <Image src={uiux__1} alt="" className="rounded-lg"></Image>
                        </Link>
                        <div className="py-[20px] px-[10px] text-[#000000]">
                            <h2 className="text-[20px] font-[500]">Mylizious</h2>
                            <p className="text-[15px] font-[100]">UI/UX. React Native. Node. on Shopyfy</p>
                        </div>
                    </div>
                    <div className="h-[100%] w-[100%] bg-[#FBFBFB] rounded-lg brightness-90 hover:grayscale-0 grayscale">
                        <Link href="">
                            <Image src={uiux__2} alt="" className="rounded-lg"></Image>
                        </Link>
                        <div className="py-[20px] px-[10px] text-[#000000]">
                            <h2 className="text-[20px] font-[500]">AdTech</h2>
                            <p className="text-[15px] font-[100]">UI/UX. NextJS. Node. on AWS</p>
                        </div>
                    </div>
                    <div className="h-[100%] w-[100%] bg-[#FBFBFB] rounded-lg brightness-90 hover:grayscale-0 grayscale">
                        <Link href="">
                            <Image src={uiux__3} alt="" className="rounded-lg"></Image>
                        </Link>
                        <div className="py-[20px] px-[10px] text-[#000000]">
                            <h2 className="text-[20px] font-[500]">Po.to</h2>
                            <p className="text-[15px] font-[100]">UI/UX. ReactJS. Node. on Hostinger</p>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-10 md:py-4">
                    <Link href="" className="p-4 bg-[#FBFBFB] text-[#000000] font-[200] hover:font-[400]">View more work</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurWork