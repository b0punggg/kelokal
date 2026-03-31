//import { CTA } from "./components/landing/CTA";
//import { FAQ } from "./components/landing/FAQ";
import { Features } from "./components/landing/Features";
import { Footer } from "./components/landing/Footer";
import { Hero } from "./components/landing/Hero";
//import { Logos } from './components/landing/Logos'
import { Navbar } from "./components/landing/Navbar";
import { News } from "./components/landing/News";
import { AboutUs } from "./components/landing/AboutUs";
//import { StatsBar } from "./components/landing/StatsBar";
//import { Testimonials } from "./components/landing/Testimonials";
//import { Pricing } from "./components/landing/Pricing";
//import { Testimonials } from "./components/landing/Testimonials";
import { Ticker } from "./components/landing/Ticker";
import { TickerBottom } from "./components/landing/TickerBottom";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        {/* <StatsBar /> */}
        <AboutUs />
        {/* <Logos /> */}
        <Features />
        <Ticker />
        <News />
        <TickerBottom />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <FAQ /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
}
