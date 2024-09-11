import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#272626] tracking-widest text-white py-12 px-4 md:px-8 lg:px-16">
      {/* Newsletter Signup Section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 md:gap-6 lg:gap-12">
        <div className="flex flex-col gap-5">
          <h1 className="text-lg lg:text-xl">
            Sign up for our newsletter to receive special offers, news, and
            great sales notifications.
          </h1>
          <div className="flex flex-col sm:flex-row">
            <input
              className="text-xs px-4 py-4 bg-[#3D3B3B] w-full sm:w-[70%] lg:w-[60%] outline-none"
              placeholder="Email Address"
              type="text"
            />
            <button className="text-xs px-6 py-4 bg-white text-[#272626] w-full sm:w-auto hover:bg-[#AF7F66] hover:text-white duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Links and Socials Section with Conditional Vertical Line */}
        <div className="flex flex-col sm:flex-row justify-around gap-10 sm:gap-6 pt-10 lg:pt-0 text-sm lg:border-l border-[#43403F] lg:pl-12">
          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold">LINKS</h3>
            <ul className="flex flex-col gap-2 cursor-pointer">
              <li className="hover:text-[#AF7F66] duration-300">HOME</li>
              <li className="hover:text-[#AF7F66] duration-300">CATEGORY</li>
              <li className="hover:text-[#AF7F66] duration-300">SALE</li>
              <li className="hover:text-[#AF7F66] duration-300">CONTACT US</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold ">SOCIAL</h3>
            <ul className="flex flex-col gap-2 cursor-pointer">
              <li className="hover:text-[#AF7F66] duration-300">FACEBOOK</li>
              <li className="hover:text-[#AF7F66] duration-300">INSTAGRAM</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col items-center justify-center mt-12">
        <hr className="w-full max-w-[90%]  border-[#43403F] h-[1px] my-6" />
        <p className="text-center pt-4 pb-0 text-xs sm:text-sm">
          Reprizo © 2024, Powered by Shopify
        </p>
      </div>
    </div>
  );
};

export default Footer;
