import React from "react";
import Image from "next/image";
import banner_image from "../../../public/display_image.jpeg";
import { Libre_Baskerville } from "@next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PromotionalSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-14 md:mx-28 gap-3 ">
      <div className="flex flex-col justify-center gap-3">
        <h1
          className={`${libreBaskerville.className} mb-3 lg:text-5xl md:text-4xl text-2xl`}
          style={{color: "#242424" }}
        >
          Seiko Essence
        </h1>
        <p className="text-base" style={{ color: "#868686" }}>
          The first association that comes to one’s mind with the phrase “a good
          wristwatch” is naturally one made somewhere in Switzerland. Do you
          want to know what makes Swiss watches stand out?
        </p>
        <button
          className="w-40 mb-3 mt-6 px-5 py-3 duration-500 border-2 border-[#F8F7F6] text-[#242424] hover:bg-[#242424] hover:text-[#F8F7F6]"
          style={{
            fontSize: "14px",
          }}
        >
          SHOP NOW
        </button>
      </div>
      <div>
        <Image className="h-full" src={banner_image} alt="Promotional banner" />
      </div>
    </div>
  );
};

export default PromotionalSection;
