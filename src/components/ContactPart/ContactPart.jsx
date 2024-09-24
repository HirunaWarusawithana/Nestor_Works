import React from "react";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ContactPart = () => {
  return (
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mx-24">
      <div class="border border-gray-200 px-5 py-12 text-center">
        <h2
          class={`${libreBaskerville.className} md:text-3xl text-2xl mb-4 text-[#242424]`}
        >
          Address
        </h2>
        <p class="text-[#868686] text-[16px] mb-[10px]">
          No : 50 Station Road,
        </p>
        <p class="text-[#868686]">Ambalangoda, Galle</p>
      </div>

      <div class="border border-gray-200 px-5 py-12 text-center">
        <h2
          class={`${libreBaskerville.className} md:text-3xl text-2xl mb-4 text-[#242424]`}
        >
          Phone
        </h2>
        <p class="text-[#868686] text-[16px] mb-[10px]">091 2258306</p>
      </div>

      <div class="border border-gray-200 px-5 py-12 text-center">
        <h2
          class={`${libreBaskerville.className} md:text-3xl text-2xl mb-4 text-[#242424]`}
        >
          Mail
        </h2>
        <p class="text-[#868686] text-[16px] mb-[10px]">nestor1914@gmail.com</p>
        <p class="text-[#868686]">nestorworks.com</p>
      </div>

      <div class="border border-gray-200 px-5 py-12 text-center">
        <h2
          class={`${libreBaskerville.className} md:text-3xl text-2xl mb-4 text-[#242424]`}
        >
          Hours
        </h2>
        <p class="text-[#868686] text-[16px] mb-[10px]">
          Mon - Sat: 8.30 AM - 6 PM
        </p>
      </div>
    </div>
  );
};

export default ContactPart;
