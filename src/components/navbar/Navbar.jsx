"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NestorLogo from "../../../public/logo-png.png";
import Heart from "../../../public/heart.svg";
import Cart from "../../../public/cart.svg";
import Person from "../../../public/user.svg";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../app/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Dropdown menu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/'); // Redirect to home page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  // Only redirect to login if there's no user and the pathname is not '/logIn'
  // if (!user && typeof window !== 'undefined' && window.location.pathname !== '/logIn') {
  //   router.push("/");
  // }

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
              <DropdownMenuItem>
                <Link href="/product/category">MEN</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/product/category">WOMEN</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/product/category">UNISEX</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/product/accessories">ACCESSORIES</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <Link href="/sale">SALE</Link>
        </li>
        <li>
          <Link href="/aboutUs">ABOUT US</Link>
        </li>
      </ul>

      <div className="logo">
        <Image
          src={NestorLogo}
          className="h-11 w-40 rounded-lg"
          alt="Nestor Logo"
        />
      </div>

      <div>
        <ul className="flex flex-row gap-7">
          {user ? (
            // If user is signed in, show the avatar frame
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex flex-row gap-2 justify-items-center items-center">
                  <Avatar>
                    <AvatarImage
                      src={user.photoURL || "https://github.com/shadcn.png"}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  ACCOUNT
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/profile">PROFILE</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    LOG OUT
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ) : (
            // If user is not signed in, show login and sign up links
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex flex-row gap-2 justify-items-center items-center">
                  <Image src={Person} className="size-5"></Image>
                  ACCOUNT
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/logIn">LOG IN</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/signUp">SIGN UP</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          )}

          <li>
            <Link
              href="/wishlist"
              className="flex flex-row gap-2 justify-items-center items-center"
            >
              <Image src={Heart} className="size-5"></Image>WISHLIST
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="flex flex-row gap-2 justify-items-center items-center"
            >
              <Image src={Cart} className="size-5"></Image>CART
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
