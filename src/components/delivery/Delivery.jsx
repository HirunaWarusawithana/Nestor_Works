"use client";
import React from "react";
import Image from "next/image";
import delivery from "../../../public/undraw_deliveries_2r4y.svg";
import { motion } from "framer-motion";

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        delay: delay,
        duration: 1,
        ease: "easeOut",
      },
    },
  };
};


const Delivery = () => {
  return (
    <div className="grid sm:grid-cols-2 justify-items-center items-center my-20 mx-20">
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className="uppercase text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-black tracking-tight">
          Shop Online
        </h1>
        <p className="text-xs md:text-sm">
          within Colombo same day delivery, Island wide within 2-3 working Days
        </p>
        <button className="my-8 bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-800 hover:to-blue-900 text-white font-bold text-xs sm:text-sm py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          Learn More
        </button>
      </motion.div>

      <motion.div
      className="flex justify-center items-center"
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <Image
          className="w-2/3 "
          src={delivery}
          alt="Delivery Illustration"
           
        />
      </motion.div>
    </div>
  );
};

export default Delivery;
