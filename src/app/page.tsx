import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SocialProof } from "@/components/sections/social-proof";
import { WhyOctupie } from "@/components/sections/why-octupie";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <WhyOctupie />
        <SocialProof />
        <Cta />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
