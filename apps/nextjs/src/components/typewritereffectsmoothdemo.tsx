"use client";

import { TypewriterEffectSmooth } from "./typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
        text: "Nurture",
      },
      {
        text: "leads",
      },
      {
        text: "and",
      },
      {
        text: "generate",
      },
      {
        text: "more",
      },
      {
        text: "revenue",
      },

      {
        text: "with",
      },
    {
      text: "Tipflow.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Join Tipflow Today
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Get Started Now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
}