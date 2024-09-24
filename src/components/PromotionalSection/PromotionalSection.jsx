import React from "react";
import Image from "next/image";
import banner_image from "../../../public/display_image.jpeg";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PromotionalSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:mx-24 my-24">
      <div className="w-4/5 lg:w-1/2 p-4">
        <Image
          src={banner_image} // Replace with your image path
          alt="Watch Repair"
          className=""
        />
      </div>
      <div className="w-4/5 lg:w-1/2 p-4">
        <h1
          className={`${libreBaskerville.className} mb-3 lg:text-4xl md:text-3xl text-xl leading-5 `}
          style={{ color: "#242424" }}
        >
          Designed for Those Who Evade Limits
        </h1>
        <p className="text-base leading-7" style={{ color: "#868686" }}>
          Attention to details is always a good feature. We couldn’t think of
          any better present for our 5th anniversary than a pair of exclusive
          watches from the Lawson collection. Every time I look at my watch I
          think of her and feel she thinks of me.
        </p>
        <div className="flex space-x-4">
          <button
            className="w-40 mb-3 mt-6 px-5 py-3 duration-300 border-4 border-[#F8F7F6] text-[#242424] hover:bg-[#242424] hover:text-[#F8F7F6] hover:border-[#242424]"
            style={{
              fontSize: "14px",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
