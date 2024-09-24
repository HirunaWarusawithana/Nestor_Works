"use client";
import React from "react";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import animation from "./Slide.module.css";
import { fadeIn } from "@/app/fadeIn";
import { AnimatePresence, motion } from "framer-motion";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Slide = (props) => {
  return (
    <div style={{ backgroundColor: "#F8F7F6", height: "550px" }} className="w-full">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
        className="relative"
      >
        <Image
          src={props.image}
          alt="Sunrise Image"
          className={`${animation.firefly} absolute z-10 w-1/2 left-1/2 `}
        />
        <h1
          className={`${libreBaskerville.className} w-full text-center absolute z-20 left-1/2  tracking-wide text-8xl`}
          style={{ transform: "translate(-50%, 220%)", color: "#d9d3cf", wordSpacing: "8rem" }}
        >
          {props.topic}
        </h1>
      </motion.div>
    </div>
  );
};

export default Slide;
