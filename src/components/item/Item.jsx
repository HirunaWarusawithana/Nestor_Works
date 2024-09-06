import React from "react";
import Image from "next/image";
import HeartIcon from "../../../public/heartInItem.svg";

const Item = (props) => {
  return (
    <div>
      <div
        style={{ backgroundColor: "white" }}
        className="item hover:shadow-xl duration-300 h-full"
      >
        <div className="pt-5">
          <Image className="ml-5 w-5 h-5" src={HeartIcon} />
        </div>
        <div className="flex justify-center items-center ">
          <Image
            src={props.image}
            className="w-1/2 hover:scale-110 duration-500 "
          ></Image>
        </div>
        <div className="p-4">
          <h1 className="text-sm text-zinc-800 font-medium">{props.name}</h1>
          <h2 className="text-sm text-gray-400">{props.brand}</h2>
          <div className=" my-4">
            <p style={{ color: "#242424" }} className="text-sm font-bold">
              ${props.new_price}
            </p>
            {/* <p className="text-sm text-gray-400 line-through">
              ${props.old_price}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
