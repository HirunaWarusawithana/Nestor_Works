"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import paraImg from "../../../public/sunrise1.png";
import new_collections from "../../../public/new_collections";
import Item from "../item/Item";

const Parallex = () => {
  const { scrollYProgress } = useScroll();

  // Image movement along x-axis on scroll
  const x = useTransform(scrollYProgress, [0, 1], [-300, 200]);

  return (
    <div>
      <div className=" bg-slate-100 ">
        <div className="parallex h-screen grid grid-cols-2 items-center justify-center mx-20">
          {/* Image moves horizontally on scroll */}
          <motion.div style={{ x }}>
          <Image src={paraImg} alt="Parallax Image" className="w-3/4" />

          </motion.div>

          {/* Text fades in on scroll */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-black font-black tracking-tight">
              NEW ARRIVALS
            </h1>
            <h3 className="text-center text-xs md:text-sm">
              Just Landed: The Hottest Watches of the Season!
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mx-20 pb-20">
          {new_collections.map((item, index) => {
            return (
              <Item
                key={index}
                brand={item.brand}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Parallex;
