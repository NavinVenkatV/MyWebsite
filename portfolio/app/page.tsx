import Image from "next/image";
import { Spotlight } from "./components/ui/Spotlight";
import Hero from "./components/Hero";
import { div } from "framer-motion/client";
import { FloatingNav } from "./components/ui/Floating-nav";
import Grid from "./components/ui/grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center flex-col items-center overflow-hidden px-5 sm:px-10 ">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={[
          {name:'Home',link:'/'}
        ]}/>
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
