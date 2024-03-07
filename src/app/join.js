"use client";
import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative tracking-wider text-[30px] z-10 font-head bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold">
          Join the Community
        </h1>
        <p></p>
        <p className="text-neutral-500 font-texts max-w-lg mx-auto my-2 text-sm text-center relative z-10">
         lsadjabskfbdkfbjdkfbkbjbfks
         djnkjfnksjdbsfkbdskbfdksbsksbfbaskebfnkbdkf
         fdsfksbkbfsdkbk
        </p>
        
        <a href="" className="font-sub text-white text-center flex justify-center items-center">Join</a>

      </div>
      <BackgroundBeams />
    </div>
  );
}