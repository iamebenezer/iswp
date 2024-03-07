"use client";
import React from "react";
import { PinContainer } from "./components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-96 w-full flex items-center justify-center ">
      <PinContainer
        title="iswpcommunity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:w-[40rem] h-[20rem] ">
          <h3 className="font-sub tracking-wider flex justify-center items-center !pb-2 !m-0 font-bold  text-base text-slate-100">
            LOCATION
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="font-texts tracking-wider text-slate-500 ">
           PARKISTAN
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-2 bg-[url('../../public/images/2.jpeg')] bg-cover bg-no-repeat bg-center"  />
        </div>
      </PinContainer>
    </div>
  );
}
