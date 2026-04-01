import { AboutUs } from "../components/landing/AboutUs";
import { Features } from "../components/landing/Features";
import { Hero } from "../components/landing/Hero";
import { News } from "../components/landing/News";
import { Ticker } from "../components/landing/Ticker";
import { TickerBottom } from "../components/landing/TickerBottom";

export function HomePage() {
  return (
    <main>
      <Hero />

      <AboutUs variant="home" />
      <Features />
      <Ticker />
      <News />
      <TickerBottom />
    </main>
  );
}
