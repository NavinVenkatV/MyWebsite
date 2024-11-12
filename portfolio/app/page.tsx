import { navItems } from "@/data";
import Grid from "./components/Gridpart";
import Hero from "./components/Hero";
import Recentproject from "./components/Recentproject";
import { FloatingNav } from "./components/ui/Floating-navbar";
import Experience from "./components/Experience";
import { TextRevealCardPreview } from "./components/Last";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center bg-black-100 overflow-hidden  sm:px-10 px-5">
      <div className="w-full max-w-7xl">
        <div>
            <FloatingNav 
            navItems={navItems}
            />
            <Hero/>
            <Grid/>
            <Recentproject/>
            <Experience/>
            <TextRevealCardPreview/>
            <Footer/>
        </div>
      </div>
    </div>
  );
}
