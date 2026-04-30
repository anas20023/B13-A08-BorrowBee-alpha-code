import BookOffer from "@/components/BookOffer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
export default async function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar/>
      <BookOffer/>
      <HeroSection/>
    </div>
  );
}
