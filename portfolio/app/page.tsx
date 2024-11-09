import Image from "next/image";
import { Spotlight } from "./components/ui/Spotlight";
import Hero from "./components/Hero";
import { div } from "framer-motion/client";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center flex-col items-center overflow-hidden px-5 sm:px-10 ">
      <div className="w-full max-w-7xl">
        <Hero/>
      </div>
    </main>
  );
}
