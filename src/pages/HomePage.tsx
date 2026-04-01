import { AboutUs } from "../components/landing/AboutUs";
import { Features } from "../components/landing/Features";
import { Hero } from "../components/landing/Hero";
import { News } from "../components/landing/News";
import { TickerBottom } from "../components/landing/TickerBottom";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <TickerBottom />
      <AboutUs variant="home" />
      <News />
    </main>
  );
}
