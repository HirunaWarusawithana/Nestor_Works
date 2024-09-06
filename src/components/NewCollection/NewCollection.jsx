import React from "react";
import new_collections from "../../../public/new_collections";
import Item from "../item/Item";
import { Libre_Baskerville } from "@next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const NewCollection = () => {
  return (
    <div className="text-center my-20">
      <h1
        className={`${libreBaskerville.className} lg:text-5xl md:text-4xl text-2xl mb-12`}
        style={{ color: "#242424" }}
      >
        New Collection
      </h1>

      <p className="md:mx-44 sm:mx-28 mx-10 mb-14 text-base" style={{ color: "#868686" }}>
        We are excited to unveil the new Lawson Collection, featuring three
        stunning quartz models that blend timeless simplicity with modern
        elegance. Available in a variety of sizes and colors, each watch boasts
        a durable stainless steel back, providing the perfect surface for
        personalized engravings. Best of all, engraving is offered free of
        charge with every Lawson series purchase, making each piece truly
        unique.
      </p>

      <div className="grid grid-cols-3 gap-9 mx-28">
        {new_collections.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.name}
              brand={item.brand}
              new_price={item.new_price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
