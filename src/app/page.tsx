import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestmonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased
    bg-grid-white/[0.02]">
      
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
      <p className="text-gray-300 text-xl from-neutral-50 text-end px-4"> © Jayesh Joshi</p>
    </main>
  );
}
