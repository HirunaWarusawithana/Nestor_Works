import React from "react";
import backgroundImage from "../../../public/about-1.jpg";
import Link from "next/link";

import { Libre_Baskerville } from "next/font/google";
import AboutInAbout from "@/components/AboutInAbout/AboutInAbout";
import StatsSummary from "@/components/StatsSummary/StatsSummary";
import OwnerCards from "@/components/OwnerCards/OwnerCards";
import ContactPart from "@/components/ContactPart/ContactPart";
import ContactForm from "@/components/ContactForm/ContactForm";
import GoogleMap from "@/components/GoogleMap/GoogleMap";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const page = () => {
  return (

    <div className="tracking-wider">
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "45vh",
          position: "relative",
        }}
        className="flex flex-col justify-center items-center"
      >
        {/* Dark overlay */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div
          style={{ position: "relative", zIndex: 2 }}
          className="flex flex-col justify-center items-center"
        >
          <h1
            className={`${libreBaskerville.className} text-[#FFFFFF] lg:text-[52px] md:text-[44px] sm:text-[33px] text-[30px]`}
          >
            About Us
          </h1>
          <p className="text-[#AFAFAF] text-[18px] ">
            <Link className="hover:text-[#FFFFFF] duration-300" href="/">
              Home
            </Link>
            / About Us
          </p>
        </div>
      </div>

      <AboutInAbout />
      <StatsSummary/>
      <OwnerCards/>
      <ContactPart/>
      <ContactForm/>
      <GoogleMap/>
    </div>
  );
};

export default page;
