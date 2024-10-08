import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[46rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#ffb07c"
      />
      

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#a29bfe" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-10 font-serif text-base md:text-2xl text-neutral-300 max-w-lg mx-auto">
          Explore our in-depth music courses and elevate your musical journey
          today. Whether you are just starting out or aiming to sharpen your
          skills, join us and discover your full potential.
        </p>
        <div className="mt-10">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-base font-bold text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
