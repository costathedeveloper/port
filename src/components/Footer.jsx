import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='w-full bg-black py-24 p-4'>
        <div className='md:max-w-[1100px] m-auto grid md:grid-cols-5 max-[768px]:md:grid-cols-6 gap-8 max-w-[400px]'>
            <div className='col-span-1'>
                <h3 className="font-bold text-2xl mt-10">Contact us</h3>
                <h3 className="py-2 text-[#60737a]">Connect With Us Today And Get The Best Rates</h3>
                <h3 className="py-2 text-[#60737a]">+27213003939</h3>
                <h3 className="py-2 text-[#60737a]">info@capearchivestour.com</h3>

                <div className="flex gap-4 py-4">
                    <div className="p-4 rounded-xl bg-black cursor-pointer"><FaFacebook size={25}/></div>
                    <div className="p-4 rounded-xl bg-black cursor-pointer"><FaTwitter size={25}/></div>
                    <div className="p-4 rounded-xl bg-black cursor-pointer"><FaLinkedin size={25}/></div>
                    <div className="p-4 rounded-xl bg-black cursor-pointer"><FaYoutube size={25}/></div>
                </div>
            </div>    

                <div className='col-span-1'>
                    <h3 className="font-bold text-2xl mt-10">About Us</h3>
                    <ul className="py-3 text-[#60737a]">
                        <li className="py-2">Our Story</li>
                        <li className="py-2">Privacy Police</li>
                        <li className="py-2">Terms and Conditions</li>
                        <li className="py-2">Contact us</li>
                    </ul>
                </div>

                <div className='col-span-1'>
                    <h3 className="font-bold text-2xl mt-10">Explore</h3>
                    <ul className="py-3 text-[#60737a]">
                        <li className="py-2"></li>
                       
                        <li className="py-2"><a>Aquila Private Game Reserve</a></li>
                        <li className="py-2"><a>Victoria Falls</a></li>
                        <li className="py-2"><a>Table Mountain National Park</a></li>
                        <li className="py-2"><a>Cape Of Good Hope</a></li>
                        <li className="py-2"><a>Pilanesberg National Park</a></li>
                    </ul>
                </div>

                <div className='col-span-2'>
                    <h3 className="font-bold text-2xl mt-10">Subscribe</h3>
                    <h3 className="py-2 text-[#60737a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia .</h3>
                    <form className='input-box-shadow flex justify-content-between items-center bg-transparent gap-2'>
                    <input type="text" className="my-2 w-full px-5 py-3 border border-solid border-[#121723] bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none placeholder:text-neutral-500" placeholder='Enter your email address here'/>
                    <button className='my-2 px-5 py-3 bg-[#121723] text-white rounded-lg'>Subscribe</button>
                </form>
                </div>
            </div>
    </section>
  )
}

export default Footer