import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialBand } from "@/components/SocialBand";
import { Stats } from "@/components/Stats";
import { Bio } from "@/components/Bio";
import { Quote } from "@/components/Quote";
import { Universe } from "@/components/Universe";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SocialBand />
      <main id="main-content">
        <Stats />
        <Bio />
        <Quote />
        <Universe />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
