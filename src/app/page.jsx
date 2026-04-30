import BookOffer from "@/components/BookOffer";
import ContactForm from "@/components/Contact";
import FeaturedBooks from "@/components/FeaturedBooks";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import StudentsFeedback from "@/components/StudentsFeedback";
import Testimonials from "@/components/HowItWorks";
import ShowToast from "@/components/ShowToast";
export default async function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <BookOffer />
      <HeroSection />
      <FeaturedBooks />
      <StudentsFeedback />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ShowToast />
    </div>
  );
}
