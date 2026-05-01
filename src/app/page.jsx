import BookOffer from "@/components/books/BookOffer";
import ContactForm from "@/components/home/Contact";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import StudentsFeedback from "@/components/home/StudentsFeedback";
import Testimonials from "@/components/home/HowItWorks";
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
