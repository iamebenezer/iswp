"use client";
import React from "react";
import { ContainerScroll } from "./components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-head tracking-wider font-semibold text-white dark:text-white">
            I STAND WITH <br />
              <span className="text-4xl font-head tracking-wider md:text-[6rem] font-bold mt-1 leading-none">
                PARKISTAN
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "KJA",
    designation: "DSAKJ ",
    image: "https://img.freepik.com/premium-photo/army-man-with-pakistan-flag_191066-673.jpg",
  
  },
  {
    name: "KJA",
    designation: "DSAKJ ",
    image: "https://img.freepik.com/premium-photo/army-man-with-pakistan-flag_191066-679.jpg",
    badge: "Mentor",
  },
  {
    name: "KJA",
    designation: "DSAKJ ",
    image: "https://img.freepik.com/premium-photo/army-man-with-pakistan-flag_191066-687.jpg",
    badge: "Mentor",
  },
  {
    name: "KJA",
    designation: "DSAKJ ",
    image: "https://img.freepik.com/premium-photo/pakistani-soldier-with-machine-gun-flag-pakistan-8k-realistic_901075-1355.jpg",
 
  },
  {
    name: "KJA",
    designation: "DSAKJ ",
    image: "https://img.freepik.com/premium-photo/portrait-military-man-soldier-background-special-forces-generative-ai_151355-16520.jpg",
    badge: "Mentor",
  },
  {
    name: "KJA",
    designation: "DSAKJ ",
    image: "https://img.freepik.com/premium-photo/soldier-with-pakistan-flag-beautiful-sunset_999679-184.jpg",
    badge: "Mentor",
  },

];
