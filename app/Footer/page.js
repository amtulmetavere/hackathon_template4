"use client"; // Marks this as a Client Component
import React from 'react';
import Link from 'next/link'; // Use Link for navigation

const Footer = () => (
    <div className="text-center h-[53px] w-full bg-[#e7e4f8] flex items-center justify-center">
      <div className="flex flex-row justify-between items-center w-[1177px]">
        <p className="text-gray-600">© Wobeky. All Rights Reserved</p>
        <div className="flex justify-between items-center w-20 h-5">
          <Link href="#" passHref>
            <div className="bg-[#151875] w-5 h-5 rounded-[50%] text-white flex items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </div>
          </Link>
          <Link href="#" passHref>
            <div className="bg-[#151875] w-5 h-5 rounded-[50%] text-white flex items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
  


  const Categories = () => (
    <div className="col-span-1">
      <h3 className="font-josefin-sans text-[22px] leading-[25.78px] mb-10 font-bold text-[#000000]">Categories</h3>
      <ul className="font-lato font-normal text-base leading-[1.2] text-[#8A8FB9]">
        <li className="my-[20px] h-[20px]">
          <Link href="#">Laptops & Computers</Link>
        </li>
        <li className="my-[20px] h-[20px]">
          <Link href="#">Cameras & Photography</Link>
        </li>
        <li className="my-[20px] h-[20px]">
          <Link href="#">Smart Phones & Tablets</Link>
        </li>
        <li className="my-[20px] h-[20px]">
          <Link href="#">Video Games & Consoles</Link>
        </li>
        <li className="my-[20px] h-[20px]">
          <Link href="#">Headphones & Earphones</Link>
        </li>
        <li className="my-[20px] h-[20px]">
          <Link href="#">Home & Garden</Link>
        </li>
      </ul>
    </div>
  );

  const CustomerCare = () => (
    <div className="col-span-1">
      <h3 className="font-josefin-sans text-[22px] leading-[25.78px] mb-10 font-bold text-[#000000]">Customer Care</h3>
      <ul className="font-lato font-normal text-base leading-[1.2] text-[#8A8FB9]">
        <li className="my-[20px] h-[20px]">
          <a href="#">My Account</a>
        </li>
        <li className="my-[20px] h-[20px]">
          <a href="#">Returns</a>
        </li>
        <li className="my-[20px] h-[20px]">
          <a href="#">Orders History</a>
        </li>
        <li className="my-[20px] h-[20px]">
          <a href="#">Order Tracking</a>
        </li>
      </ul>
    </div>
  );
  
  const Pages = () => (
    <div className="col-span-1">
      <h3 className="font-josefin-sans text-[22px] leading-[25.78px] mb-10 font-bold text-[#000000]">Pages</h3>
      <ul className="font-lato font-normal text-base leading-[1.2] text-[#8A8FB9]">
        <li className="my-[20px] h-[20px]">
          <a href="#">Blog</a>
        </li>
        <li className="my-[20px] h-[20px]">
          <a href="#">Browse the Shop</a>
        </li>
        <li className="my-[20px] h-[20px]">
          <a href="#">WooCommerce Pages</a>
        </li>
      </ul>
    </div>
  );
  
  const FooterForm = () => (
    <div className="col-span-1">
      <h3 className="font-josefin-sans text-[22px] leading-[25.78px] mb-10 font-bold text-[#000000]">Sign Up for Newsletter</h3>
      <form className="flex">
        <input
          type="email"
          placeholder="Email Address"
          className="px-5 py-[10px] w-[390px] text-[14px] rounded-[10px] text-[#8A8FB9] placeholder:text-[#8A8FB9] focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#151875] text-white font-lato font-normal text-base rounded-[10px] ml-[15px] px-[20px] py-[10px] hover:bg-[#828dff]"
        >
          Sign Up
        </button>
      </form>
    </div>
  );

const FooterPage = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#eeeffb]">
    <div className="w-[80%] lg:w-[1177px] flex flex-row flex-wrap items-start mt-[95px] justify-between">
      <FooterForm />
      <Categories />
      <CustomerCare />
      <Pages />
      <Footer />
   
    </div>

  </div>
   
  );
};

export default FooterPage;
