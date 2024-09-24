import React from "react";

import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full  my-24 ">
      <h2 className={`${libreBaskerville.className} lg:text-[44px] md:text-[38px] sm:text-[30px] text-[26px]  text-center mb-8`}>Drop a Line</h2>
      <form className="space-y-6 w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-[20px] py-[14px] bg-[#E9E8E7] focus:outline-1 "
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-[20px] py-[14px] bg-[#E9E8E7] focus:outline-1 "
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          className="w-full px-[20px] py-[14px] bg-[#E9E8E7] focus:outline-1"
        />
        <textarea
          placeholder="Message"
          rows="8"
          className="w-full px-[20px] py-[14px] bg-[#E9E8E7] focus:outline-1"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-[14px] w-40 px-5 py-3 duration-300 border-4 border-[#F8F7F6] text-[#242424] hover:bg-[#242424] hover:text-[#F8F7F6] hover:border-[#242424]"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
