import HeroSection from "@/components/home/HeroSection"
import FeaturedCarousel from "@/components/home/FeaturedCarousel"
import CategoryTabs from "@/components/home/CategoryTabs"
import Testimonials from "@/components/home/Testimonials"
import Newsletter from "@/components/home/Newsletter"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedCarousel />
      <CategoryTabs />
      <Testimonials />
      <Newsletter />
    </main>
  )
}