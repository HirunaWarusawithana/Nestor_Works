"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NestorLogo from "../../../public/logo-png.png";
import Heart from "../../../public/heart.svg";
import Cart from "../../../public/cart.svg";
import Person from "../../../public/user.svg";

//dropdown menu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
  return (
    <div className="navbar grid grid-cols-2 lg:grid-cols-3 text-sm font-normal py-5 justify-items-center items-center">
      <ul className="flex flex-row gap-7">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <DropdownMenu>
              <DropdownMenuTrigger>CATEGORY</DropdownMenuTrigger>
              <DropdownMenuContent>       
                <DropdownMenuItem><Link href="/product/category">MEN</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/product/category">WOMEN</Link></DropdownMenuItem>  
                <DropdownMenuItem><Link href="/product/category">UNISEX</Link></DropdownMenuItem>  
                <DropdownMenuItem><Link href="/product/accessories">ACCESSORIES</Link></DropdownMenuItem>  
              </DropdownMenuContent>
            </DropdownMenu>
        </li>
        <li>
          <Link href="/sale">SALE</Link>
        </li>
        <li>
          <Link href="/product/contactUs">CONTACT US</Link>
        </li>
      </ul>

      <div className="logo">
        <Image
          src={NestorLogo}
          className=" h-11 w-40 rounded-lg"
          alt="Nestor Logo"
        />
      </div>

      <div className="">
        <ul className="flex flex-row gap-7 ">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-row gap-2 justify-items-center items-center"><Image src={Person} className="size-5"></Image>ACCOUNT</DropdownMenuTrigger>
              <DropdownMenuContent>       
                <DropdownMenuItem>SIGN IN</DropdownMenuItem>
                <DropdownMenuItem>SIGN UP</DropdownMenuItem>  
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li><Link href="/wishlist" className="flex flex-row gap-2 justify-items-center items-center" ><Image src={Heart} className="size-5"></Image>WISHLIST</Link></li>
          <li><Link href="/cart" className="flex flex-row gap-2 justify-items-center items-center"><Image src={Cart} className="size-5"></Image>CART</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
