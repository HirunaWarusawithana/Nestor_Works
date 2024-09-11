import React from "react";
import Image from "next/image";
import banner_image from "../../../public/pexels-tima-miroshnichenko-8327680.jpg";
import { Libre_Baskerville } from "@next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const AboutHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-5 mx-14 md:mx-28 lg:mx-24 lg:h-[450px]">
      <div className=" md:my-0 my-6 mx-3">
        <Image className="h-[90%] " src={banner_image} alt="Promotional banner" />
      </div>

      <div className="flex flex-col justify-center gap-y-3 mx-3">
        <h1
          className={`${libreBaskerville.className} mb-3 lg:text-4xl md:text-3xl text-xl leading-5 `}
          style={{ color: "#242424" }}
        >
          Crafted for Those Who Defy Boundaries
        </h1>
        <p className="text-base leading-7" style={{ color: "#868686" }}>
          Nestor Works is a leading watch retailer in Sri Lanka since 1914. In
          Our bussiness we're passionate about offering Our customer the very
          best prices on popular brand-name watches.
        </p>
        <button
          className="w-40 mb-3 mt-6 px-5 py-3 duration-300 border-4 border-[#F8F7F6] text-[#242424] hover:bg-[#242424] hover:text-[#F8F7F6] hover:border-[#242424]"
          style={{
            fontSize: "14px",
          }}
        >
          ABOUT US
        </button>
      </div>
    </div>
  );
};

export default AboutHome;
