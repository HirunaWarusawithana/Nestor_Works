import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "./EmblaButtons";
import fade from "embla-carousel-fade"; // Import the fade plugin
import carousel_collections from "../../../public/carousel_collection";
import Slide from "./Slide";

const EmblaCarousel = () => {
  // Pass the fade plugin to the useEmblaCarousel hook
  const fadeOptions = { easing: "ease-in-out", speed: 100 };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    fade(fadeOptions),
  ]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carousel_collections.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center"
            >
              <Slide topic={slide.topic} image={slide.image} />
            </div>
          ))}
        </div>
      </div>

      {/* Use PrevButton and NextButton */}
      <PrevButton
        onClick={() => emblaApi.scrollPrev()}
        enabled={prevBtnEnabled}
      />
      <NextButton
        onClick={() => emblaApi.scrollNext()}
        enabled={nextBtnEnabled}
      />
    </div>
  );
};

export default EmblaCarousel;
