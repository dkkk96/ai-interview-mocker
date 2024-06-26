//import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Header from "./dashboard/_components/Header";
import Stat from "./_components/Stat";
import WhySection from "./_components/WhySection";
import Testimonials from "./_components/Testimonials";
import Footer from "./_components/Footer";
import FAQ from "./_components/FAQ";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Stat/>
      <WhySection/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
