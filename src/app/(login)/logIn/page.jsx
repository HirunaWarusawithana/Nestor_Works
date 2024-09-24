"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

import backgroundImage from "../../../../public/close-up-clock-with-time-change.jpg";

import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from "../../firebase/config";
import { useRouter } from "next/navigation";

import { Libre_Baskerville } from "next/font/google";



const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const page = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [SignInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();

    const handleSignUp = async (e) =>{
        e.preventDefault();
        try{
            const res = await SignInWithEmailAndPassword(email, password);
            console.log({res});
            setEmail('');
            setPassword('');    
            router.push('/');
        }catch(error){
            console.error(error);
        }
    }

  return (

    <div className="tracking-wider">
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "45vh",
          position: "relative",
        }}
        className="flex flex-col justify-center items-center"
      >
        {/* Dark overlay */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div
          style={{ position: "relative", zIndex: 2 }}
          className="flex flex-col justify-center items-center"
        >
          <h1
            className={`${libreBaskerville.className} text-[#FFFFFF] lg:text-[52px] md:text-[44px] sm:text-[33px] text-[30px]`}
          >
            Account
          </h1>
          <p className="text-[#AFAFAF] text-[18px] ">
            <Link className="hover:text-[#FFFFFF] duration-300" href="/">
              Home
            </Link>
            / Log In
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center my-20">
        <h1
          className={`${libreBaskerville.className} text-[30px] lg:text-[52px] md:text-[44px] sm:text-[33px]`}
        >
          Account
        </h1>
        <form className="w-full max-w-lg mt-8">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              onChange={(e)=> setEmail(e.target.value)}
              className="w-full px-5 py-[14px]  bg-[#E9E8E7] text-[#AFAFAF] focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              onChange={(e)=> setPassword(e.target.value)}
              className="w-full px-5 py-[14px]  bg-[#E9E8E7] text-[#AFAFAF] focus:outline-none"
            />
          </div>
          <div className="mb-6 text-[#242424] hover:text-[#AF7F66] duration-300 text-center cursor-pointer">
            Forgot your password?
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleSignUp}
              className="px-7 text-[14px] py-[14px] bg-[#242424] text-white hover:bg-[#AF7F66] duration-300 focus:outline-none"
            >
              SIGN IN
            </button>
          </div>
          <div className="mt-6 text-[#242424] hover:text-[#AF7F66] duration-300 text-center cursor-pointer">
            Create account
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
