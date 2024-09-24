import React from 'react'
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const StatsSummary = () => {
  return (
    <div class="bg-[#F8F7F6] py-28 mx-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-8 text-center">
            <div>
                <p class={`${libreBaskerville.className} sm:text-[30px] md:text-[36px] text-[26px] font-semibold text-gray-800`}>10,000+</p>
                <p class="text-sm font-medium text-gray-500">CLIENTS</p>
            </div>
            <div>
                <p class={`${libreBaskerville.className} sm:text-[30px] md:text-[36px] text-[26px] font-semibold text-gray-800`}>1914</p>
                <p class="text-sm font-medium text-gray-500">ESTD</p>
            </div>
            <div>
                <p class={`${libreBaskerville.className} sm:text-[30px] md:text-[36px] text-[26px] font-semibold text-gray-800`}>10+</p>
                <p class="text-sm font-medium text-gray-500">TOP BRANDS</p>
            </div>
            <div>
                <p class={`${libreBaskerville.className} sm:text-[30px] md:text-[36px] text-[26px] font-semibold text-gray-800`}>15</p>
                <p class="text-sm font-medium text-gray-500">SKILLED EXPERTS</p>
            </div>
            <div>
                <p class={`${libreBaskerville.className} sm:text-[30px] md:text-[36px] text-[26px] font-semibold text-gray-800`}>4</p>
                <p class="text-sm font-medium text-gray-500">Locations</p>
            </div>
        </div>
    </div>
</div>

  )
}

export default StatsSummary