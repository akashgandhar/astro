import Image from "next/image";
import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import UnderlinedText from "@/utils/UnderlinedText";
import Slider from "./components/Slider";
import UnderSlider from "./components/UnderSlider";
import Testimonials from "./components/Testimonials";
import BookAppointment from "./components/BookAppointment";
import Interview from "./components/Interview";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Slider />
      <UnderSlider />

      <BookAppointment/>
      <Interview/>
      <Testimonials/>

      </>

  );
}