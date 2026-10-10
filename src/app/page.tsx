import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/ProjectsSection";
import DribbbleCarousel from "@/components/home/DribbbleCarousel";
import VideoSection from "@/components/home/VideoSection";
import WhyMe from "@/components/home/WhyMe";
import Tools from "@/components/home/Tools";
import Metrics from "@/components/home/Metrics";
import Testimonials from "@/components/home/Testimonials";
import Articles from "@/components/home/Articles";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <DribbbleCarousel />
      <WhyMe />
      <Tools />
      <Metrics />
      <Testimonials />
      <VideoSection />
      <Articles />
      <Newsletter />
    </>
  );
}