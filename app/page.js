import Image from "next/image";
import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";

export default function Home() {
  return (
    <>
    <UnderlinedText text={"hello"} active/>
    <TopBanner />
    <Navbar />
    </>
    
  );
}