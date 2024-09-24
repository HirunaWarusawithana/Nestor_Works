import * as React from "react";
import our_collections from "../../../public/our_collection";
import Item from "../item/Item";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function OurProduct() {
  return (
    <div className="flex justify-center w-full">
      {/* Parent wrapper for centering */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-3/4 mx-auto"
      >
        <CarouselContent className="flex gap-4">
          {our_collections.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 p-2 overflow-hidden" 
            >
              <Item
                key={index}
                brand={item.brand}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                className="w-full h-full object-contain" 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default OurProduct;
