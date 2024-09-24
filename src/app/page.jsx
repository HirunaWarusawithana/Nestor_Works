"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import Parallex from "@/components/parallex/Parallex";
import Delivery from "@/components/delivery/Delivery";

import CarouselMain from "@/components/CarouselMain/CarouselMain";
import NewCollection from "@/components/NewCollection/NewCollection";
import PromotionalSection from "@/components/PromotionalSection/PromotionalSection";
import AboutHome from "@/components/AboutHome/AboutHome";

import OurProduct from "@/components/OurProducts/OurProduct";

export default function Home() {
  return (
    <div>
      <CarouselMain />

      <NewCollection />
      <PromotionalSection />
      {/* <div className="flex flex-row justify-center ">
        <video
          src="/omegaVideo.mp4"
          style={{ width: "100%", height: "760px" }}
          autoPlay
          loop
          muted
        ></video>
      </div> */}
      {/* <Parallex /> */}
      {/* <OurProduct/> */}
      <AboutHome/>
      
    </div>
  );
}
