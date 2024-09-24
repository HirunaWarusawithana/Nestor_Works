import React from "react";
import Image from "next/image";
import OwnerImage from "../../../public/owner1.webp";

import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const OwnerCards = () => {
  return (
    <div className="max-w-6xl lg:mx-24 text-center my-24">
      <h2 className={`${libreBaskerville.className} text-4xl`}>
        The Best of Professionals
      </h2>
      <p className="w-2/3 my-11 text-center mx-auto" style={{ color: "#868686" }}>
        Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
        Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
        Maecenas tempus, tellus eget condimentum rhoncus
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="shadow-md relative">
          <Image
            src={OwnerImage}
            alt="David Perkins"
            className="w-full h-full object-cover"
          ></Image>
          <div className="p-6 absolute  bottom-[10%] ">
            <p className="text-sm text-gray-500 uppercase">Repair Master</p>
            <h3 className="text-xl font-semibold mt-2">David Perkins</h3>
          </div>
        </div>

        <div className="shadow-md relative">
          <Image
            src={OwnerImage}
            alt="David Perkins"
            className="w-full h-full object-cover"
          ></Image>
          <div className="p-6 absolute  bottom-[10%] ">
            <p className="text-sm text-gray-500 uppercase">Repair Master</p>
            <h3 className="text-xl font-semibold mt-2">David Perkins</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerCards;
